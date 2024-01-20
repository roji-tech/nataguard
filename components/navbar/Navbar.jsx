import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useRouter } from "next/router";
import useAuth from "@contexts/AuthContext";
import styled from "styled-components";
import useAxios from "@hooks/useAxios";
import useClickOutside from "@hooks/useClickOutside";
import { useRef } from "react";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import { api } from "@config";
import { ShowErrors } from "@utils/ShowErrors";

const Navbar = ({ isopen, setIsOpen, hamRef }) => {
  const [count, setCount] = useState(15);
  const { state } = useAuth();
  // const router = useRouter();
  const [myuser, setMyuser] = useState();
  const myaxios = useAxios();
  const [showNot, setShowNot] = useState(false);
  const notsRef = useRef();
  const notsRef2 = useRef();

  useClickOutside(notsRef, notsRef2, () => setShowNot(false), showNot);

  const setUserFunc = async () => {
    await fetchDataWithUseAxios(myaxios, api.me, "get", {}, "User Info")
      .then((resp) => {
        setMyuser({
          ...resp,
        });
        console.warn(resp, "resp");
      })
      .catch((error) => {
        console.warn(error, "error");
        // ShowErrors("Logging Out");

        if (state?.user) {
          setMyuser(state?.user);
        }
      });
  };

  // useEffect(() => {
  //   setUserFunc();
  // }, []);

  return (
    <Container className="_gap40">
      <div className="profile _flex _gap20">
        <div className="_flex _gap20 _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M12.5 17.1004L7.0667 11.6671C6.42503 11.0254 6.42503 9.97539 7.0667 9.33372L12.5 3.90039"
              stroke="#122025"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M7.42505 17.1004L12.8584 11.6671C13.5 11.0254 13.5 9.97539 12.8584 9.33372L7.42505 3.90039"
              stroke="#829095"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="title _flex_col_code">
          <p>{myuser?.full_name ?? <small>Dashboard</small>}</p>
        </div>
      </div>

      <img className="search_icon" src="search.svg" alt="" />
      <div className="_flex searchDiv _flex1">
        <div className="_flex search _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2823 2.16699C14.7573 2.16699 18.3973 5.80699 18.3973 10.282C18.3973 12.3933 17.5871 14.3189 16.2612 15.7641L18.8702 18.3676C19.1143 18.6117 19.1152 19.0067 18.871 19.2509C18.7493 19.3742 18.5885 19.4351 18.4285 19.4351C18.2693 19.4351 18.1093 19.3742 17.9868 19.2526L15.3464 16.6195C13.9574 17.7319 12.1962 18.3978 10.2823 18.3978C5.80734 18.3978 2.1665 14.757 2.1665 10.282C2.1665 5.80699 5.80734 2.16699 10.2823 2.16699ZM10.2823 3.41699C6.4965 3.41699 3.4165 6.49616 3.4165 10.282C3.4165 14.0678 6.4965 17.1478 10.2823 17.1478C14.0673 17.1478 17.1473 14.0678 17.1473 10.282C17.1473 6.49616 14.0673 3.41699 10.2823 3.41699Z"
              fill="#8A989D"
            />
          </svg>

          <input type="text" placeholder="Search anything..." name="search" />
        </div>
      </div>

      <div className="_flex _gap50 _align_center">
        <div className="_flex _gap30 _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0449 24.9573C12.6493 25.6305 13.4251 26.0003 14.2301 26.0003H14.2313C15.0398 26.0003 15.8191 25.6305 16.4246 24.9562C16.7489 24.598 17.3019 24.5688 17.6601 24.892C18.0194 25.2152 18.0486 25.7693 17.7254 26.1275C16.7828 27.174 15.5426 27.7503 14.2313 27.7503H14.2289C12.9211 27.7492 11.6833 27.1728 10.7441 26.1263C10.4209 25.7682 10.4501 25.214 10.8094 24.892C11.1688 24.5677 11.7218 24.5968 12.0449 24.9573ZM14.2882 2.66699C19.474 2.66699 22.9577 6.70599 22.9577 10.4778C22.9577 12.418 23.4512 13.2405 23.975 14.1132C24.493 14.9742 25.0799 15.9518 25.0799 17.7998C24.6727 22.5213 19.7435 22.9063 14.2882 22.9063C8.83286 22.9063 3.90253 22.5213 3.50002 17.8745C3.49653 15.9518 4.08336 14.9742 4.60136 14.1132L4.78423 13.8053C5.23448 13.0315 5.6187 12.1897 5.6187 10.4778C5.6187 6.70599 9.10236 2.66699 14.2882 2.66699ZM14.2882 4.41699C10.2107 4.41699 7.3687 7.61133 7.3687 10.4778C7.3687 12.9033 6.69553 14.0245 6.10053 15.0138C5.62336 15.8083 5.24653 16.436 5.24653 17.7998C5.44136 20.0002 6.89386 21.1563 14.2882 21.1563C21.6417 21.1563 23.1397 19.9488 23.3334 17.724C23.3299 16.436 22.953 15.8083 22.4759 15.0138C21.8809 14.0245 21.2077 12.9033 21.2077 10.4778C21.2077 7.61133 18.3657 4.41699 14.2882 4.41699Z"
              fill="#122025"
            />
            <circle
              cx="23.3332"
              cy="6.16667"
              r="5.16667"
              fill="#FFAD33"
              stroke="white"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4259 1.66699C18.9089 1.66699 19.3009 2.05899 19.3009 2.54199L19.3015 3.5311C21.0049 3.64789 22.4197 4.23138 23.421 5.23478C24.5142 6.33261 25.0893 7.91111 25.0835 9.80461V20.4481C25.0835 24.3354 22.6148 26.7504 18.6423 26.7504H8.77466C4.80216 26.7504 2.3335 24.3016 2.3335 20.3594V9.80228C2.3335 6.13567 4.53506 3.78209 8.12563 3.53151L8.12635 2.54199C8.12635 2.05899 8.51835 1.66699 9.00135 1.66699C9.48435 1.66699 9.87635 2.05899 9.87635 2.54199L9.876 3.50916H17.5503L17.5509 2.54199C17.5509 2.05899 17.9429 1.66699 18.4259 1.66699ZM23.3335 12.055H4.0835V20.3594C4.0835 23.3531 5.7495 25.0004 8.77466 25.0004H18.6423C21.6675 25.0004 23.3335 23.3834 23.3335 20.4481L23.3335 12.055ZM18.9016 19.396C19.3846 19.396 19.7766 19.788 19.7766 20.271C19.7766 20.754 19.3846 21.146 18.9016 21.146C18.4186 21.146 18.0219 20.754 18.0219 20.271C18.0219 19.788 18.4081 19.396 18.8911 19.396H18.9016ZM13.7245 19.396C14.2075 19.396 14.5995 19.788 14.5995 20.271C14.5995 20.754 14.2075 21.146 13.7245 21.146C13.2415 21.146 12.8448 20.754 12.8448 20.271C12.8448 19.788 13.231 19.396 13.714 19.396H13.7245ZM8.53655 19.396C9.01955 19.396 9.41155 19.788 9.41155 20.271C9.41155 20.754 9.01955 21.146 8.53655 21.146C8.05355 21.146 7.65571 20.754 7.65571 20.271C7.65571 19.788 8.04305 19.396 8.52605 19.396H8.53655ZM18.9016 14.8615C19.3846 14.8615 19.7766 15.2535 19.7766 15.7365C19.7766 16.2195 19.3846 16.6115 18.9016 16.6115C18.4186 16.6115 18.0219 16.2195 18.0219 15.7365C18.0219 15.2535 18.4081 14.8615 18.8911 14.8615H18.9016ZM13.7245 14.8615C14.2075 14.8615 14.5995 15.2535 14.5995 15.7365C14.5995 16.2195 14.2075 16.6115 13.7245 16.6115C13.2415 16.6115 12.8448 16.2195 12.8448 15.7365C12.8448 15.2535 13.231 14.8615 13.714 14.8615H13.7245ZM8.53655 14.8615C9.01955 14.8615 9.41155 15.2535 9.41155 15.7365C9.41155 16.2195 9.01955 16.6115 8.53655 16.6115C8.05355 16.6115 7.65571 16.2195 7.65571 15.7365C7.65571 15.2535 8.04305 14.8615 8.52605 14.8615H8.53655ZM17.5503 5.25916H9.876L9.87635 6.38149C9.87635 6.86449 9.48435 7.25649 9.00135 7.25649C8.51835 7.25649 8.12635 6.86449 8.12635 6.38149L8.12573 5.28565C5.51212 5.5052 4.0835 7.08949 4.0835 9.80228V10.305H23.3335L23.3335 9.80228C23.3382 8.36144 22.9508 7.24144 22.182 6.47144C21.5071 5.79455 20.5205 5.39029 19.3019 5.2862L19.3009 6.38149C19.3009 6.86449 18.9089 7.25649 18.4259 7.25649C17.9429 7.25649 17.5509 6.86449 17.5509 6.38149L17.5503 5.25916Z"
              fill="#122025"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.7063 2.66699C17.0582 2.66699 20.2082 3.97016 22.5742 6.33733C27.4648 11.228 27.4648 19.1847 22.5742 24.0753C20.1767 26.474 16.9485 27.7433 13.6783 27.7433C11.8957 27.7433 10.1013 27.3665 8.42251 26.5895C7.92785 26.3912 7.46468 26.2045 7.13218 26.2045C6.74951 26.2068 6.23501 26.3842 5.73801 26.5557C4.71835 26.9057 3.44901 27.342 2.50985 26.4063C1.57418 25.4695 2.00585 24.2037 2.35351 23.1852C2.52501 22.6835 2.70118 22.1655 2.70118 21.7735C2.70118 21.4515 2.54601 21.0408 2.30801 20.4493C0.122847 15.7302 1.13318 10.0427 4.83968 6.33849C7.20568 3.97133 10.3545 2.66699 13.7063 2.66699ZM13.7075 4.41699C10.8223 4.41699 8.11218 5.53933 6.07635 7.57633C2.88668 10.7637 2.01868 15.6578 3.91451 19.7563C4.18751 20.4318 4.45118 21.0898 4.45118 21.7735C4.45118 22.456 4.21668 23.1432 4.01018 23.7498C3.83985 24.2492 3.58201 25.0028 3.74768 25.1685C3.90985 25.3365 4.66818 25.0717 5.16868 24.9002C5.76951 24.6948 6.45085 24.4592 7.12635 24.4545C7.80301 24.4545 8.44118 24.7112 9.11668 24.983C13.2548 26.8963 18.149 26.026 21.3375 22.8387C25.5445 18.6293 25.5445 11.7822 21.3375 7.57516C19.3005 5.53816 16.5915 4.41699 13.7075 4.41699ZM18.3122 14.5235C18.9562 14.5235 19.4789 15.045 19.4789 15.6901C19.4789 16.3353 18.9562 16.8568 18.3122 16.8568C17.6682 16.8568 17.1409 16.3353 17.1409 15.6901C17.1409 15.045 17.6577 14.5235 18.3017 14.5235H18.3122ZM13.6353 14.5235C14.2793 14.5235 14.802 15.045 14.802 15.6901C14.802 16.3353 14.2793 16.8568 13.6353 16.8568C12.9913 16.8568 12.464 16.3353 12.464 15.6901C12.464 15.045 12.9796 14.5235 13.6248 14.5235H13.6353ZM8.9579 14.5235C9.6019 14.5235 10.1246 15.045 10.1246 15.6901C10.1246 16.3353 9.6019 16.8568 8.9579 16.8568C8.3139 16.8568 7.78656 16.3353 7.78656 15.6901C7.78656 15.045 8.3034 14.5235 8.9474 14.5235H8.9579Z"
              fill="#122025"
            />
            <circle
              cx="23.3332"
              cy="6.16667"
              r="5.16667"
              fill="#FFAD33"
              stroke="white"
            />
          </svg>
        </div>
        <div className="_flex _gap20 _align_center profile">
          <div className="avatar_circle"></div>
          <div className="title _flex_col_code">
            <p>{myuser?.full_name ?? <small>NoName</small>}</p>
            <small className="_capitalize">
              {myuser?.patient_id || "Patient - ID"}
            </small>
          </div>
        </div>
      </div>

      {/* <div className="notificationsDiv">
        <li
          ref={notsRef2}
          onClick={() => setShowNot(!showNot)}
          count={count > 0 ? count : ""}
          className="notify_icon"
        >
          {count > 0 && <div className="countBox">{count}</div>}
          <div id="notifImg">
            <Image src={"/notif.svg"} width={30} height={35} alt="" />
          </div>
        </li>
        <div
          ref={notsRef}
          className="notifications _auto_scroll_y"
          style={{
            transform: `translateX(${!showNot ? "150%" : "0"})`,
            scale: `${!showNot ? "0" : "1"}`,
            rotate: `${!showNot ? "-90deg" : "0deg"}`,
          }}
        >
          <header className="_flex_jcsb _align_center">
            <div className="_flex _align_center _gap20">
              <p>Notifications</p>
              <select name="notifications_filter" id="">
                <option value="all">All</option>
                <option value="lastMonth">Last Month</option>
                <option value="currentMonth">This Month</option>
              </select>
            </div>
            <div className="_flex _align_center">
              <p>Mark all as read</p>
              <img src="/read.svg" alt="" />
            </div>
          </header>
          <div className="items _flex_col">
            <div className="item">
              <img className="not_dot" src="/not_dot.svg" alt="" />
              <div className="img">
                <img src="/paracetamol_pills.svg" alt="" />
              </div>
              <div className="content _flex_col _gap10">
                <div className="text _flex_col">
                  <p>
                    <b>Paracetamol</b> is running out of stock
                  </p>
                  <span>Do you want the system to Auto-Restock</span>

                  <div className="btns _flex _gap10">
                    <button className="accept" disabled="disabled">
                      Accept
                    </button>
                    <button className="reject" disabled="disabled">
                      Reject
                    </button>
                  </div>
                </div>
                <p className="date">Today at 9:42 AM</p>
              </div>
            </div>
            <div className="item">
              <img className="not_dot" src="/not_dot.svg" alt="" />
              <div className="img">
                <img src="/not_img1.svg" alt="" />
              </div>
              <div className="content _flex_col _gap10">
                <div className="text _flex_col">
                  <p>
                    You Stocked <b>13,000 Pens</b>
                  </p>
                </div>
                <p className="date">Yesterday at 11:42 PM</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src="/paracetamol_pills.svg" alt="" />
              </div>
              <div className="content _flex_col _gap10">
                <div className="text _flex_col">
                  <p>
                    <b>Dennis NedryJust </b> joined as a staff
                  </p>
                </div>
                <p className="date">Yesterday at 5:42 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HamburgerRef onClick={() => setIsOpen(!isopen)} ref={hamRef}>
        <img
          src={isopen ? "/cross.svg" : "/ham.svg"}
          width={28}
          height={28}
          alt=""
        />
      </HamburgerRef> */}
    </Container>
  );
};

