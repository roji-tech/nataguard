import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const index = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [values, setValues] = useState({
    age: 0,
    bodyTemperature: 0,
    heartRate: 0,
    systolicBloodPressure: 0,
    diastolicBloodPressure: 0,
    bloodGlucoseHbA1c: 0,
    bloodGlucoseFastingHour: 0,
    bmi: 0,
  });

  const FIELDS = [
    { name: "", label: "Body Temperature", ph: "98.6°F (37°C)" },
    { name: "", label: "Systolic Blood Pressure", ph: "116 mmHg" },
    { name: "", label: "Diastolic Blood Pressure", ph: "72 mmHg" },
    { name: "", label: "Age", ph: "32", type: "number" },
    { name: "", label: "Heart Rate", ph: "78 bpm" },
    { name: "", label: "BMI", ph: "23 kg/m²" },
    { name: "", label: "Blood Glucose (Hb1Ac)", ph: "4.8%" },
    { name: "", label: "Blood Glucose (fasting)", ph: "83 mg/dL" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    router.push("/dashboard");
    return;

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
      headerText="Complete your Profile"
      headerDesc="Provide your lab result information to get a personalized experience."
      login={false}
      btnText="Submit"
      formTitle="Lab Results"
      pageNumber={2}
      loading={loading}
      showSocials={false}
      showDaraCollectionReasonLink={true}
      handleSubmit={handleSubmit}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}
      </Form>
    </AuthLayout>
  );
};

export default index;
