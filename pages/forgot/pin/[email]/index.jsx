import Spinner from "@components/spinners/Spinner1";
import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const index = () => {
  const router = useRouter();

  const { email: userEmail } = router.query;

  const handleChange = (e) => {
    let value = e.target.value;
    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const [values, setValues] = useState({
    email: "",
    token: "",
  });

  const FIELDS = [
    {
      handleChange,
      name: "token",
      label: "Pin",
      ph: "000000",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

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
      showFormTitle={true}
      headerText="Verify Email"
      headerDesc="Verify your email account to continue."
      login={false}
      btnText="Verify"
      handleSubmit={handleVerifyEmail}
      loading={loading}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}

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
