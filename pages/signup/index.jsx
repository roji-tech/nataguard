import { errorIcon, successIcon } from "@components/svgs/nataguard";
import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const SignUpPopup = ({
  success = false,
  message,
  open,
  setOpen = () => {},
}) => {
  const [comp, setComp] = useState(null);

  useEffect(() => {
    success
      ? setComp(
          <>
            {successIcon}

            <div className="_flex_col_center">
              <h3>Sign up Successful!</h3>
              <p className="_center">
                Congratulations, you have successfully created an account.
                Kindly check your email address to verify your account with the
                One Time PIN.
              </p>
            </div>
          </>
        )
      : setComp(
          <>
            {errorIcon}

            <div className="_flex_col_center">
              <h3>Sign Up Unsuccessful!</h3>
              <p> {message ?? "An error occured, please try again."} </p>
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
        // ShowSuccess("Sign Up Successful");

        setOpen(true);
        setModalComponent(
          <SignUpPopup success={true} open={open} setOpen={setOpen} />
        );

        setTimeout(() => {
          router.push(`/verify/email/${values.email}`);
        }, 3000);
      })
      .catch((e) => {
        setOpen(true);

        setModalComponent(
          <SignUpPopup
            message={
              e?.response?.data?.errorMsg ||
              e?.response?.data?.DuplicateEmail ||
              e?.response?.data?.PasswordTooShort ||
              undefined
            }
            open={open}
            setOpen={setOpen}
          />
        );

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
      // middleElements=""
      bottomElements={""}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}

        {/* <div className="otherAuthLink _center" style={{}}>
          By proceeding, you agree to our{" "}
          <Link href={""}>Terms of Service </Link> and{" "}
          <Link href={""}> Privacy Policy</Link>.
        </div> */}

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
