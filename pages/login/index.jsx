import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useAuth from "@contexts/AuthContext";
import { typ } from "@reducers/AuthReducer";

const LoginPopup = ({ success = false, message, setOpen = () => {} }) => {
  return (
    <div className="modalPpup _flex_col_center _p50 _gap40">
      {success ? (
        <>
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 110C87.5 110 110 87.5 110 60C110 32.5 87.5 10 60 10C32.5 10 10 32.5 10 60C10 87.5 32.5 110 60 110Z"
              stroke="#FFAD33"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.75 60.0001L52.9 74.1501L81.25 45.8501"
              stroke="#FFAD33"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="_flex_col_center">
            <h3>Login Successful!</h3>
          </div>
        </>
      ) : (
        <>
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60 110C87.5 110 110 87.5 110 60C110 32.5 87.5 10 60 10C32.5 10 10 32.5 10 60C10 87.5 32.5 110 60 110Z"
              stroke="#FF3535"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.8501 74.1501L74.1501 45.8501"
              stroke="#FF3535"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M74.1501 74.1501L45.8501 45.8501"
              stroke="#FF3535"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="_flex_col_center">
            <h3>Login Unsuccessful!</h3>
            <p> {message ?? "Invalid credentials, please try again."} </p>
          </div>

          <button
            type="button"
            className="_full_w _p20 _grid_center"
            style={{ background: "var(--nataBlue)", fontSize: 20 }}
            onClick={setOpen(false)}
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
};

const index = () => {
  const { logout, state, dispatchFunc } = useAuth();

  const [values, setValues] = useState({ email: "", password: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [modalComponent, setModalComponent] = useState(<LoginPopup />);
  const modalState = useState(false);
  const [open, setOpen] = modalState;

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const FIELDS = [
    {
      name: "email",
      label: "Username / Email Address",
      ph: "Johndoe / johndoe@example.com",
      handleChange,
    },
    {
      name: "password",
      label: "Password",
      ph: "*****************",
      type: "password",
      handleChange,
    },
  ];

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(values);
    if (!values.email) {
      ShowErrors("Please provide an email address");
      return;
    } else if (!values.password) {
      ShowErrors(["Please provide a password"]);
      return;
    }

    let data = { ...values };
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      timeout: 10000,
      url: api.login,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };
    setLoading(true);

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatchFunc(typ.setAll, response.data);
        setOpen(true);
        setModalComponent(<LoginPopup success={true} />);

        setTimeout(() => {
          router.replace("/dashboard");
        }, 3000);
      })
      .catch((e) => {
        console.log("login error", e?.response);
        setOpen(true);

        try {
          setModalComponent(
            <LoginPopup
              message={e?.response?.data?.errorMsg ?? undefined}
              setOpen={setOpen}
            />
          );

          // dispatchFunc(typ.clearAll);
          if (String(e?.response?.status).startsWith("5")) {
            return ShowErrors(["Service Temporarily Unavailable"]);
          }
          if (e.response?.data?.errors?.length < 15) {
            return ShowErrors([...e?.response?.data?.errorMsg]);
          }

          return ShowErrors(e?.response?.data?.errorMsg);
        } catch (error) {
          console.log(error);
          return ShowErrors("An Error Occurred");
        }
      })
      .finally((error) => setLoading(false));
  };

  return (
    <AuthLayout
      showFormTitle={false}
      handleSubmit={handleLogin}
      loading={loading}
      modalState={modalState}
      modalComponent={modalComponent}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}
        <div
          className="otherAuthLink _flex_jcsb"
          style={{ marginTop: "-20px" }}
        >
          <Link href={"/forgot"}>Forgot Password</Link>
          <Link href={"/signup"}>Sign Up</Link>
        </div>

        <RadioBox
          item={{
            label: "Remember Me",
            name: "remember_radio",
          }}
        />
      </Form>
    </AuthLayout>
  );
};

export default index;
