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

const index = () => {
  const { logout, state, dispatchFunc } = useAuth();

  const [values, setValues] = useState({ email: "", password: "" });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
    console.log(values, event);
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
        ShowSuccess("Logging you in");
        dispatchFunc(typ.setAll, response.data);

        router.replace("/dashboard");
      })
      .catch((e) => {
        console.log("login error", e?.response);

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
      showFormTitle={false}
      handleSubmit={handleLogin}
      loading={loading}
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