export default Navbar;

const Container = styled.section`
  &&& {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    padding-right: 9% !important;
    padding-left: 4% !important;
    box-sizing: border-box;

    width: 100%;
    height: 90%;

    * {
      font-family: "Open Sans";
      list-style-type: none;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      border: none;
      text-decoration: none;
    }

    @media screen and (max-width: 900px) {
      padding-right: 3% !important;
      padding-left: 3% !important;
    }

    @media screen and (max-width: 500px) {
    }

    a {
      color: var(--nav-cl2);
    }

    .profile {
      white-space: nowrap;
      align-items: center;

      .avatar_circle {
        background: #d9d9d9;
        width: 56px;
        height: 56px;

        border-radius: 50%;
        border: 1px solid #8a989d;
      }

      .title {
        p {
          color: var(--Text---Title, #122025);
          font-size: 22px;
          font-weight: 600;
          line-height: normal;
        }

        small {
          color: var(--Text---Body, #829095);
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
    }

    .search_icon {
      display: none;
      width: 25px;
      cursor: pointer;
    }

    .searchDiv {
      display: flex;
      max-width: 460px;
      padding: 10px 24px;
      align-items: center;
      gap: 16px;
      max-height: 58px;

      border-radius: 12px;
      background: var(--Background, #f5f5f5);

      .search {
        height: 45px;
        min-width: calc(100% - 70px);
        flex: 1;
        gap: 15px;

        padding: 6px 12px;
        background: #f7f6f9;

        img {
          width: 25px;
        }

        &:focus {
          border: 2px solid var(--blue);
        }

        input {
          background: transparent;
          width: 100%;
          height: 100%;
          color: #262626;

          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }

    .notificationsDiv {
      position: relative;
      z-index: 100;

      .notify_icon {
        padding: 0 !important;
        align-self: center;
        justify-self: center;
        border-radius: 10px;
        position: relative;
        height: 100%;
        transition: all 0.2s ease-in-out;
        font-size: 10px;

        #notifImg {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;

          img {
            padding: 0;
            margin: 0;
            width: 25px;
            height: 26px;
            margin-bottom: -3px;
          }
        }

        .countBox {
          transition: all 0.3s ease-in-out;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          font-size: 0.6em;
          background: rgba(211, 41, 41, 1);
          color: #ffffff;
          width: max-content;
          height: 10px;
          padding: 2px;
          border-radius: 50%;
          scale: 2;
          top: 1px;
          right: -1px;
        }

        :hover {
          .countBox {
            scale: 2.5;
            translate: -4px 6px;
            transform: scale(1.2);
          }
        }

        & ~ .notifications {
          transition: 0.2s all ease-in-out;
          transform: translateX(150%);

          background: #ffffff;
          position: absolute;
          /* min-w */
          top: 80%;
          right: 50%;
          height: 420px;

          min-width: 450px;
          width: 450px;

          border-radius: 4px;

          box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);

          font-style: normal;

          header {
            color: #1a1f36;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;

            padding: 14px 16px;
            border-bottom: 1px solid #00000030;

            select {
              all: none;
              background: transparent;
              color: rgba(158, 160, 170, 1);

              option {
                color: rgba(158, 160, 170, 1);
                background: transparent;
              }
            }
          }

          .items {
            .item {
              position: relative;
              min-width: 100%;
              max-width: 100%;
              width: 100%;
              padding: 16px;

              display: grid;
              grid-template-columns: 3fr 17fr;
              height: fit-content;

              .not_dot {
                position: absolute;
                top: 6px;
                left: 6px;
                width: 8px;
                height: 8px;
              }

              .content {
                .text {
                  p {
                    color: #1a1f36;

                    font-size: 14px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 20px;

                    color: #1a1f36;

                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                  }

                  span {
                    color: #ff9400;

                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 20px;
                  }

                  .accept {
                    background: rgba(0, 44, 202, 1);
                    border: 1px solid rgba(0, 44, 202, 1);
                    padding: 1px 8px;
                    border-radius: 6px;
                    height: 26px;

                    color: #fff;
                    text-align: center;

                    font-family: "Inter";
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 20px;

                    display: grid;
                    place-items: center;
                  }
                  .reject {
                    border-radius: 6px;
                    border: 1px solid rgba(60, 66, 87, 1);
                    background: #ffffff;
                    padding: 1px 8px;
                    height: 26px;

                    display: grid;
                    place-items: center;

                    color: #3c4257;
                    text-align: center;

                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 20px;
                  }
                }

                .date {
                  color: var(--knock-gray-200, #a5acb8);
                  padding-top: 15px;

                  /* Regular/Small */
                  font-family: "Inter";
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 20px;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      padding-left: 2% !important;
      padding-right: 2% !important;

      .searchDiv {
        min-width: 26%;

        .search {
          min-width: calc(100% - 90px);
          gap: 10px;
        }
      }
    }

    @media screen and (max-width: 600px) {
      .search_icon {
        display: block;
      }

      .searchDiv {
        min-width: 36%;
        display: none;
      }

      .notify_icon {
        padding: 0.01px !important;
        align-self: center;
        justify-self: center;
        background-color: aliceblue;
        margin: 2px;
        position: relative;
        height: 100%;
        transition: all 0.2s ease-in-out;
        font-size: 10px;
        display: flex;
        justify-content: center;

        img {
          width: 85%;
          align-self: center;
          justify-self: center;
        }
      }
    }
  }
`;

const HamburgerRef = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }

  /* outline: 3px solid red; */
  background-color: var(--blue_light);

  box-sizing: border-box;
  display: grid;
  place-items: center;
  padding: 2px;
  height: 35px;
  width: 35px;
  aspect-ratio: 1/1;
  border-radius: 10px;
  cursor: pointer;

  img {
    width: auto;
  }
`;
