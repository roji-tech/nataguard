import { NataGuardLogoSvg } from "@components/svgs/nataguard";
import Link from "next/link";
import styled from "styled-components";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormLabel from "@mui/joy/FormLabel";

import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import ModalClose from "@mui/joy/ModalClose";
import { useEffect, useState } from "react";

const SmallScreen = ({ modalState, showAuthBtns }) => {
  const [open, setOpen] = modalState;

  return (
    <div>
      <Modal
        aria-labelledby="Navbar on small screen"
        aria-describedby="Navbar on small screen"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 0,
          margin: 0,
          // background: "green",
        }}
        open={open}
        onClose={() => setOpen(!open)}
      >
        <ModalDialog
          className="_auto_scroll_y _bg_red"
          sx={{ width: "100%", maxWidth: "100%" }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <div className="sm_navlinks _flex_center _align_center">
            <Link href={"/"} className="links">
              Home
            </Link>
            <Link href={"/"} className="links">
              About Us
            </Link>
            <Link href={"/"} className="links">
              Contact
            </Link>
          </div>
          <div
            style={{
              visibility: showAuthBtns ? "visible" : "hidden",
              maxWidth: showAuthBtns ? "max-content" : "10%",
            }}
            className="sm_auth_links _flex _align_center"
          >
            <Link href={"/login"} className="links">
              Login
            </Link>
            <Link href={"/signup"} className="links blue _no_wrap">
              Sign up for FREE
            </Link>
          </div>
        </ModalDialog>
      </Modal>
    </div>
  );
};

const HomeNavbar = ({ showAuthBtns = true, isopen, setIsOpen, hamRef }) => {
  const modalState = useState(false);
  const [open, setOpen] = modalState;

  return (
    <Container className="_flex_jcsb _gap50 _align_center">
      <div>
        <Link href={"/"}>{NataGuardLogoSvg}</Link>
      </div>
      <label htmlFor="toggleMenu" onClick={() => setOpen(true)}>
        <svg
          width="50px"
          className="_pointer _p5"
          height="50px"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
            fill="#000000"
          />
          <path
            d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
            fill="#000000"
          />
          <path
            d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
            fill="#000000"
          />
        </svg>
      </label>
      <input id="toggleMenu" type="checkbox" />
      <SmallScreen modalState={modalState} showAuthBtns={showAuthBtns} />
      <div className="navlinks _flex_center _align_center">
        <Link href={"/"} className="links">
          Home
        </Link>
        <Link href={"/"} className="links">
          About Us
        </Link>
        <Link href={"/"} className="links">
          Contact
        </Link>
      </div>
      <div
        style={{
          visibility: showAuthBtns ? "visible" : "hidden",
          maxWidth: showAuthBtns ? "max-content" : "10%",
        }}
        className="auth_links _flex _align_center"
      >
        <Link href={"/login"} className="links">
          Login
        </Link>
        <Link href={"/signup"} className="links blue _no_wrap">
          Sign up for FREE
        </Link>
      </div>
    </Container>
  );
};

export default HomeNavbar;

const Container = styled.section`
  --container_padding: 32px 5%;
  --nav_links_gap: 80px;
  --auth_links_gap: 80px;

  &&& {
    padding: var(--container_padding);
    position: relative;

    .navlinks {
      gap: var(--nav_links_gap);
      transition: 0.2s all ease-in-out;

      .links {
        cursor: pointer;
        white-space: nowrap;

        color: var(--Text---Body, #829095);
        font-family: "Open Sans";
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;

        &.active {
          color: var(--Text---Title, #122025);
        }
      }
    }

    #toggleMenu,
    label[for="toggleMenu"] {
      display: none;
    }

    .auth_links {
      gap: var(--auth_links_gap);

      .links {
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        color: var(--Text---Title, #122025);
        font-family: "Open Sans";
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%;

        &.blue {
          padding: 16px 40px;
          background: var(--Primary---500, #06aae4);

          color: var(--White, #fff);
          font-family: "Open Sans";
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%;
        }
      }
    }

    @media screen and (max-width: 1300px) {
      --container_padding: 32px 4%;
      --nav_links_gap: 40px;
      --auth_links_gap: 40px;

      .navlinks {
        position: absolute;
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-around;
        height: 50px;

        inset: 0;
        top: 100%;
        scale: 0;
        transform: translate(0, -200px);
        background: #ffffff !important;
        box-shadow: 0 0 0 2px #00000010;
        padding: 10px 0;
      }

      label[for="toggleMenu"] {
        display: block;
      }

      #toggleMenu {
        display: none;

        &:checked ~ .navlinks {
          scale: 1;
          transform: translate(0, 0);
        }
      }
    }

    @media screen and (max-width: 900px) {
      .auth_links {
        padding: 5px 0 10px;
        box-shadow: 0 0 0 2px #00000010;

        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-around;
        transition: 0.3s all ease-in-out;

        inset: 0;
        top: calc(100% + 50px);
        height: fit-content;
        scale: 0;
        transform: translate(0, -200px);
        background: #ffffff;
      }

      #toggleMenu {
        box-shadow: 0 0 0 2px #00000010;
        display: none;

        &:checked ~ .navlinks {
          scale: 1;
          transform: translate(0, 0);
        }

        &:checked ~ .auth_links {
          scale: 1;
          transform: translate(0, 0);
        }
      }
    }

    @media screen and (max-width: 1000px) {
      .auth_links,
      .navlinks {
        display: none;
      }

      #toggleMenu {
        box-shadow: 0 0 0 2px #00000010;
        display: none;

        &:checked ~ .navlinks {
          scale: 1;
          transform: translate(0, 0);
        }

        &:checked ~ .auth_links {
          scale: 1;
          transform: translate(0, 0);
        }
      }
    }
  }
`;
