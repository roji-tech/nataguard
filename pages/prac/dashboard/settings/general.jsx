import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import DashboardLayout from "@layouts/DashboardLayout";
import styled from "styled-components";
import { Settings } from "@pages/dashboard/settings";

const GeneralSettings = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabled2, setIsDisabled2] = useState(true);
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    bio: "",
  });
  const [values2, setValues2] = useState({
    patientId: "",
    residentialAddress: "",
    registeredHospital: "",
  });

  const handleChange = (event) => {
    setValues();
  };

  const PersonalInfo = [
    {
      label: (
        <span className="_flex_col">
          <span> My Photo </span>
          <small>This will be visible on your profile.</small>
        </span>
      ),
      ph: (
        <div className="value _flex _gap40 _align_center">
          <img src="/avatar.png" width={64} height={64} alt="" />
          <button
            className="_p10 imageRemoveBtn _bg_trans _b_radius10"
            type="button"
          >
            Remove
          </button>
          <button
            className="_p10 imageUpdateBtn _bg_trans _b_radius10"
            type="button"
          >
            Update
          </button>
        </div>
      ),
      type: "date",
    },
    {
      label: "First & Last Name",
      ph: (
        <div className="_flex _flex1 names _gap24 _align_center">
          <input
            disabled={isDisabled}
            placeholder="aaaaaaaaaaaa"
            className="_flex1"
            type="text"
          />
          <input
            disabled={isDisabled}
            placeholder="aaaaaaaaaaaa"
            className="_flex1"
            type="text"
          />
        </div>
      ),
    },
    {
      label: "Email Address",
      ph: (
        <input
          disabled={isDisabled}
          placeholder="aaaaaaaaaaaa"
          className="_flex1"
          type="text"
        />
      ),
    },
    {
      label: "Phone Number",
      ph: (
        <input
          disabled={isDisabled}
          placeholder="aaaaaaaaaaaa"
          className="_flex1"
          type="text"
        />
      ),
    },
    {
      label: "Bio",
      ph: (
        <div className="_flex_jce">
          <p className="patientBtn">Patient</p>
        </div>
      ),
    },
  ];

  const PARAMETERS = {
    bodyTemperature: {
      category: "",
      value: "30",
      label: "Body Temperature",
    },
    systolicBloodPressure: {
      category: "",
      value: "30",
      label: "Diastolic blood pressure",
    },
    diastolicBloodPressure: {
      category: "",
      value: "30",
      label: "Systolic Blood Pressure",
    },
    age: {
      category: "low",
      value: "30",
      label: "Age",
    },
    heartRate: {
      category: "normal",
      value: "30",
      label: "Heart Rate",
    },
    bmi: {
      category: "high",
      value: "30",
      label: "BMI",
    },
    bloodGlucoseHbA1c: {
      label: "Blood Glucose (Hb1Ac)",
    },
    bloodGlucoseFastingHour: {
      category: "diabetes",
      value: "30",
      label: "Blood Glucose (fasting)",
    },
    // bloodgroup: {},
    genotype: {
      category: "gestational diabetes",
      value: "30",
      label: "Genotype",
    },
    lastMenstrualPeriod: {
      category: "gestational diabetes",
      value: "30",
      label: "Last Mentrual Period",
    },
  };
  
  return (
    <Settings current="General">
      <Wrapper className="_flex_col _gap40 myProfile">
        <div className="parameterWrapper _flex_col _gap16">
          <header className="">
            <div className="_grid_center">Parameters</div>
            <div className="_grid_center">Standard Values</div>
            <div className="_grid_center">Your Values</div>
          </header>

          <hr className="firstLine" />
          <hr className="secondLine" />

          <div className="parameters _full_w _flex_col _gap8">
            {Object.keys(PARAMETERS).map((parameter) => (
              <div key={parameter} className="parameter _flex_jcsb _full_w">
                <div className="box">{PARAMETERS[parameter].label}</div>
                <div
                  className="box _grid_center"
                  style={{
                    //  background: "#fafafa",
                    padding: 0,
                  }}
                >
                  {PARAMETERS[parameter].value}
                </div>
                <div className="box _grid_center">
                  {PARAMETERS[parameter].category}
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr
          style={{
            width: "100%",
            height: 1,
            background: "#E4E1E8",
          }}
        />

        <form
          ref={formRef}
          onReset={() => setIsDisabled(true)}
          className="_flex_col personal _gap40"
        >
          <h2 className="subTitle">Personal Information</h2>
          <div className="_flex_col _gap24">
            {PersonalInfo.map((item) => (
              <div className="profileItem _flex">
                <div className="_flex _align_center">
                  <p className=""> {item?.label} </p>
                </div>
                <div className="_flex1 _flex _align_center">{item?.ph}</div>
              </div>
            ))}
          </div>
          <div className="actionBtns _flex_jce">
            {isDisabled ? (
              <p
                className="updateBtn _pointer"
                onClick={() => setIsDisabled(false)}
              >
                Update
              </p>
            ) : (
              <>
                <button
                  className="updateBtn"
                  type="reset"
                  // onClick={() => setIsDisabled(true)}
                >
                  Cancel
                </button>
                <button type="button" className="saveBtn">
                  Save Changes
                </button>
              </>
            )}
          </div>
        </form>
      </Wrapper>
    </Settings>
  );
};

export default GeneralSettings;

const Wrapper = styled.div`
  &&& {
    /* border: 2px solid red; */

    .parameterWrapper {
      position: relative;
      overflow: hidden;

      width: 100%;

      border-radius: 12px;
      border: 1px solid var(--Grey---Outline, #e4e1e8);
      background: var(--White, #fff);

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      align-self: stretch;

      hr {
        width: 1px;
        height: 100%;

        position: absolute;

        top: 0px;
        bottom: 0;

        background: #e4e1e8;

        &.firstLine {
          left: calc(100% / 3);
        }

        &.secondLine {
          right: calc(100% / 3);
        }
      }

      header {
        background: var(--Input-Fields, #f5f5f5);
        height: 57px;

        .left {
          border-radius: 12px 0px 0px 0px;
        }

        .right {
          border-radius: 0px 12px 0px 0px;
        }
      }

      .parameters {
        background: var(--Background, #fafafa);
        display: flex;
        gap: 8px;

        .parameter {
          .box {
            background: var(--White, #fff);
            padding: 12px;
            padding-left: 40px;
            width: 100%;
          }
        }
      }

      header,
      .parameter {
        display: flex;
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 0;

        > div {
          flex-basis: 50%;
        }
      }
    }

    .subTitle {
      color: var(--Text---Title, #122025);
      font-family: "Open Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .personal {
      p {
        color: var(--Text---Title, #122025);
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      small {
        color: var(--Text---Body, #829095);
        font-family: "Open Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      input {
        display: flex;
        height: 49px;
        padding: 12px 24px;
        align-items: center;

        border-radius: 8px;
        background: var(--Input-Fields, #f5f5f5);

        color: var(--Text---Title, #122025);
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &::placeholder {
          color: var(--Text---Body, #829095);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      .profileItem {
        display: grid;
        grid-template-columns: 39% 60%;

        > div {
          max-width: 100%;
        }

        .patientBtn {
          border-radius: 8px;
          background: rgba(255, 153, 0, 0.1);

          display: flex;
          padding: 8px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;

          color: var(--Secondary---700, #f90);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .imageUpdateBtn {
          color: var(--Primary---500, #06aae4);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .imageRemoveBtn {
          color: var(--Accent---Pink, #ff5a5f);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .names {
          display: flex;
          max-width: 100%;

          input {
            max-width: calc(50% - 12px);
          }
        }
      }

      .actionBtns {
        .updateBtn {
          color: var(--Primary---500, #06aae4);
          font-family: "Open Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;

          display: flex;
          padding: 10px 32px;
          justify-content: center;
          align-items: center;
          gap: 24px;

          border-radius: 8px;
          border: 1.5px solid var(--Primary---500, #06aae4);
          background: var(--White, #fff);
        }

        .saveBtn {
          display: flex;
          padding: 10px 32px;
          justify-content: center;
          align-items: center;
          gap: 24px;

          border-radius: 8px;
          background: var(--Primary---500, #06aae4);

          color: var(--White, #fff);
          font-family: "Open Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }
  }
`;
