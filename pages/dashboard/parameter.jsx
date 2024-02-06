import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import { ChartBox, DashboardBox, MyCircle } from "@pages/dashboard";
import Link from "next/link";

import styled from "styled-components";
import {
  arrowDownwardSvg,
  barChartSVG,
  lineChartSvg,
  editIconSvg,
} from "@components/svgs/safebump";
import { useFetchData } from "@hooks/useFetchData";

const Parameter = () => {
  const PARAMETERS = [
    { name: "Body Temperature", value: "98.6°F (37°C)" },
    { name: "Systolic Blood Pressure", value: "116 mmHg" },
    { name: "Diastolic blood pressure", value: "72 mmHg" },
    { name: "Age", value: "32 years" },
    { name: "Heart Rate", value: "78 bpm" },
    { name: "BMI", value: "23 kg/m²" },
    { name: "Blood Glucose (Hb1Ac)", value: "4.8%" },
    { name: "BMBlood Glucose (fasting)I", value: "83 mg/dL" },
  ];

  const data = useFetchData(
    PARAMETERS,
    "/health/analyze-parameter",
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
            label: "Know these 6 health hacks!",
            text: (
              <>
                <span>
                  Lorem ipsum dolor esit Lorem ipsum dolor esit Lorem ipsum
                  dolor esit Lorem ipsum dolor esit Lorem ipsum dol
                </span>

                <ArrowLinkElement />
              </>
            ),
          },
          {
            label: "Know these 6 health hacks!",
            text: (
              <>
                <span>
                  Lorem ipsum dolor esit Lorem ipsum dolor esit Lorem ipsum
                  dolor esit Lorem ipsum dolor esit Lorem ipsum dol
                </span>

                <ArrowLinkElement />
              </>
            ),
          },
          {
            label: "Know these 6 health hacks!",
            text: (
              <>
                <span>
                  Lorem ipsum dolor esit Lorem ipsum dolor esit Lorem ipsum
                  dolor esit Lorem ipsum dolor esit Lorem ipsum dol
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
                    <p className="link">Edit my parameters</p>
                    {editIconSvg}
                  </div>
                </>
              ),

              content: (
                <div className="parameterWrapper _flex_col _gap16">
                  <header className="">
                    <div className="_grid_center">Parameters</div>
                    <div className="_grid_center">Values</div>
                  </header>

                  <hr />

                  <div className="parameters _full_w _flex_col _gap8">
                    {PARAMETERS.map((item) => (
                      <div
                        key={item?.name}
                        className="parameter _flex_jcsb _full_w"
                      >
                        <div className="box">{item?.name}</div>
                        <div className="box _grid_center">{item?.name}</div>
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
