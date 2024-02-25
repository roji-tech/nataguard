import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import { ChartBox, DashboardBox, MyCircle } from "@pages/dashboard";
import Link from "next/link";

import styled from "styled-components";
import { barChartSVG, editIconSvg } from "@components/svgs/nataguard";
import { useFetchData } from "@hooks/useFetchData";
import useAuth from "@contexts/AuthContext";
import { useEffect, useState } from "react";

const Parameter = () => {
  // const data = useFetchData([], "/health/risklevel", "get", {}, "");
  const {
    state: { healthInfoSubmitted },
  } = useAuth();

  const [isHealthInfoSubmitted, setIsHealthInfoSubmitted] = useState(false);
  useEffect(() => {
    setIsHealthInfoSubmitted(healthInfoSubmitted);
  }, [healthInfoSubmitted]);

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

  const [data, setData] = useFetchData(
    PARAMETERS,
    "/health/analyze-parameters",
    "get",
    {},
    ""
  );

  return (
    <DashboardLayout showAside={false}>
      <Wrapper className="_full_wh _flex_col _flex1">
        <div className="_flex_col _flex1 _full_w" style={{ gap: 90 }}>
          <DashboardBox
            item={{
              title: (
                <>
                  <h5 className="title_text">My Parameters</h5>

                  <div className="_flex _gap10 _align_center">
                    <Link href={"/dashboard/settings"} className="link">
                      Edit my parameters
                    </Link>
                    {editIconSvg}
                  </div>
                </>
              ),

              content: (
                <div className="wrapper">
                  <div className="parameterWrapper _flex_col _gap16">
                    <header className="">
                      <div className="_grid_center">Parameters</div>
                      <div className="_grid_center">Standard Values</div>
                      <div className="_grid_center">Your Values</div>
                    </header>

                    <hr className="firstLine" />
                    <hr className="secondLine" />

                    <div className="parameters _full_w _flex_col _gap8">
                      {/* {PARAMETERS.map((item) => (
                      <div
                        key={item?.name}
                        className="parameter _flex_jcsb _full_w"
                      >
                        <div className="box">{item?.name}</div>
                        <div className="box _grid_center">{item?.value}</div>
                        <div className="box _grid_center">{item?.category}</div>
                      </div>
                    ))} */}

                      {Object.keys(PARAMETERS).map((parameter) => (
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
                            {PARAMETERS[parameter].value}
                          </div>
                          <div className="box _grid_center">
                            {PARAMETERS[parameter].category}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="btns">
                    <button type="button" className="editBtn">
                      Edit Parameters
                    </button>
                    <button type="button" className="saveBtn">
                      Save Changes
                    </button>
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

      > button {
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

        &.editBtn {
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
