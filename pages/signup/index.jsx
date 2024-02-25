import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SignUpPopup = ({ success = false, message, open, setOpen = () => {} }) => {
  const [comp, setComp] = useState(null);

  useEffect(() => {
    success
      ? setComp(
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
        )
      : setComp(
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
              onClick={() => setOpen(false)}
            >
              Retry
            </button>
          </>
        );
  }, [open]);

  return <div className="modalPpup _flex_col_center _p50 _gap40">{comp}</div>;
};

const index = () => {
  const router = useRouter();

  const modalState = useState(false);
  const [open, setOpen] = modalState;
  const [modalComponent, setModalComponent] = useState(<SignUpPopup />);

  const handleChange = (e) => {
    let value = e.target.value;

    if (e.target.name == "subscribedToNewsletter") {
      value = Boolean(Number(value));
    }
    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const FIELDS = [
    {
      handleChange,
      name: "firstName",
      label: "First Name",
      ph: "John Doe",
    },
    {
      handleChange,
      name: "lastName",
      label: "Last Name",
      ph: "John Doe",
    },
    {
      handleChange,
      name: "email",
      label: "Email Address",
      ph: "johndoe@example.com",
      type: "email",
    },
    {
      handleChange,
      name: "password",
      label: "Password",
      ph: "*****************",
      type: "password",
    },
    {
      handleChange,
      name: "password2",
      label: "Confirm Password",
      ph: "*****************",
      type: "password",
    },
    // {
    //   handleChange,
    //   name: "",
    //   label: "Due Date",
    //   ph: "Dec 23, 2024",
    // },
  ];

  const [values, setValues] = useState({
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    subscribedToNewsletter: false,
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);

    if (!values.email) {
      ShowErrors("Please provide an email address");
      return;
    } else if (!values.firstName | !values.lastName) {
      ShowErrors("Please fill all fields");
      return;
    } else if (!values.password) {
      ShowErrors("Please provide a password");
      return;
    } else if (values.password !== values.password2) {
      ShowErrors(["Passwords does not match"]);
      return;
    }

    delete values.password2;
    let data = { ...values };
    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.register,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then((response) => {
        console.log("register response");
        console.log(JSON.stringify(response.data));
        console.log(JSON.stringify(response));
        // alert(JSON.stringify(response.data));
        // dispatchFunc(typ.setAll, response.data);
        ShowSuccess("Sign Up Successful");
        router.push(`/verify/email/${values.email}`);
      })
      .catch((e) => {
        console.log("login error", e);

        try {
          // dispatchFunc(typ.clearAll);
          if (String(e.response.status).startsWith("5")) {
            return ShowErrors(["Service Temporarily Unavailable"]);
          }
          if (e.response?.data?.errors?.length < 15) {
            return ShowErrors([...e?.response?.data?.errorMsg]);
          }
          return ShowErrors(e?.response?.data?.errorMsg ?? "An Error Occurred");
        } catch (error) {
          console.log(error);
          return ShowErrors("An Error Occurred");
        }
      })
      .finally((error) => setLoading(false));
  };

  return (
    <AuthLayout
      showFormTitle={true}
      headerText="Sign Up"
      headerDesc="Create a FREE account in seconds."
      login={false}
      btnText="Sign Up"
      handleSubmit={handleSubmit}
      loading={loading}
      modalState={modalState}
      modalComponent={modalComponent}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}
        <div className="otherAuthLink _center" style={{}}>
          By proceeding, you agree to our{" "}
          <Link href={""}>Terms of Service </Link> and{" "}
          <Link href={""}> Privacy Policy</Link>.
        </div>

        <RadioBox
          item={{
            label: "Subscribe to our Newsletter",
            name: "subscribedToNewsletter",
            handleChange,
            options: [
              { id: 1, ph: "Yes" },
              { id: 0, ph: "No" },
            ],
          }}
        />
      </Form>
    </AuthLayout>
  );
};

export default index;
