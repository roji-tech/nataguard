import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const FIELDS = [
    { name: "Username / Email Address", ph: "John Doe / johndoe@example.com" },
    { name: "Password", ph: "*****************" },
  ];
  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Forgot Password"
      headerDesc="Retrieve your password."
      btnText="Proceed to Login"
      showSocials={false}
      handleSubmit={() => router.push("/login")}
    >
      <Form>
        <div className="_flex_col_center _p40">
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
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M38.75 60.0001L52.9 74.1501L81.25 45.8501"
              stroke="#FFAD33"
              strokeWidth="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p
            style={{
              color: "#122025",
              fontFamily: "Open Sans",
              fontSize: "28px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "150%",
            }}
          >
            Retrieval code sent
          </p>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
