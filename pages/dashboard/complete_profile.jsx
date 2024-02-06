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
    dueDate: "2024-02-02T11:40:54.388Z",
    lastMenstrualPeriod: "2024-02-02T11:40:54.388Z",
    genotype: "string",
    bloodgroup: "string",
  });

  const FIELDS = [
    {
      name: "",
      label: "Last Menstrual Period (LMP)",
      ph: "Dec 23, 2024",
      type: "date",
    },
    { name: "", label: "Genotype", ph: "AA" },
    { name: "", label: "Blood Group", ph: "O+" },
    { name: "", label: "Medical History", ph: "Upload File" },
    {
      name: "complications",
      label: "Any existing conditions or complications?",
      ph: "Dec 23, 2024",
    },
    {
      name: "factors",
      label: "Lifestyle Factors",
      ph: "Dec 23, 2024",
      options: [
        { id: "diet", ph: "Diet" },
        { id: "routine", ph: "Exercise routine" },
        { id: "habits", ph: "Relevant habits (optional)" },
      ],
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    router.push("/dashboard/complete_profile2");
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
      headerDesc="Provide your health information to get the best experience."
      login={false}
      btnText="Continue"
      formTitle="Health Information"
      pageNumber={1}
      loading={loading}
      showSocials={false}
      showDaraCollectionReasonLink={true}
      handleSubmit={handleSubmit}
    >
      <Form>
        {FIELDS.slice(0, 3).map((item) => (
          <InputBox item={item} />
        ))}

        <InputBox
          item={FIELDS[3]}
          customInput={
            <div
              className="_grid_center _full_w"
              style={{
                height: "250px",
                borderRadius: "8px",
                background: "#F5F5F5",
              }}
            >
              <label
                className="_flex_col_center _justify_center _pointer"
                htmlFor="my_img"
                style={{
                  width: 180,
                  height: 140,
                  borderRadius: "12px",
                  border: "1px solid #829095",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 12H18"
                    stroke="#829095"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 18V6"
                    stroke="#829095"
                    strokeWidth="1.5"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Upload File</p>
                <input
                  type="file"
                  id="my_img"
                  className="_d_none"
                  src=""
                  alt=""
                />
              </label>
            </div>
          }
        />

        <RadioBox item={FIELDS[4]} />
        <RadioBox item={FIELDS[5]} />

        <div className="otherAuthLink _flex_jce">
          <Link href={"/login"}>Login</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
