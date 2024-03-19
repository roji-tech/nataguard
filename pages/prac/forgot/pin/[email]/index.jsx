import Spinner from "@components/spinners/Spinner1";
import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { OTPInputStyle } from "@pages/verify/email/[email]";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { CircleLoader } from "react-spinners";

const VerifyPinPopup = ({
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
  const router = useRouter();
  const { email: userEmail } = router.query;

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [values, setValues] = useState({
    email: "",
    token: "",
  });

  // Modal Popup Requirements
  const modalState = useState(false);
  const [open, setOpen] = modalState;
  const [modalComponent, setModalComponent] = useState(<VerifyPinPopup />);

  // OTP Requirements
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

  const handleVerifyEmail = async (event) => {
    event.preventDefault();
    console.log(values);

    if (!values.token) {
      ShowErrors(["Input the pin from your email"]);
      return;
    }

    setLoading(true);

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: api.validate_password_token,
      headers: {
        "Content-Type": "application/json",
      },
      params: { ...values },
    };

    await axios(config)
      .then((response) => {
        console.log("Email Verify response");
        console.log(JSON.stringify(response.data));
        console.log(JSON.stringify(response));
        // alert(JSON.stringify(response.data));
        // dispatchFunc(typ.setAll, response.data);
        ShowSuccess("Verification Successful");

        setOpen(true);
        setModalComponent(
          <VerifyPinPopup success={true} open={open} setOpen={setOpen} />
        );

        setTimeout(() => {
          router.push(`/forgot/pin/${email}`);
        }, 10000);

        router.push(`/forgot/pin/${values?.email}/${values?.token}`);
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
          return ShowErrors("There was an Error");
        }
      })
      .finally((error) => setLoading(false));
  };

  const resendToken = async () => {
    setLoading2(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.forgot_password,
      headers: {
        "Content-Type": "application/json",
      },
      params: { ...values },
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
            return ShowErrors([...e.response?.data?.errorMsg]);
          }
          return ShowErrors(e?.response?.data?.errorMsg ?? "An Error Occurred");
        } catch (error) {
          console.log(error);
          return ShowErrors("There was an Error");
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
      headerText="Verify Email"
      headerDesc="Verify your email account to continue."
      login={false}
      btnText="Verify"
      handleSubmit={handleVerifyEmail}
      loading={loading}
    >
      <Form>
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

        <div className="otherAuthLink _flex_jcsb">
          <h4
            className="_pointer _flex _gap10 _align_center"
            href={"/login"}
            onClick={resendToken}
          >
            Resend Token
            <CircleLoader loading={loading2} size={20} color="#068fe4" />
          </h4>
          <Link href={"/login"}>Login</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
