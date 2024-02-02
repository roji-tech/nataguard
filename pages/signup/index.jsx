import { api } from "@config";
import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "@utils/ShowSuccess";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const index = () => {
  const router = useRouter();

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
          return ShowErrors(
            e?.response?.data?.errorMsg ?? "An Error Occurred"
          );
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
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}

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

        <div className="otherAuthLink _flex_jce">
          <Link href={"/login"}>Login</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
