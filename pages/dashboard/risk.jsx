import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import { ChartBox, DashboardBox, MyCircle } from "@pages/dashboard";
import Link from "next/link";

import styled from "styled-components";
import {
  arrowDownwardSvg,
  barChartSVG,
  lineChartSvg,
} from "@components/svgs/safebump";

const Risk = () => {
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

export default Risk;

const Wrapper = styled.div`
  &&& {
    /* border: 2px solid red; */
    background: #fff;
    align-items: flex-start;
    padding: 25.408px;
    gap: 80px;
  }
`;
