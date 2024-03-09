import { errorIcon, successIcon } from "@components/svgs/nataguard";
import { api } from "@config";
import { AuthLayout, Form, InputBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ForgotPopup = ({
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
              <h3>Retrieval Code Sent</h3>
              <p className="_center">
                A mail has been sent to the email address you provided
                containing a retrieval code. Use that code to reset your account
                password.
              </p>
              <button
                type="button"
                className="_full_w _p20 _grid_center"
                style={{ background: "var(--nataBlue)", fontSize: 20 }}
                onClick={() => router.push(`/forgot/pin/${email}`)}
              >
                Continue
              </button>
            </div>
          </>
        )
      : setComp(
          <>
            {errorIcon}

            <div className="_flex_col_center">
              <h3>An Error Ocurred!</h3>
              <p> {message ?? "Please try again."} </p>
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
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const modalState = useState(false);
  const [open, setOpen] = modalState;
  const [modalComponent, setModalComponent] = useState(<ForgotPopup />);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const item = {
    label: "Email Address",
    name: "email",
    ph: "johndoe@example.com",
    type: "email",
    handleChange,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);

    if (!email) {
      ShowErrors("Please provide an email address");
      return;
    }

    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.forgot_password,
      headers: {
        "Content-Type": "application/json",
      },
      params: { email },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // ShowSuccess("Retrieval Code Sent");

        setOpen(true);
        setModalComponent(
          <ForgotPopup success={true} open={open} setOpen={setOpen} />
        );

        setTimeout(() => {
          router.push(`/forgot/pin/${email}`);
        }, 10000);
      })
      .catch((e) => {
        setOpen(true);

        setModalComponent(
          <ForgotPopup
            message={e?.response?.data?.errorMsg ?? undefined}
            open={open}
            setOpen={setOpen}
          />
        );

        console.log("login error", e?.response);

        // try {
        //   if (String(e.response.status).startsWith("5")) {
        //     return ShowErrors(["Service Temporarily Unavailable"]);
        //   }
        //   if (e.response?.data?.errors?.length < 15) {
        //     return ShowErrors([...e?.response?.data?.errorMsg]);
        //   }
        //   return ShowErrors(e?.response?.data?.errorMsg ?? "An Error Occurred");
        // } catch (error) {
        //   console.log(error);
        //   return ShowErrors("An Error Occurred");
        // }
      })
      .finally((error) => setLoading(false));
  };

  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Forgot Password"
      headerDesc="Retrieve your password."
      btnText="Send Retrieval Code"
      showSocials={false}
      handleSubmit={handleSubmit}
      loading={loading}
      modalState={modalState}
      modalComponent={modalComponent}
      bottomElements={
        <>
          <div className="_full_h _flex_col_jcsb">
            <Link href={"/login"} className="_flex_center _gap20 _align_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                viewBox="0 0 29 28"
                fill="none"
              >
                <g clip-path="url(#clip0_2328_12347)">
                  <path
                    d="M9.83333 5.8335C9.83333 6.69916 8.97817 7.99183 8.1125 9.07683C6.9995 10.4768 5.6695 11.6983 4.14467 12.6305C3.00133 13.3293 1.61533 14.0002 0.5 14.0002M0.5 14.0002C1.61533 14.0002 3.0025 14.671 4.14467 15.3698C5.6695 16.3032 6.9995 17.5247 8.1125 18.9223C8.97817 20.0085 9.83333 21.3035 9.83333 22.1668M0.5 14.0002L28.5 14.0002"
                    stroke="#122025"
                    stroke-width="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2328_12347">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="matrix(0 1 1 0 0.5 0)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Return to Login Page
            </Link>

            <p className="_center">
              Read our{" "}
              <Link className="goldenLink" href={""}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link className="goldenLink" href={""}>
                Privacy Policy
              </Link>
              .{" "}
            </p>
          </div>
        </>
      }
    >
      <Form>
        <InputBox item={item} />
      </Form>
    </AuthLayout>
  );
};

export default index;
