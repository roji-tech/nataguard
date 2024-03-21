import Navbar from "@components/navbar/Navbar";
import Sidebar from "@components/sidebars/Sidebar";
import {
  ArrowLongLeftSvg,
  PregnancyWeekSvg,
  NataGuardLogoSvg,
} from "@components/svgs/nataguard";
import useClickOutside from "@hooks/useClickOutside";
import Link from "next/link";
import { useRef, useState } from "react";
import styled from "styled-components";

// import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
// import DialogTitle from "@mui/joy/DialogTitle";
// import DialogContent from "@mui/joy/DialogContent";
// import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";
// import { useEffect, useState } from "react";

export const ArrowLinkElement = ({
  text = "See More",
  link = "#",
  underline = false,
}) => {
  const styles = {
    color: "var(--Primary---500, #06aae4)",
    fontFamily: "Open Sans",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    textDecorationLine: underline ? "underline" : "",
  };
  return (
    <span
      suppressHydrationWarning
      className="_flex _align_center"
      style={styles}
    >
      <Link
        href={link}
        className="read_more _pointer _flex _gap10 _align_center"
      >
        <span>{text}</span>
        {ArrowLongLeftSvg}
      </Link>
    </span>
  );
};

const DefaultMenuList = [
  {
    label: "Know these 6 health hacks!",
    text: (
      <>
        <p>
          Lorem ipsum dolor esit Lorem ipsum dolor esit Lorem ipsum dolor esit
          Lorem ipsum dolor esit Lorem ipsum dol
        </p>

        <ArrowLinkElement />
      </>
    ),
  },
  {
    label: "Know these 6 health hacks!",
    text: (
      <>
        <p>
          Lorem ipsum dolor esit Lorem ipsum dolor esit Lorem ipsum dolor esit
          Lorem ipsum dolor esit Lorem ipsum dol
        </p>
        <ArrowLinkElement />
      </>
    ),
  },
  {
    label: "Know these 6 health hacks!",
    text: (
      <>
        <p>
          Lorem ipsum dolor esit Lorem ipsum dolor esit Lorem ipsum dolor esit
          Lorem ipsum dolor esit Lorem ipsum dol
        </p>
        <ArrowLinkElement />
      </>
    ),
  },
];

