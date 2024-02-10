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
    age: {
      category: "low",
    },
    bmi: {
      category: "high",
    },
    bloodglucosefasting: {
      category: "diabetes",
    },
    bloodglucosehba1c: {
      category: "gestational diabetes",
    },
    bloodpressure: {
      category: "Hypotension",
    },
    heartrate: {
      category: "normal",
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
    <DashboardLayout
      defaultAsideComponent={{
        showPregnancyWeek: true,
        title: "Health Tips",
        menuList: [
          {
            label: "Stay Hydrated",
            text: (
              <>
                <span>
                  Drinking an adequate amount of water is crucial during
                  pregnancy. Proper hydration helps maintain amniotic fluid
                  levels, supports the increased blood volume, and aids in
                  nutrient transport to the baby. Aim for at least eight 8-ounce
                  glasses of water daily and more if physically active.
                </span>

                <ArrowLinkElement />
              </>
            ),
          },
          {
            label: "Balanced Nutrition",
            text: (
              <>
                <span>
                  Focus on a well-balanced diet rich in essential nutrients.
                  Include a variety of fruits, vegetables, whole grains, lean
                  proteins, and dairy products. Ensure an adequate intake of
                  folic acid, iron, calcium, and omega-3 fatty acids to support
                  the baby's development.
                </span>

                <ArrowLinkElement />
              </>
            ),
          },
          {
            label: "Regular Prenatal Check-ups",
            text: (
              <>
                <span>
                  Schedule regular prenatal check-ups with your healthcare
                  provider. These appointments are essential for monitoring the
                  baby's growth, checking for any potential complications, and
                  ensuring the overall health of both the mother and the baby.
                </span>

                <ArrowLinkElement />
              </>
            ),
          },
        ],
      }}
    >
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
                <div className="parameterWrapper _flex_col _gap16">
                  <header className="">
                    <div className="_grid_center">Parameters</div>
                    {/* <div className="_grid_center">Values</div> */}
                    <div className="_grid_center">Categories</div>
                  </header>

                  <hr />

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
                        <div className="box">{parameter}</div>
                        {/* <div className="box _grid_center">{"value"}</div> */}
                        <div className="box _grid_center">
                          {PARAMETERS[parameter].category}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            }}
          />

          <DashboardBox
            item={{
              title: (
                <>
                  <h5 className="title_text">
                    Morbidity Risk Level Classifier
                  </h5>

                  <ArrowLinkElement text="See details" />
                </>
              ),

              content: (
                <>
                  <ChartBox
                    makeBlur={isHealthInfoSubmitted}
                    item={{
                      vertical_text: (
                        <>
                          <p>Risk</p>
                          <p>Complications</p>
                        </>
                      ),
                      chart: barChartSVG,
                      lower_text: "Months",
                      lower_list: [
                        {
                          color: "rgba(6, 170, 228, 1)",
                          text: " Low Risk",
                        },
                        {
                          color: "rgba(255, 173, 51, 1)",
                          text: "Mid Risk",
                        },
                        {
                          color: "rgba(255, 90, 95, 1)",
                          text: " High Risk",
                        },
                      ],
                    }}
                  />
                </>
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

        left: 50%;
        top: 0px;
        bottom: 0;
        background: #e4e1e8;
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
  }
`;
