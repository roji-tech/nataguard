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
  const { email, token } = router.query;

  const handleChange = (e) => {
    let value = e.target.value;

    setValues((prev) => ({ ...prev, [e.target.name]: value }));
  };

  const FIELDS = [
    {
      handleChange,
      name: "newPassword",
      label: "Password",
      ph: "**********",
      type: "password",
    },
    {
      handleChange,
      name: "password2",
      label: "Confirm your new password",
      ph: "**********",
      type: "password",
    },
  ];

  const [values, setValues] = useState({
    email: "",
    token: "",
    newPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);

    if (!values.newPassword) {
      ShowErrors("Please provide a password");
      return;
    } else if (values.newPassword !== values.password2) {
      ShowErrors(["Passwords does not match"]);
      return;
    }

    delete values.password2;
    setLoading(true);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: api.password_reset,
      headers: {
        "Content-Type": "application/json",
      },
      params: { ...values },
    };

    console.log(config.params);

    axios(config)
      .then((response) => {
        console.log("register response");
        console.log(JSON.stringify(response.data));
        console.log(JSON.stringify(response));
        // alert(JSON.stringify(response.data));
        // dispatchFunc(typ.setAll, response.data);
        ShowSuccess("Password Reset Successful");
        router.push(`/login`);
      })
      .catch((e) => {
        console.log("Password Reset error", e);

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
    setValues((prev) => ({ ...prev, email, token }));
  }, [email, token]);

  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Set your New Password"
      headerDesc="Your new password should be different from passwords previously used."
      login={false}
      btnText="Reset Password"
      handleSubmit={handleSubmit}
      showSocials={false}
      loading={loading}
    >
      <Form>
        {FIELDS.map((item, i) => (
          <InputBox key={item?.name ?? i} item={item} />
        ))}

        <div className="otherAuthLink _flex_jce" style={{ marginTop: "-20px" }}>
          <Link href={"/login"} className="_flex_center _gap20 _align_center">
            <svg
              width="32"
              height="19"
              viewBox="0 0 32 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.6667 0.166504C10.6667 1.15584 9.68933 2.63317 8.7 3.87317C7.428 5.47317 5.908 6.86917 4.16533 7.9345C2.85867 8.73317 1.27467 9.49984 0 9.49984M0 9.49984C1.27467 9.49984 2.86 10.2665 4.16533 11.0652C5.908 12.1318 7.428 13.5278 8.7 15.1252C9.68933 16.3665 10.6667 17.8465 10.6667 18.8332M0 9.49984L32 9.49984"
                stroke="#FF9900"
                stroke-width="2"
              />
            </svg>
            Return to Login Page
          </Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
