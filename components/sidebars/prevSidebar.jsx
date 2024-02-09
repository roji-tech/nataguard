import styled from "styled-components";
import { useRouter } from "next/router";
import useAuth from "@contexts/AuthContext";

const Sidebar = () => {
  const router = useRouter();
  const {
    state: { healthInfoSubmitted },
    logout,
  } = useAuth();

  const navFunc = (to) => {
    router.push(`/${to}`);
    console.warn(to);
  };

  const LINK_LIST = [
    {
      header: "My Account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard",
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 3.99994H10V9.99994H4V3.99994ZM14 3.99994H20V9.99994H14V3.99994ZM4 13.9999H10V19.9999H4V13.9999ZM14 16.9999C14 17.7956 14.3161 18.5587 14.8787 19.1213C15.4413 19.6839 16.2044 19.9999 17 19.9999C17.7956 19.9999 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 16.9999C20 16.2043 19.6839 15.4412 19.1213 14.8786C18.5587 14.316 17.7956 13.9999 17 13.9999C16.2044 13.9999 15.4413 14.316 14.8787 14.8786C14.3161 15.4412 14 16.2043 14 16.9999Z"
                stroke="#000000"
                strokeOpacity="0.6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
          handleClick: () => navFunc("/dashboard"),
        },
        {
          name: "Risk Classifier",
          link: "/dashboard/risk",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M10.4645 25.6668H17.4645C23.2979 25.6668 25.6312 23.3335 25.6312 17.5002V10.5002C25.6312 4.66683 23.2979 2.3335 17.4645 2.3335H10.4645C4.63118 2.3335 2.29785 4.66683 2.29785 10.5002V17.5002C2.29785 23.3335 4.63118 25.6668 10.4645 25.6668Z"
                stroke="#829095"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.29785 14.8166L9.29785 14.7933C10.1729 14.7933 11.1529 15.4583 11.4795 16.275L12.8095 19.635C13.1129 20.3933 13.5912 20.3933 13.8945 19.635L16.5662 12.8566C16.8229 12.2033 17.3012 12.18 17.6279 12.7983L18.8412 15.0966C19.2029 15.785 20.1362 16.345 20.9062 16.345H25.6429"
                stroke="#829095"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
          handleClick: () => navFunc("/dashboard/risk"),
        },
        {
          name: "Parameter Analysis",
          link: "/dashboard/parameter",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M2.33301 25.6665H25.6663"
                stroke="#829095"
                strokeWidth="1.6"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.375 4.66683V25.6668H16.625V4.66683C16.625 3.3835 16.1 2.3335 14.525 2.3335H13.475C11.9 2.3335 11.375 3.3835 11.375 4.66683Z"
                stroke="#829095"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 11.6668V25.6668H8.16667V11.6668C8.16667 10.3835 7.7 9.3335 6.3 9.3335H5.36667C3.96667 9.3335 3.5 10.3835 3.5 11.6668Z"
                stroke="#829095"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.833 17.4998V25.6665H24.4997V17.4998C24.4997 16.2165 24.033 15.1665 22.633 15.1665H21.6997C20.2997 15.1665 19.833 16.2165 19.833 17.4998Z"
                stroke="#829095"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
          handleClick: () => navFunc("/dashboard/parameter"),
        },
      ],
    },
    {
      header: "General",
      links: [
        {
          name: "Settings",
          link: "/dashboard/settings",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2673 2.50098C12.9833 2.50098 13.6793 2.79498 14.1783 3.30598C14.6763 3.81998 14.9513 4.52498 14.9303 5.23998C14.9323 5.40098 14.9853 5.58698 15.0813 5.74998C15.2403 6.01998 15.4913 6.20998 15.7893 6.28798C16.0873 6.36198 16.3993 6.32198 16.6643 6.16498C17.9443 5.43398 19.5733 5.87198 20.3043 7.14198L20.9273 8.22098C20.9433 8.24998 20.9573 8.27798 20.9693 8.30698C21.6313 9.55798 21.1893 11.133 19.9593 11.852C19.7803 11.955 19.6353 12.099 19.5353 12.273C19.3803 12.542 19.3373 12.862 19.4153 13.156C19.4953 13.456 19.6863 13.705 19.9553 13.859C20.5623 14.208 21.0153 14.796 21.1963 15.475C21.3773 16.153 21.2783 16.889 20.9253 17.496L20.2613 18.602C19.5303 19.858 17.9013 20.293 16.6343 19.561C16.4653 19.464 16.2703 19.411 16.0763 19.406H16.0703C15.7813 19.406 15.4843 19.529 15.2683 19.744C15.0493 19.963 14.9293 20.255 14.9313 20.565C14.9243 22.034 13.7293 23.222 12.2673 23.222H11.0143C9.54532 23.222 8.35032 22.028 8.35032 20.559C8.34832 20.378 8.29632 20.19 8.19932 20.027C8.04232 19.753 7.78832 19.557 7.49532 19.479C7.20432 19.401 6.88532 19.444 6.62332 19.596C5.99532 19.946 5.25632 20.031 4.58032 19.841C3.90532 19.65 3.32232 19.186 2.98032 18.571L2.35532 17.494C1.62432 16.226 2.05932 14.601 3.32532 13.869C3.68432 13.662 3.90732 13.276 3.90732 12.862C3.90732 12.448 3.68432 12.061 3.32532 11.854C2.05832 11.118 1.62432 9.48898 2.35432 8.22098L3.03232 7.10798C3.75332 5.85398 5.38332 5.41198 6.65432 6.14198C6.82732 6.24498 7.01532 6.29698 7.20632 6.29898C7.82932 6.29898 8.35032 5.78498 8.36032 5.15298C8.35632 4.45598 8.63132 3.78698 9.13232 3.28198C9.63532 2.77798 10.3033 2.50098 11.0143 2.50098H12.2673ZM12.2673 4.00098H11.0143C10.7043 4.00098 10.4143 4.12198 10.1953 4.33998C9.97732 4.55898 9.85832 4.84998 9.86032 5.15998C9.83932 6.62198 8.64432 7.79898 7.19732 7.79898C6.73332 7.79398 6.28632 7.66898 5.89832 7.43698C5.35332 7.12698 4.64132 7.31798 4.32232 7.87298L3.64532 8.98598C3.33532 9.52398 3.52532 10.235 4.07732 10.556C4.89632 11.03 5.40732 11.914 5.40732 12.862C5.40732 13.81 4.89632 14.693 4.07532 15.168C3.52632 15.486 3.33632 16.193 3.65432 16.743L4.28532 17.831C4.44132 18.112 4.69632 18.315 4.99132 18.398C5.28532 18.48 5.60932 18.445 5.87932 18.295C6.27632 18.062 6.73832 17.941 7.20232 17.941C7.43132 17.941 7.66032 17.97 7.88432 18.03C8.56032 18.212 9.14732 18.664 9.49532 19.271C9.72132 19.652 9.84632 20.097 9.85032 20.551C9.85032 21.201 10.3723 21.722 11.0143 21.722H12.2673C12.9063 21.722 13.4283 21.204 13.4313 20.565C13.4273 19.859 13.7033 19.188 14.2083 18.683C14.7063 18.185 15.4023 17.886 16.0983 17.906C16.5543 17.917 16.9933 18.04 17.3803 18.26C17.9373 18.579 18.6483 18.389 18.9703 17.839L19.6343 16.732C19.7823 16.477 19.8253 16.157 19.7463 15.862C19.6683 15.567 19.4723 15.311 19.2083 15.16C18.5903 14.804 18.1493 14.23 17.9663 13.542C17.7853 12.867 17.8843 12.13 18.2373 11.523C18.4673 11.123 18.8043 10.786 19.2083 10.554C19.7503 10.237 19.9403 9.52798 19.6253 8.97598C19.6123 8.95398 19.6003 8.93098 19.5903 8.90698L19.0043 7.89098C18.6853 7.33598 17.9753 7.14498 17.4183 7.46198C16.8163 7.81798 16.1003 7.91998 15.4123 7.73898C14.7253 7.56098 14.1493 7.12598 13.7903 6.51198C13.5603 6.12798 13.4353 5.68098 13.4313 5.22598C13.4403 4.88398 13.3203 4.57698 13.1023 4.35198C12.8853 4.12798 12.5803 4.00098 12.2673 4.00098ZM11.6452 9.47508C13.5122 9.47508 15.0312 10.9951 15.0312 12.8621C15.0312 14.7291 13.5122 16.2471 11.6452 16.2471C9.77822 16.2471 8.25922 14.7291 8.25922 12.8621C8.25922 10.9951 9.77822 9.47508 11.6452 9.47508ZM11.6452 10.9751C10.6052 10.9751 9.75922 11.8221 9.75922 12.8621C9.75922 13.9021 10.6052 14.7471 11.6452 14.7471C12.6852 14.7471 13.5312 13.9021 13.5312 12.8621C13.5312 11.8221 12.6852 10.9751 11.6452 10.9751Z"
                fill="#829095"
              />
            </svg>
          ),
          handleClick: () => navFunc("/dashboard/settings"),
        },
        {
          name: "Log Out",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.3082 2.5C13.7542 2.5 15.7442 4.49 15.7442 6.936V7.868C15.7442 8.282 15.4082 8.618 14.9942 8.618C14.5802 8.618 14.2442 8.282 14.2442 7.868V6.936C14.2442 5.316 12.9272 4 11.3082 4H6.43324C4.81624 4 3.50024 5.316 3.50024 6.936V18.065C3.50024 19.684 4.81624 21 6.43324 21H11.3192C12.9312 21 14.2442 19.688 14.2442 18.076V17.133C14.2442 16.719 14.5802 16.383 14.9942 16.383C15.4082 16.383 15.7442 16.719 15.7442 17.133V18.076C15.7442 20.516 13.7582 22.5 11.3192 22.5H6.43324C3.98924 22.5 2.00024 20.511 2.00024 18.065V6.936C2.00024 4.49 3.98924 2.5 6.43324 2.5H11.3082ZM19.3883 9.054L22.3163 11.969C22.3425 11.9949 22.3659 12.0219 22.3873 12.0504L22.3163 11.969C22.3518 12.0039 22.3833 12.0421 22.4106 12.0828C22.4227 12.1012 22.4343 12.1203 22.445 12.1399C22.4537 12.1552 22.4618 12.1712 22.4692 12.1875C22.4755 12.2018 22.4816 12.2162 22.4872 12.2308C22.4948 12.2498 22.5014 12.2693 22.5071 12.2891C22.5115 12.3047 22.5155 12.3203 22.519 12.336C22.5235 12.3551 22.527 12.3743 22.5298 12.3937C22.5314 12.4063 22.5329 12.4195 22.5341 12.4328C22.5364 12.4556 22.5373 12.4777 22.5373 12.5L22.5322 12.562L22.5302 12.6017C22.53 12.6034 22.5297 12.6051 22.5295 12.6068L22.5373 12.5C22.5373 12.5555 22.5312 12.6105 22.5193 12.6639C22.5155 12.6797 22.5115 12.6953 22.507 12.7107C22.5014 12.7307 22.4948 12.7502 22.4874 12.7695C22.4816 12.7838 22.4755 12.7982 22.469 12.8123C22.4618 12.8288 22.4537 12.8448 22.4451 12.8605C22.4343 12.8797 22.4227 12.8988 22.4102 12.9172C22.4032 12.9282 22.3955 12.939 22.3875 12.9497C22.3637 12.981 22.3378 13.0104 22.3097 13.0377L19.3883 15.947C19.2423 16.093 19.0503 16.166 18.8593 16.166C18.6673 16.166 18.4743 16.093 18.3283 15.945C18.0363 15.651 18.0373 15.177 18.3303 14.885L19.9702 13.25H9.74604C9.33204 13.25 8.99604 12.914 8.99604 12.5C8.99604 12.086 9.33204 11.75 9.74604 11.75H19.9722L18.3303 10.116C18.0373 9.824 18.0353 9.35 18.3283 9.056C18.6203 8.762 19.0943 8.762 19.3883 9.054Z"
                fill="#829095"
              />
            </svg>
          ),
          handleClick: () => logout,
        },
      ],
    },
  ];

  return (
    <Container>
      <div className="main _auto_scroll_y">
        {LINK_LIST.map((item, i) => (
          <div key={i} className="linkWrapper _flex_col _gap10">
            <input
              type="checkbox"
              name=""
              id={`links${i}`}
              className="_d_none"
            />
            <label
              htmlFor={`links${i}`}
              className="title _pointer _flex_jcsb _no_select _align_center"
            >
              <span className="_no_wrap">{item?.header}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M19.9201 9.4502L13.4001 15.9702C12.6301 16.7402 11.3701 16.7402 10.6001 15.9702L4.08008 9.4502"
                  stroke="#122025"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>

            <div className="links">
              {item?.links.map((link, ind) => (
                <li
                  key={ind}
                  id="logout"
                  onClick={healthInfoSubmitted ? link?.handleClick : () => {}}
                  className={`link _flex ${
                    router.pathname == link?.link ? "active" : ""
                  } ${healthInfoSubmitted | (ind == 0) ? "" : "bluryLink"}`}
                >
                  {link?.icon}
                  <p>{link?.name}</p>
                </li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  &&& {
    * {
      padding: 0;
      margin: 0;
      border: none;
      text-decoration: none;
      color: inherit;
    }

    --pad-left: 48px;
    --link_height: 60px;
    --links_gap: 20px;

    min-height: 100%;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s linear;
    overflow: hidden auto;
    color: #000000;
    padding-bottom: 20px;

    @media screen and (max-width: 1000px) {
      --pad-left: 20%;
      --link_height: 60px;
      --links_gap: 12px;
    }

    @media screen and (max-width: 600px) {
      --links_gap: 12px;
      --link_height: 40px;
    }

    ::-webkit-scrollbar {
      width: 0;
      background-color: transparent;
    }

    .show-sm {
      @media screen and (min-width: 500px) {
        display: none;
      }
    }

    > .main {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 120px;
      list-style: none;
      background: transparent;

      .linkWrapper {
        background: transparent;
        /* background: #ffffff78; */

        .title {
          color: var(--Text---Title, #122025);
          font-family: "Open Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;

          padding: 8px 10px 8px var(--pad-left);
        }

        .links {
          overflow: hidden;
          max-height: 30vh;
          transition: 0.3s all ease-in;
          transform-origin: 0% 0%;

          .link {
            position: relative;
            background-color: transparent;
            box-shadow: 0 0 1px 0px #00000020;
            cursor: pointer;
            padding: 5px;
            padding-left: var(--pad-left);
            width: 100%;
            height: 55px;
            display: flex;
            align-items: center;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;

            color: var(--Text---Body, #829095);
            font-family: "Open Sans";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;

            &::before {
              content: "";
              /* box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25); */
              position: absolute;
              background: var(--blue_light);
              inset: 0;
              border-radius: 5px;
              width: 0;
              transition: all 0.3s ease-in;
              z-index: 1;
              opacity: 0.1;
            }

            &:hover {
              backdrop-filter: blur(1px);

              ::before {
                width: 100%;
              }
            }

            &.active {
              background: var(--blue_light);
              color: var(--blue_color);
            }

            &.bluryLink {
              cursor: default;
              opacity: 0.5;
            }
          }
        }

        input:checked {
          & ~ .links {
            max-height: 0;
            transform: scale(1, 0);
          }
        }
      }
    }

    /* #logout {
      cursor: pointer;
      text-align: center;
      padding-left: var(--pad-left);
      position: relative;

      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;

      transition: all 0.2s ease-in;

      background: transparent;

      p {
        color: #d12a2a;

        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      &:hover {
        box-shadow: -2px 11px 9px -4px rgba(0, 0, 0, 0.25);
      }
    } */
  }
`;
