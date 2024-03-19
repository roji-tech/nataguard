import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      name: "email",
      label: "Email Address",
      ph: "johndoe@example.com",
      type: "email",
      value: values.email,
    },
    {
      handleChange,
      name: "token",
      label: "Pin",
      ph: "00000",
    },
  ];

  const [loading, setLoading] = useState(false);

  const handleVerifyEmail = (event) => {
    event.preventDefault();
    console.log(values);

    if (!values.email) {
      ShowErrors("Please provide an email address");
      return;
    } else if (!values.token) {
      ShowErrors(["Input the pin from your email"]);
      return;
    }

    let data = { ...values };
    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.verify_email,
      headers: {
        "Content-Type": "application/json",
      },
      data,
    };

    axios(config)
      .then((response) => {
        console.log("Email Verify response");
        console.log(JSON.stringify(response.data));
        console.log(JSON.stringify(response));
        // alert(JSON.stringify(response.data));
        // dispatchFunc(typ.setAll, response.data);
        ShowSuccess("Sign Up Successful");
        router.push("/login");
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

  useEffect(() => {
    console.log(router.query);
    setValues((prev) => ({ ...prev, email: userEmail }));
  }, []);

  return (
    <AuthLayout
      showFormTitle={true}
      headerText="Practitioner Verify Email"
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

        <div className="otherAuthLink _flex_jce">
          <Link href={"/login"}>Login</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
