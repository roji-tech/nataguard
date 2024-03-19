import Spinner from "@components/spinners/Spinner1";
import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CircleLoader } from "react-spinners";
import styled from "styled-components";

const LoginPopup = ({ success = false, message, open, setOpen = () => {} }) => {
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
              <h3>OTP Verification Successful!</h3>
              <p>You can now login to your account.</p>
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
              <h3>OTP Verification Failed!</h3>
              <p>
                {" "}
                {message ??
                  "That must have been an error. Try inputting the correct code."}{" "}
              </p>
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

  return <div className="modalPopup _flex_col_center _p50 _gap40">{comp}</div>;
};

const index = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(Array(6).fill(""));

  const inputRef = useRef(Array(6));
  const handleOTPChange = (event, index) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
    setValues((prev) => ({ ...prev, token: newOtp.join("") }));

    // Focus on previous input on backspace with empty value
    if (
      (event.key === "Backspace" ||
        event.nativeEvent.inputType === "deleteContentBackward") &&
      event.target.value === ""
    ) {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    } else if (event.target.value.length === 1 && index < otp.length - 1) {
      inputRef.current[index + 1].focus();
    }
  };

  const { email: userEmail } = router.query;
  const [modalComponent, setModalComponent] = useState(<LoginPopup />);
  const modalState = useState(false);
  const [open, setOpen] = modalState;

  const [values, setValues] = useState({
    email: "",
    token: "",
  });

  const FIELDS = [
    // {
    //   handleChange,
    //   name: "email",
    //   label: "Email Address",
    //   ph: "johndoe@example.com",
    //   type: "email",
    //   value: values.email,
    // },
    {
      handleChange: handleOTPChange,
      name: "token",
      label: <span className="_flex_center _full_w">OTP Code</span>,
      ph: "000000",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleVerifyEmail = async (event) => {
    event.preventDefault();
    console.log(values, otp.join(""));

    if (!values.email) {
      ShowErrors("Please provide an email address");
      return;
    } else if (!values.token) {
      ShowErrors(["Input the pin from your email"]);
      return;
    }

    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.verify_email,
      headers: {
        "Content-Type": "application/json",
      },
      params: { ...values },
    };

    await axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(JSON.stringify(response));
        // alert(JSON.stringify(response.data));
        // dispatchFunc(typ.setAll, response.data);

        setOpen(true);
        setModalComponent(
          <LoginPopup success={true} open={open} setOpen={setOpen} />
        );

        setTimeout(() => {
          router.push("/login");
        }, 3000);
      })
      .catch((e) => {
        console.log("login error", e);

        setOpen(true);

        setModalComponent(
          <LoginPopup
            message={e?.response?.data?.errorMsg ?? undefined}
            open={open}
            setOpen={setOpen}
          />
        );

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

  const resendToken = async () => {
    setLoading2(true);

    if (!values.email) {
      ShowErrors("Please provide an email address");
      return;
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.resend_verify_email_token,
      headers: {
        "Content-Type": "application/json",
      },
      params: { email: values?.email },
    };

    await axios(config)
      .then((response) => {
        console.log("Email Verify resend");
        console.log(JSON.stringify(response.data));
        console.log(JSON.stringify(response));
        ShowSuccess("Token Sent");
      })
      .catch((e) => {
        console.log("login error", e);

        try {
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
      .finally((error) => setLoading2(false));
  };

  useEffect(() => {
    console.log(router.query);
    setValues((prev) => ({ ...prev, email: userEmail }));
  }, [userEmail]);

  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Practitioner OTP Verification"
      headerDesc="Follow these steps to activate your account."
      login={false}
      btnText="Verify"
      handleSubmit={handleVerifyEmail}
      loading={loading}
      middleElements={""}
      modalState={modalState}
      modalComponent={modalComponent}
    >
      <Form>
        {/* {FIELDS.map((item, i) => (
          <InputBox key={i} item={item} />
        ))} */}

        <OTPInputStyle className="_flex_jcc _gap15">
          {otp.map((value, index) => (
            <input
              key={index}
              maxLength={1}
              className="otpInput _grid_center"
              placeholder="___"
              value={value}
              onChange={(e) => handleOTPChange(e, index)}
              ref={(el) => (inputRef.current[index] = el)}
            />
          ))}
        </OTPInputStyle>

        {/* <div className="otherAuthLink _flex_jcsb">
          <h4
            className="_pointer _flex _gap10 _align_center goldenLink"
            href={"/login"}
            onClick={resendToken}
          >
            Resend Token
            <CircleLoader loading={loading2} size={20} color="#068fe4" />
          </h4>
          <Link className="goldenLink" href={"/login"}>
            Login
          </Link>
        </div> */}
      </Form>
    </AuthLayout>
  );
};

export default index;

export const OTPInputStyle = styled.div`
  &&& {
    .otpInput {
      width: 80px;
      height: 72px;
      padding: 16px 20px;
      border-radius: 8px;
      background: #f5f5f5;
      color: #000;
      font-size: 40px;
    }

    @media screen and (max-width: 800px) {
      flex-wrap: wrap;

      .otpInput {
        width: calc(80px * 0.6);
        height: calc(72px * 0.6);
        padding: 10px 12px;
        border-radius: 8px;
        background: #f5f5f5;
        color: #000;
        font-size: 30px;
      }
    }
  }
`;
