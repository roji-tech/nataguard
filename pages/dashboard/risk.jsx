import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import { ChartBox, DashboardBox, MyCircle } from "@pages/dashboard";
import Link from "next/link";

import styled from "styled-components";
import {
  arrowDownwardSvg,
  barChartSVG,
  lineChartSvg,
} from "@components/svgs/safebump";

const RiskPageMenuList = [
  {
    label: "Low Risk",
    text: (
      <>
        <p>
          This suggests a score lower than the average chance of experiencing
          major pregnancy complications. The contributing factors of low risk
          level include healthy age, normal health rate, BMI, blood pressure and
          Glucose levels. Although it is positive news, it's still important to
          continue prenatal care and prioritize healthy habits. Regular prenatal
          appointments allow for continued monitoring and reassurance. Focus on
          maintaining a healthy diet, exercise routine, and adequate sleep.
        </p>
      </>
    ),
  },
  {
    label: "Mid Risk",
    text: (
      <>
        <p>
          This suggests a score lower than the average chance of experiencing
          major pregnancy complications. The contributing factors of low risk
          level include healthy age, normal health rate, BMI, blood pressure and
          Glucose levels. Although it is positive news, it's still important to
          continue prenatal care and prioritize healthy habits. Regular prenatal
          appointments allow for continued monitoring and reassurance. Focus on
          maintaining a healthy diet, exercise routine, and adequate sleep.
        </p>
      </>
    ),
  },
  {
    label: "High Risk",
    text: (
      <>
        <p>
          This suggests a score lower than the average chance of experiencing
          major pregnancy complications. The contributing factors of low risk
          level include healthy age, normal health rate, BMI, blood pressure and
          Glucose levels. Although it is positive news, it's still important to
          continue prenatal care and prioritize healthy habits. Regular prenatal
          appointments allow for continued monitoring and reassurance. Focus on
          maintaining a healthy diet, exercise routine, and adequate sleep.
        </p>
      </>
    ),
  },
];

const Risk = () => {
  return (
    <DashboardLayout
      defaultAsideComponent={{
        showPregnancyWeek: false,
        title: "",
        menuList: RiskPageMenuList,
      }}
    >
      <Wrapper className="_full_wh _flex_col _flex1">
        <div className="_flex_col _flex1 _full_w" style={{ gap: 90 }}>
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

          <DashboardBox
            item={{
              title: (
                <>
                  <h5 className="title_text">Risk Level Implications</h5>
                </>
              ),

              content: (
                <div className="_flex_col trimesters">
                  <div className="trimester _flex_col _gap20 _border">
                    <div className="head">1st Trimester</div>
                    <div className="text _gap20">
                      <div>MId Risk</div>
                      <div>
                        <p>
                          Hi Emily, your pregnancy morbidity risk is at a mid
                          level. Don't panic. Let's visit your doctor as soon as
                          we can. You also need to improve your healthy habits.
                          SafeBump is your pal.
                        </p>

                        <ArrowLinkElement text="Know why" />
                      </div>
                    </div>
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

export default Risk;

const Wrapper = styled.div`
  &&& {
    /* border: 2px solid red; */
    background: #fff;
    align-items: flex-start;
    padding: 25.408px;
    gap: 80px;

    .trimesters {
      max-width: 100%;

      .trimester {
        .head {
          font-family: "Open Sans";
          font-size: 18px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: left;
          color: #122025;
        }

        > .text {
          display: grid;
          grid-template-columns: 1fr 4fr;
        }
      }
    }
  }
`;
