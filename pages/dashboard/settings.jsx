import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DashboardLayout from "@layouts/DashboardLayout";

const Settings = () => {
  const router = useRouter();
  const FIELDS = [
    { name: "Last Menstrual Period (LMP)", ph: "Dec 23, 2024", type: "date" },
    { name: "Genotype", ph: "AA" },
    { name: "Blood Group", ph: "O+" },
    { name: "Medical History", ph: "Upload File" },
    {
      name: "Any existing conditions or complications?",
      radio_name: "complications",
      ph: "Dec 23, 2024",
    },
    {
      name: "Lifestyle Factors",
      radio_name: "factors",
      ph: "Dec 23, 2024",
      options: [
        { id: "diet", ph: "Diet" },
        { id: "routine", ph: "Exercise routine" },
        { id: "habits", ph: "Relevant habits (optional)" },
      ],
    },
    { name: "Subscribe to our Newsletter", ph: "Dec 23, 2024" },
  ];
  const [loading, setLoading] = useState(false);

  return (
    <DashboardLayout>
      <AuthLayout
        showFormTitle={true}
        headerText="Sign Up"
        headerDesc="Create a FREE account in seconds."
        login={false}
        btnText="Finish Signing up"
        formTitle="Health Information"
        pageNumber={2}
        loading={loading}
        // handleSubmit={() => router.push("/signup/page2")}
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
          <RadioBox item={FIELDS[6]} />

          <div className="otherAuthLink _flex_jce">
            <Link href={"/login"}>Login</Link>
          </div>

          {/* <RadioBox item={{ name: "Remember Me (Save my login info)" }} /> */}
        </Form>
      </AuthLayout>
    </DashboardLayout>
  );
};

export default Settings;
