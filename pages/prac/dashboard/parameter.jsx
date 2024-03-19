import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import { ChartBox, DashboardBox, MyCircle } from "@pages/dashboard";
import Link from "next/link";

import styled from "styled-components";
import { barChartSVG, editIconSvg } from "@components/svgs/nataguard";
import { useFetchData } from "@hooks/useFetchData";
import useAuth from "@contexts/AuthContext";
import { useEffect, useRef, useState } from "react";

const Parameter = () => {
  const formRef = useRef();

  // const data = useFetchData([], "/health/risklevel", "get", {}, "");
  const [isDisabled, setIsDisabled] = useState(true);

  const {
    state: { healthInfoSubmitted },
  } = useAuth();

  const [isHealthInfoSubmitted, setIsHealthInfoSubmitted] = useState(false);
  useEffect(() => {
    setIsHealthInfoSubmitted(healthInfoSubmitted);
  }, [healthInfoSubmitted]);

  const PARAMETERS = {
    bodytemperature: {
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
    heartrate: {
      category: "normal",
      value: "30",
      label: "Heart Rate",
    },
    bmi: {
      category: "high",
      value: "30",
      label: "BMI",
    },
    bloodglucosehba1c: {
      label: "Blood Glucose (Hb1Ac)",
    },
    bloodglucosefasting: {
      category: "diabetes",
      value: "30",
      label: "Blood Glucose (fasting)",
    },
    // bloodgroup: {},
    // genotype: {
    //   category: "gestational diabetes",
    //   value: "30",
    //   label: "Genotype",
    // },
    // lastMenstrualPeriod: {
    //   category: "gestational diabetes",
    //   value: "30",
    //   label: "Last Mentrual Period",
    // },
  };

  const PARAMS = {
    age: {
      value: 30,
      category: "normal",
      information:
        "Your Age_Category falls within the range considered optimal for pregnancy with lower risk of complications., You have a favorable biological environment for conception and healthy fetal development.",
    },
    bloodglucosefasting: {
      value: 60,
      category: "diabetes",
      information:
        "Dear user, your blood glucose level is consistently high, indicating diabetes.Seek medical attention and follow recommended treatment plans to manage your diabetes.",
    },
    bloodglucosehba1c: {
      value: 50,
      category: "gestational diabetes",
      information:
        "Dear user, you have developed diabetes during pregnancy. This can have health implications for both you and your baby. It's important to work closely with your healthcare team to manage your blood sugar levels and ensure a healthy pregnancy., Work closely with your healthcare team to manage your blood sugar levels and ensure a healthy pregnancy.",
    },
    bloodpressure: {
      systolicValue: 20,
      diastolicValue: 20,
      category: "Hypotension",
      information:
        "Your blood pressure is lower than the normal range. While low blood pressure doesn't always cause symptoms, it can become dangerous if severe., May cause dizziness, lightheadedness, fainting, or fatigue. Can pose risks during pregnancy or to individuals with underlying health conditions. Consult your doctor to determine the cause and identify appropriate management strategies.Consider increasing fluid intake and salt intake in moderation if advised by your doctor.",
    },
    bmi: {
      value: 0,
      category: "low",
      information:
        "Your BMI is below the normal range, suggesting a lower-than-average body weight for your height. This could be due to factors such as genetics, underlying health conditions, or insufficient nutrition., Being underweight can lead to nutrient deficiencies, weakened immune system, osteoporosis, fatigue, fertility problems, and delayed wound healing.",
    },
    bodytemperature: {
      value: 303,
      category: "high",
      information:
        "high: Your body temperature is above the normal range (greater than 99.5°F). This could indicate fever, heat exhaustion, or heatstroke., Stay cool, drink plenty of fluids, and monitor your temperature. Seek medical attention if fever persists, exceeds 103°F, or you experience severe symptoms.",
    },
    heartrate: {
      value: 0,
      category: "low",
      information: null,
    },
  };

  const [data, setData, _] = useFetchData(
    PARAMS,
    "/health/analyze-parameters",
    "get",
    {},
    ""
  );

  const getValue = (data, parameter) => {
    if (parameter === "systolicBloodPressure") {
      return {
        category: data?.bloodpressure?.category,
        value: data?.bloodpressure?.systolicValue,
        label: PARAMETERS?.[parameter]?.label,
      };
    }

    if (parameter === "diastolicBloodPressure") {
      return {
        category: data?.bloodpressure?.category,
        value: data?.bloodpressure?.diastolicValue,
        label: PARAMETERS?.[parameter]?.label,
      };
    }

    return {
      category: data?.[parameter]?.category,
      value: data?.[parameter]?.value,
      label: PARAMETERS?.[parameter]?.label,
    };
  };

  return (
    <DashboardLayout showAside={false}>
      <Wrapper className="_full_wh _flex_col _flex1">
        <div className="_flex_col _flex1 _full_w" style={{ gap: 90 }}>
          <DashboardBox
            item={{
              title: (
                <>
                  <h5 className="title_text">
                    My Parameters {data?.age?.value}{" "}
                  </h5>

                  {/* <div className="_flex _gap10 _align_center">
                    <Link href={"/dashboard/settings"} className="link">
                      Edit my parameters
                    </Link>
                    {editIconSvg}
                  </div> */}
                </>
              ),

              content: (
                <div className="wrapper">
                  <form
                    onReset={() => {
                      setIsDisabled(true);
                      formRef.current.clear();
                    }}
                    className="parameterWrapper _flex_col _gap16"
                  >
                    <header className="">
                      <div className="_grid_center">Parameters</div>
                      <div
                        className="_grid_center"
                        style={{ background: "#829095", color: "#fff" }}
                      >
                        Patient Values
                      </div>
                      <div className="_grid_center">Category</div>
                    </header>

                    <hr className="firstLine" />
                    <hr className="secondLine" />

                    <div className="parameters _full_w _flex_col _gap8">
                      {Object.keys(PARAMETERS).map((parameter) => {
                        const values = getValue(data, parameter);

                        return (
                          <div
                            key={parameter}
                            className="parameter _flex_jcsb _full_w"
                          >
                            <div className="box">
                              {PARAMETERS[parameter].label}
                            </div>
                            <div
                              className="box _grid_center"
                              style={{
                                //  background: "#fafafa",
                                padding: 0,
                              }}
                            >
                              {/* {values?.value} */}
                              <input
                                disabled={isDisabled}
                                placeholder={values?.value}
                                className="_full_wh"
                                type="text"
                                ref={formRef}
                                style={{
                                  background: "#fafafa",
                                  color: "#829095",
                                  textAlign: "center",
                                }}
                              />
                            </div>
                            <div className="box _grid_center">
                              {values?.category}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </form>
                  <div className="btns">
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
                          onClick={() => setIsDisabled(true)}
                        >
                          Cancel
                        </button>
                        <button type="button" className="saveBtn">
                          Save Changes
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ),
            }}
          />
        </div>
      </Wrapper>
    </DashboardLayout>
  );
};

export default Parameter;

const Wrapper = styled.div`
  &&& {
    /* border: 2px solid red; */
    background: #fff;
    align-items: flex-start;
    padding: 25.408px;
    gap: 80px;

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

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
            color: #829095;
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

    .btns {
      width: 1005;
      display: flex;
      justify-content: flex-end;
      gap: 35px;

      > button,
      > p {
        min-height: 47px;
        width: 200px;
        border-radius: 8px;

        display: grid;
        place-items: center;

        font-family: "Open Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        &.updateBtn {
          color: var(--Primary---500, #06aae4);
          background: var(--White, #fff);
          border: 1.5px solid var(--Primary---500, #06aae4);
        }

        &.saveBtn {
          color: var(--White, #fff);

          background: var(--Primary---500, #06aae4);
        }
      }
    }
  }
`;
