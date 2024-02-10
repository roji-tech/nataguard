import {
  AuthLayout,
  Form,
  InputBox,
  RadioBox,
  DateBox,
} from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { ShowErrors } from "@utils/ShowErrors";
import { api } from "@config";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import useAxios from "@hooks/useAxios";
import useAuth from "@contexts/AuthContext";
import { typ } from "@reducers/AuthReducer";

const CompletePopup = ({
  success = false,
  message = "",
  setOpen = () => {},
}) => {
  return (
    <div className="modalPpup _flex_col_center _p50 _gap40">
      {success ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
          >
            <path
              d="M60 10V30"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M60 90V110"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.6504 24.65L38.8004 38.8"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M81.1992 81.2L95.3492 95.35"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 60H30"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M90 60H110"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.6504 95.35L38.8004 81.2"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M81.1992 38.8L95.3492 24.65"
              stroke="#FFAD33"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className="_flex_col_center">
            <h3>Setting up Your Profile</h3>
            <p className="_center">
              Recalibrating... <br />
              Hang on. This might take some seconds.
            </p>
          </div>
        </>
      ) : (
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
            <h3>Request Unsuccessful!</h3>
            <p>
              {message ?? "Please make sure all fields are filled correctly."}
            </p>
          </div>

          <button
            type="button"
            className="_full_w _p20 _grid_center"
            style={{ background: "var(--nataBlue)", fontSize: 20 }}
            onClick={setOpen(false)}
          >
            Retry
          </button>
        </>
      )}
    </div>
  );
};

const CompleteProfile = () => {
  const { logout, state, dispatchFunc } = useAuth();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const myaxios = useAxios();

  const modalState = useState(true);
  const [open, setOpen] = modalState;
  const [modalComponent, setModalComponent] = useState(
    <CompletePopup setOpen={setOpen} />
  );

  const [onFirstPage, setOnFirstPage] = useState(true);

  const [values, setValues] = useState({
    age: 0,
    bodyTemperature: 0,
    heartRate: 0,
    systolicBloodPressure: 0,
    diastolicBloodPressure: 0,
    bloodGlucoseHbA1c: 0,
    bloodGlucoseFastingHour: 0,
    bmi: 0,
    // dueDate: "",

    lastMenstrualPeriod: "",
    genotype: "",
    bloodgroup: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;

    // if (e.target.name == "subscribedToNewsletter") {
    //   value = Boolean(Number(value));
    // }
    setValues((prev) => ({ ...prev, [e.target.name]: value }));
    console.log(values);
  };

  // 2024-02-02T11:40:54.388Z
  const handleDateChange = (name, date) => {
    const dateValue = dayjs(date).toISOString();
    console.log(dateValue);

    setValues((prev) => ({
      ...prev,
      [name]: dateValue,
    }));
  };

  const FIELDS1 = [
    {
      name: "lastMenstrualPeriod",
      label: "Last Menstrual Period (LMP)",
      ph: "Dec 23, 2024",
      type: "date",
      value: values.lastMenstrualPeriod,
      handleChange: (date) => handleDateChange("lastMenstrualPeriod", date),
    },
    {
      name: "genotype",
      label: "Genotype",
      value: values.genotype,
      ph: "AA",
      handleChange,
    },
    { name: "bloodgroup", label: "Blood Group", ph: "O+", handleChange },
    // { name: "", label: "Medical History", ph: "Upload File" },
    // {
    //   name: "complications",
    //   label: "Any existing conditions or complications?",
    //   ph: "Dec 23, 2024",
    // },
    // {
    //   name: "factors",
    //   label: "Lifestyle Factors",
    //   ph: "Dec 23, 2024",
    //   options: [
    //     { id: "diet", ph: "Diet" },
    //     { id: "routine", ph: "Exercise routine" },
    //     { id: "habits", ph: "Relevant habits (optional)" },
    //   ],
    // },
  ];

  const FIELDS2 = [
    {
      handleChange,
      label: "Body Temperature",
      name: "bodyTemperature",
      ph: "98.6°F (37°C)",
      type: "number",
    },
    {
      handleChange,
      name: "systolicBloodPressure",
      label: "Systolic Blood Pressure",
      ph: "116 mmHg",
      type: "number",
    },
    {
      name: "diastolicBloodPressure",
      handleChange,
      label: "Diastolic Blood Pressure",
      ph: "72 mmHg",
      type: "number",
    },
    {
      name: "age",
      handleChange,
      label: "Age",
      ph: "32",
      type: "number",
    },
    {
      name: "heartRate",
      handleChange,
      label: "Heart Rate",
      ph: "78 bpm",
      type: "number",
    },
    { name: "bmi", handleChange, label: "BMI", ph: "23 kg/m²" },
    {
      name: "bloodGlucoseHbA1c",
      handleChange,
      label: "Blood Glucose (Hb1Ac)",
      ph: "4.8%",
      type: "number",
    },
    {
      name: "bloodGlucoseFastingHour",
      handleChange,
      label: "Blood Glucose (fasting)",
      ph: "83 mg/dL",
      type: "number",
    },
  ];

  const handleContinue = (event) => {
    event.preventDefault();
    console.log(values);

    if (!values.lastMenstrualPeriod) {
      ShowErrors("Pick the date of your last mentrual period");
      return;
    } else if (!values.bloodgroup) {
      ShowErrors("Please fill in your blood group");
      return;
    } else if (!values.genotype) {
      ShowErrors("Please fill in your Genotype");
      return;
    }

    return setOnFirstPage(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    // router.push("/dashboard/complete_profile");

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        console.log(`${key}: ${values[key]}`);

        if (!values[key]) {
          ShowErrors("Please fill all fields");
          return;
        }
      }
    }

    let data = { ...values };
    setLoading(true);

    fetchDataWithUseAxios(myaxios, api.healthInfo, "post", data, "", setLoading)
      .then((response) => {
        setModalComponent(<CompletePopup success={true} />);
        setOpen(true);
        dispatchFunc(typ.setHealthInfoSubmitted);

        console.log("complete profile response");
        console.log(JSON.stringify(response));

        setTimeout(() => {
          router.push(`/dashboard`);
        }, 5000);
      })
      .catch((e) => {
        console.log("login error", e);
        setModalComponent(
          <CompletePopup
            setOpen={setOpen}
            message={e?.response?.data?.errorMsg ?? null}
          />
        );

        try {
          // dispatchFunc(typ.clearAll);
          if (String(e?.response?.status).startsWith("5")) {
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

  return onFirstPage ? (
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
      handleSubmit={handleContinue}
      modalState={modalState}
      modalComponent={modalComponent}
    >
      <Form>
        <DateBox item={FIELDS1[0]} />
        {FIELDS1.slice(1, 3).map((item) => (
          <InputBox key={item?.name} item={item} />
        ))}
      </Form>
    </AuthLayout>
  ) : (
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
      modalState={modalState}
      modalComponent={modalComponent}
    >
      <Form>
        {FIELDS2.map((item) => (
          <InputBox key={item?.name} item={item} />
        ))}
      </Form>
    </AuthLayout>
  );
};

export default CompleteProfile;
