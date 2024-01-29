import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import Link from "next/link";
import styled from "styled-components";
import {
  arrowDownwardSvg,
  barChartSVG,
  lineChartSvg,
} from "@components/svgs/safebump";

const index = () => {
  return (
    <DashboardLayout>
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

      <div className="content _max_w _gap10 _flex_col">{item.content}</div>
    </DashboardBoxStyle>
  );
};

const DashboardBoxStyle = styled.div`
  &&& {
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
}) => {
  return (
    <div>
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
    </div>
  );
};
