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
import {
  ArrowLeftwardSvg,
  ArrowRightwardSvg,
  ChatIconSvg,
  NavbarBellIconSvg,
  NavbarCalendarIconSvg,
  SearchIconSvg,
} from "@components/svgs/nataguard";

const Navbar = ({ isopen, setIsOpen, hamRef }) => {
  const [count, setCount] = useState(15);

  const {
    state: { healthInfoSubmitted, user },
    logout,
  } = useAuth();

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

  useEffect(() => {
    setMyuser(user);
  }, [user]);

  return (
    <Container className="_gap40">
      <div className="profile _flex _gap20">
        {/* <div className="_flex _gap20 _align_center">
          {ArrowLeftwardSvg}
          {ArrowRightwardSvg}
        </div> */}
        <div className="title _flex_col_code">
          <p>{myuser?.full_name ?? <small>Dashboard</small>}</p>
        </div>
      </div>

      <img className="search_icon" src="search.svg" alt="" />
      {/* <div className="_flex searchDiv _flex1">
        <div className="_flex search _align_center">
          {SearchIconSvg}

          <input type="text" placeholder="Search anything..." name="search" />
        </div>
      </div> */}

      <div className="_flex _gap50 _align_center">
        {/* <div className="_flex _gap30 _align_center">
          {NavbarBellIconSvg}

          {NavbarCalendarIconSvg}

          {ChatIconSvg}
        </div> */}
        <div className="_flex _gap20 _align_center profile">
          <div className="avatar_circle"></div>
          <div className="title _flex_col_code">
            <p>
              {myuser?.firstName || "_"} {myuser?.lastName ?? "_"}
            </p>
            <small className="_capitalize _ellipsis_overflow">
              {myuser?.id?.slice(0, 10) + "..." || "Patient - ID"}
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