const DashboardLayout = ({
  children,
  asideComponent,
  showAside = true,
  defaultAsideComponent = {
    showPregnancyWeek: true,
    title: "",
    menuList: DefaultMenuList,
  },
  modalComponent = "",
  modalBackdropClickClose = false,
  modalState = useState(false),
}) => {
  const [open, setOpen] = modalState;
  const [isopen, setIsOpen] = useState(false);

  const sideBarRef = useRef();
  const hamRef = useRef();
  const toggleSidebar = () => setIsOpen(false);

  useClickOutside(sideBarRef, hamRef, toggleSidebar, isopen);

  return (
    <DashboardLayoutStyles isopen={isopen}>
      <div className="parent">
        <div className="sidebar" ref={sideBarRef}>
          <div className="sidebar_top _grid_center">
            <Link href={"/"}>{NataGuardLogoSvg}</Link>
          </div>
          <div className="sidebar_main _auto_scroll_y">
            <Sidebar />
          </div>
        </div>
        <div className="main">
          <div className="navbar">
            <Navbar isopen={isopen} setIsOpen={setIsOpen} hamRef={hamRef} />
          </div>
          <div className="main_content" style={{position: "relative"}}>
            <Modal
              aria-labelledby="modal-title"
              aria-describedby="modal-desc"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              open={open}
              onClose={(_event, reason) => {
                if ((reason == "backdropClick") & !modalBackdropClickClose)
                  return;

                setOpen(false);
              }}
            >
              <ModalDialog
                className="_auto_scroll_y _bg_white"
                sx={{ width: "90%", maxWidth: 800 }}
              >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                {modalComponent}
              </ModalDialog>
            </Modal>
            <div
              className="children _bg_white _auto_scroll_y"
              style={{ padding: 24 }}
            >
              {children}
            </div>

            {/* <div className="toggleAside _d_none">More</div> */}
            {showAside && (
              <div className="asideComponent _p40 _auto_scroll_y">
                {asideComponent ?? (
                  <AsideComponent className="_flex_col _gap40">
                    {defaultAsideComponent.showPregnancyWeek && (
                      <div className="_flex_col_center pregnancy_week">
                        <div>{PregnancyWeekSvg}</div>

                        <h5 className="entire_week">
                          Entire Period - 40 weeks
                        </h5>

                        <p className="_center weeks_to_delivery">
                          You are 34 weeks away from your delivery. Keep up your
                          good health.
                        </p>
                      </div>
                    )}

                    {defaultAsideComponent.showPregnancyWeek && (
                      <hr
                        style={{
                          width: "100%",
                          height: 1,
                          background: "#E4E1E8",
                        }}
                      />
                    )}

                    <div className="_flex_col _gap40 otherContent">
                      <h3 className="title">{defaultAsideComponent.title}</h3>

                      <div className="_flex_col menuList">
                        {defaultAsideComponent.menuList.map((menuItem, i) => (
                          <div key={i} className="_flex_col menuItem">
                            <h4 className="label"> {menuItem?.label} </h4>
                            <div className="text _flex_col _gap8">
                              {menuItem?.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AsideComponent>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayoutStyles>
  );
};

export default DashboardLayout;

const DashboardLayoutStyles = styled.div`
  &&& {
    --nav_height: 105px;
    --main_content_pad: 35px 50px 30px;
    --Background: #fafafa;
    --main_pad: 30px;

    position: fixed;
    inset: 0;
    background: #ffffff;
    padding: 0px;

    max-width: 100vw;
    min-width: 100vw;

    * {
      padding: 0;
      /* margin: 0; */
    }

    .parent {
      background: #fafafa;
      background: #00000018;

      max-width: 100%;
      min-width: 100%;

      max-height: 100%;
      min-height: 100%;

      display: flex;
      gap: 0px;

      .sidebar {
        min-width: 305px;
        max-width: 305px;
        flex-basis: 305px;

        display: flex;
        flex-direction: column;
        background: var(--Background);

        .sidebar_top {
          min-height: var(--nav_height);
          max-height: var(--nav_height);
          background: #ffffff;
        }

        .sidebar_main {
          padding-top: 20px;
          background: #ffffff;
          min-height: 75%;
        }
      }

      .main {
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: calc(100vw - 305px);

        > * {
          max-width: 100%;
          min-width: 100%;
        }

        .navbar {
          min-height: var(--nav_height);
          max-height: var(--nav_height);

          background: #ffffff;
        }

        .main_content {
          flex: 1;
          padding: var(--main_content_pad);
          background: var(--Background, #927777);

          display: flex;
          justify-content: space-between;
          overflow: hidden;

          .children {
            flex: 1;
            flex-basis: 80%;
          }

          .asideComponent {
            border-left: 1px solid #e4e1e8;

            max-width: 800px;

            flex-basis: 500px;
            display: flex;
            justify-content: flex-end;
          }

          .toggleAside {
            position: fixed;
            top: 20vh;
            right: 0;
            background: pink;
            color: #000;
            font-size: 20px;

            writing-mode: vertical-lr;
            transform: rotate(-180deg);
            white-space: nowrap;
            padding: 5px;
            cursor: pointer;
            user-select: none;
          }
        }
      }

      @media screen and (max-width: 900px) {
        --main_content_pad: 30px;

        .sidebar {
          transition: all 0.3s ease-in;

          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          transform: ${({ isopen }) =>
            !isopen ? "translateX(-105%)" : "translateX(0%)"};
          max-width: 260px;
          min-width: 250px;

          z-index: 10;
        }

        .asideComponent {
          /* position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          outline: 3px solid red; */
        }

        .toggleAside {
          position: fixed;
          display: block;
        }
      }
    }
  }
`;

const AsideComponent = styled.aside`
  &&& {
    max-width: 800px;

    * {
      max-width: 100%;
    }

    .pregnancy_week {
      padding: 24px;
      gap: 32px;

      border-radius: 20px;
      background: var(--White, #fff);
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);

      .entire_week {
        color: var(--Text---Title, #122025);
        text-align: center;
        font-family: "Open Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .weeks_to_delivery {
        color: var(--Text---Body, #829095);
        text-align: center;
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .otherContent {
      /* width: 386px; */

      .menuList {
        gap: 16px;

        .menuItem {
          border-radius: 12px;
          background: var(--Input-Fields, #f5f5f5);

          display: flex;
          padding: 20px 16px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          align-self: stretch;
          height: max-content;
          min-height: max-content;

          .label {
            color: var(--Text---Title, #122025);
            font-family: "Open Sans";
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          .text {
            display: -webkit-box;
            -webkit-box-orient: vertical;

            /* -webkit-line-clamp: 2; */
            align-self: stretch;
            /* height: 300    display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;px; */
            min-height: max-content;

            /* overflow: hidden; */
            color: var(--Text---Body, #829095);
            text-overflow: ellipsis;
            font-family: "Open Sans";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
  }
`;
