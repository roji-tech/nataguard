import DashboardLayout, { ArrowLinkElement } from "@layouts/DashboardLayout";
import { ChartBox, DashboardBox, MyCircle } from "@pages/dashboard";
import Link from "next/link";

import styled from "styled-components";
import { barChartSVG } from "@components/svgs/nataguard";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { useFetchData } from "@hooks/useFetchData";
import useAuth from "@contexts/AuthContext";

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
  // const data = useFetchData([], "/health/risklevel", "get", {}, "");
  const { healthInfoSubmitted } = useAuth();

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
                  <div className="trimester _flex_col _gap20">
                    <header className="_flex">1st Trimester</header>
                    <div className="text _gap20">
                      <div className="_flex _align_center level _no_wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6" cy="6.16846" r="6" fill="#06AAE4" />
                        </svg>
                        <span className="_no_wrap">MId Risk</span>
                      </div>
                      <div className="level_text">
                        <p>
                          Hi Emily, your pregnancy morbidity risk is at a mid
                          level. Don't panic. Let's visit your doctor as soon as
                          we can. You also need to improve your healthy habits.
                          NataGuard is your pal.
                        </p>

                        <ArrowLinkElement text="Know why" />
                      </div>
                    </div>
                  </div>

                  <div className="trimester _flex_col _gap20">
                    <header className="_flex">2nd Trimester</header>
                    <div className="text _gap20">
                      <div className="_flex _align_center level _no_wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6" cy="6.16846" r="6" fill="#06AAE4" />
                        </svg>
                        <span className="_no_wrap">Low Risk</span>
                      </div>
                      <div className="level_text">
                        <p>
                          Hi Emily, your pregnancy morbidity risk is at a mid
                          level. Don't panic. Let's visit your doctor as soon as
                          we can. You also need to improve your healthy habits.
                          NataGuard is your pal.
                        </p>

                        <ArrowLinkElement text="Know why" />
                      </div>
                    </div>
                  </div>

                  <div className="trimester _flex_col _gap20">
                    <header className="_flex">3rd Trimester</header>
                    <div className="text _gap20">
                      <div className="_flex _align_center level _no_wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="13"
                          viewBox="0 0 12 13"
                          fill="none"
                        >
                          <circle cx="6" cy="6.16846" r="6" fill="#06AAE4" />
                        </svg>
                        <span className="_no_wrap">High Risk</span>
                      </div>
                      <div className="level_text">
                        <p>
                          Hi Emily, your pregnancy morbidity risk is at a mid
                          level. Don't panic. Let's visit your doctor as soon as
                          we can. You also need to improve your healthy habits.
                          NataGuard is your pal.
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
      padding-top: 30px;
      gap: 24px;

      .trimester {
        display: flex;
        padding-bottom: 20px;
        flex-direction: column;
        gap: 24px;
        align-self: stretch;

        border-radius: 0px 12px 12px 12px;
        border: 1px solid var(--Grey---Outline, #e4e1e8);
        background: var(--White, #fff);

        header {
          font-family: "Open Sans";
          font-size: 18px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0em;
          text-align: start;
          color: #122025;
          padding: 12px 24px;

          border-radius: 0px 12px 0px 0px;
          border-left: 3px solid var(--Text---Title, #122025);
          background: var(--Input-Fields, #f5f5f5);
        }

        > .text {
          display: grid;
          grid-template-columns: 1fr 4fr;

          display: flex;
          padding: 0px 24px;
          align-items: flex-start;
          gap: 24px;
          align-self: stretch;

          .level {
            color: var(--Text---Title, #122025);
            font-family: "Open Sans";
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          .level_text {
            color: var(--Text---Body, #829095);
            font-family: "Open Sans";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            display: flex;
            flex-direction: column;
            gap: 24px;
          }
        }
      }
    }
  }
`;
