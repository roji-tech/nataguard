"use client";
import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import Link from "next/link";
import styled from "styled-components";
import {
  arrowDownwardSvg,
  barChartSVG,
  lineChartSvg,
  noticeSvg,
} from "@components/svgs/nataguard";
import { useFetchData } from "@hooks/useFetchData";
import useAuth from "@contexts/AuthContext";
import { useEffect, useState } from "react";

const index = () => {
  // const data = useFetchData([], "/health/info", "get", {}, "");
  const {
    state: { healthInfoSubmitted },
  } = useAuth();

  const [isHealthInfoSubmitted, setIsHealthInfoSubmitted] = useState(false);
  useEffect(() => {
    setIsHealthInfoSubmitted(healthInfoSubmitted);
  }, [healthInfoSubmitted]);

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
          {
            label: "Safe Exercise Routine",
            text: (
              <>
                <span>
                  Engage in safe and approved exercises during pregnancy.
                  Activities like walking, swimming, and prenatal yoga can help
                  maintain a healthy weight, reduce discomfort, and improve
                  overall well-being. Always consult with your healthcare
                  provider before starting any new exercise routine.
                </span>

                <ArrowLinkElement />
              </>
            ),
          },
          {
            label: "Adequate Rest and Sleep",
            text: (
              <>
                <span>
                  Ensure you get enough rest and sleep during pregnancy. Your
                  body is working hard to support the growing baby, and ample
                  rest helps in reducing stress, promoting emotional well-being,
                  and supporting the body's recovery. Aim for 7-9 hours of
                  quality sleep each night.
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
                  <h5 className="title_text">Pregnancy Milestone</h5>

                  <div className="date _flex _align_center">
                    <p>2nd Pregnancy (2024)</p>
                    {arrowDownwardSvg}
                  </div>
                </>
              ),

              content: (
                <>
                  <ChartBox
                    makeBlur={isHealthInfoSubmitted}
                    item={{
                      vertical_text: (
                        <>
                          <p>Health Performance</p>
                        </>
                      ),
                      chart: lineChartSvg,
                      lower_text: "Months",
                      lower_list: [
                        {
                          color: "rgba(255, 90, 95, 1)",
                          text: "Mother",
                        },
                        {
                          color: "rgba(144, 124, 255, 1)",
                          text: "Child",
                        },
                      ],
                    }}
                  />
                </>
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

export default index;

const Wrapper = styled.div`
  &&& {
    /* border: 2px solid red; */
    background: #fff;
    align-items: flex-start;
    padding: 25.408px;
    gap: 80px;
  }
`;

export const MyCircle = ({ width = "16px", color = "#000" }) => {
  return (
    <span
      style={{
        width,
        background: color,
        maxWidth: width,
        minWidth: width,
        maxHeight: width,
        minHeight: width,
        borderRadius: "50%",
        emptyCells: "show",
        aspectRatio: "1/1",
      }}
    />
  );
};

export const DashboardBox = ({
  item = {
    title: "Pregnancy Milestone",
    content: (
      <>
        <p className="_center">Months</p>
        <div className="_flex_center">
          <p className="_flex" style={{ padding: "8px 12px", gap: 16 }}>
            <MyCircle color="pink" />
            Mother
          </p>
          <p
            className="_flex"
            style={{ padding: "8px 12px", gap: 16, direction: "rtr" }}
          >
            <MyCircle color="pink" />
            Child
          </p>
        </div>
      </>
    ),
  },
}) => {
  return (
    <DashboardBoxStyle className="_flex_col _full_w">
      <div className="title _full_w _flex_jcsb">{item.title}</div>

      <div className="content _full_w _gap10 _flex_col">{item.content}</div>
    </DashboardBoxStyle>
  );
};

const DashboardBoxStyle = styled.div`
  &&& {
    max-width: 100%;

    * {
      max-width: 100%;
    }

    .title {
      .title_text {
        color: var(--Text---Title, #122025);
        font-family: "Open Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      .date {
        border-radius: 8.469px;
        background: var(--Background, #f5f5f5);
        padding: 8px 16px;
      }
      .link {
        color: var(--Primary---500, #06aae4);
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration-line: underline;
      }
    }

    .chartBox {
      display: flex;
      gap: 20px;

      .vertical_text {
        display: flex;
        align-items: center;
        position: relative;

        p,
        span {
          color: var(--Text---Title, #122025);
          text-align: center;
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;

          /* position: absolute; */
          /* writing-mode: vertical-rl; */
          /* text-orientation: upright; */

          writing-mode: vertical-lr;
          transform: rotate(-180deg);
          white-space: nowrap;
        }
      }

      .chart {
        flex: 1;
      }
    }
  }
`;

export const ChartBox = ({
  item = {
    vertical_text: <p>Health Performance</p>,
    chart: lineChartSvg,
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
  },
  bluryContent = null,
  makeBlur = false,
}) => {
  return (
    <ChartBoxStyle makeBlur={makeBlur}>
      <div className="blur _backdrop_filter_blur _grid_center">
        {bluryContent ?? (
          <>
            <div className="_grid_center">
              <div
                className="_flex_col_center _gap16"
                style={{ maxWidth: 535 }}
              >
                <h3 className="_flex_center _red _align_center">
                  {noticeSvg}
                  Notice
                </h3>
                <p className="_center">
                  Some certain functionalities of the dashboard might not work.
                  This is because your health information is not up to date.
                  Kindly proceed to update your profile.
                </p>

                <div className="_flex_center _p10">
                  <Link
                    className="blur_btn _grid_center"
                    href="/dashboard/complete_profile"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="chartBox">
        <div className="vertical_text">{item?.vertical_text}</div>

        <div className="chart">{item.chart}</div>
      </div>

      <p className="_center">{item.lower_text}</p>

      <div className="_flex_center">
        {item?.lower_list?.map((menuitem) => (
          <p
            key={menuitem?.text}
            className="_flex"
            style={{ padding: "8px 12px", gap: 16 }}
          >
            <MyCircle color={menuitem?.color} />
            {menuitem?.text}
          </p>
        ))}
      </div>
    </ChartBoxStyle>
  );
};

const ChartBoxStyle = styled.section`
  &&& {
    position: relative;

    .blur {
      display: ${({ makeBlur }) => (makeBlur ? "none !important" : "grid")};
      position: absolute;
      inset: 0;
      z-index: 10;
      background: #ffffff10;

      .blur_btn {
        width: 217px;
        height: 57px;
        padding: 12px 32px 12px 32px;
        border-radius: 8px;
        gap: 8px;

        background: #06aae4;
        color: #fff;

        font-family: Open Sans;
        font-size: 22px;
        font-weight: 600;
        line-height: 33px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
`;
