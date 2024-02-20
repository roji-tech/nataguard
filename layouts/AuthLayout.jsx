import styled from "styled-components";
import HomeNavbar from "@components/navbar/HomeNavbar";
import { PulseLoader } from "react-spinners";

import Link from "next/link";

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

export function AuthLayout({
  children,
  headerText = "Login",
  headerDesc = "Welcome back!",
  pageNumber = null,
  showFormTitle = true,
  formTitle = "Personal Information",
  handleSubmit = () => {},
  btnText = "Login",
  login = true,
  showSocials = false,
  loading = false,
  showDaraCollectionReasonLink = false,
  modalComponent = "",
  modalBackdropClickClose = false,
  modalState = useState(false),
}) {
  const [open, setOpen] = modalState;

  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        open={open}
        onClose={(_event, reason) => {
          if ((reason == "backdropClick") & !modalBackdropClickClose) return;

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

      <Container className="_my_auto_scroll_v _flex_col _full_w">
        <HomeNavbar showAuthBtns={false} />
        <section
          style={{
            gap: showDaraCollectionReasonLink && "30px",
          }}
          className="content _flex_col _full_w _bg_white"
        >
          <header className="_flex_jcsb _full_w">
            <Link className="link" href={""}>
              Privacy Policy
            </Link>
            <div className="_flex_col_center _gap8">
              <h3>{headerText}</h3>
              <p>{headerDesc}</p>
            </div>
            <Link className="link terms" href={""}>
              Terms of Service
            </Link>
          </header>

          {showDaraCollectionReasonLink && (
            <Link
              className="_flex_center _align_center"
              style={{
                color: "#06AAE4",
                fontSize: "20px",
                margin: "25px 0",
              }}
              href={"#"}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 2.5C18 2.5 22.5 7 22.5 12.5C22.5 18 18 22.5 12.5 22.5C7 22.5 2.5 18 2.5 12.5C2.5 7 7 2.5 12.5 2.5Z"
                  stroke="#06AAE4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.5 16.5V11.5"
                  stroke="#06AAE4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4941 8.5H12.5031"
                  stroke="#06AAE4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Why are we collecting your data?
            </Link>
          )}

          <div className="_flex_center">
            <div className="authContainer">
              {showSocials && (
                <div className="socialBtns _flex _align_center">
                  {login ? (
                    <>
                      <Link
                        className="socilalBtn _full_w _flex_center _gap30 _align_center"
                        href={""}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <path
                            d="M33.84 18.375C33.84 17.205 33.735 16.08 33.54 15H18V21.3825H26.88C26.4975 23.445 25.335 25.1925 23.5875 26.3625V30.5025H28.92C32.04 27.63 33.84 23.4 33.84 18.375Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M17.9999 34.5C22.4549 34.5 26.1899 33.0225 28.9199 30.5025L23.5874 26.3625C22.1099 27.3525 20.2199 27.9375 17.9999 27.9375C13.7024 27.9375 10.0649 25.035 8.76738 21.135H3.25488V25.41C5.96988 30.8025 11.5499 34.5 17.9999 34.5Z"
                            fill="#34A853"
                          />
                          <path
                            d="M8.7675 21.1351C8.4375 20.1451 8.25 19.0876 8.25 18.0001C8.25 16.9126 8.4375 15.8551 8.7675 14.8651V10.5901H3.255C2.1 12.8894 1.49898 15.427 1.5 18.0001C1.5 20.6626 2.1375 23.1826 3.255 25.4101L8.7675 21.1351Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M17.9999 8.0625C20.4224 8.0625 22.5974 8.895 24.3074 10.53L29.0399 5.7975C26.1824 3.135 22.4474 1.5 17.9999 1.5C11.5499 1.5 5.96988 5.1975 3.25488 10.59L8.76738 14.865C10.0649 10.965 13.7024 8.0625 17.9999 8.0625Z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span>Login with Google</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        className="socilalBtn _full_w _flex_center _gap30 _align_center"
                        href={""}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 36 36"
                          fill="none"
                        >
                          <path
                            d="M33.84 18.375C33.84 17.205 33.735 16.08 33.54 15H18V21.3825H26.88C26.4975 23.445 25.335 25.1925 23.5875 26.3625V30.5025H28.92C32.04 27.63 33.84 23.4 33.84 18.375Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M17.9999 34.5C22.4549 34.5 26.1899 33.0225 28.9199 30.5025L23.5874 26.3625C22.1099 27.3525 20.2199 27.9375 17.9999 27.9375C13.7024 27.9375 10.0649 25.035 8.76738 21.135H3.25488V25.41C5.96988 30.8025 11.5499 34.5 17.9999 34.5Z"
                            fill="#34A853"
                          />
                          <path
                            d="M8.7675 21.1351C8.4375 20.1451 8.25 19.0876 8.25 18.0001C8.25 16.9126 8.4375 15.8551 8.7675 14.8651V10.5901H3.255C2.1 12.8894 1.49898 15.427 1.5 18.0001C1.5 20.6626 2.1375 23.1826 3.255 25.4101L8.7675 21.1351Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M17.9999 8.0625C20.4224 8.0625 22.5974 8.895 24.3074 10.53L29.0399 5.7975C26.1824 3.135 22.4474 1.5 17.9999 1.5C11.5499 1.5 5.96988 5.1975 3.25488 10.59L8.76738 14.865C10.0649 10.965 13.7024 8.0625 17.9999 8.0625Z"
                            fill="#EA4335"
                          />
                        </svg>
                        <span>Sign up with Google</span>
                      </Link>
                    </>
                  )}
                </div>
              )}
              <form className="_flex_col _gap40" onSubmit={_handleSubmit}>
                {showFormTitle && (
                  <div className="pageTitle _flex_center _align_center _gap40">
                    <span className="line" />
                    <h3 className="title _flex_center _align_center _no_wrap">
                      {pageNumber ? (
                        <span className="pageNumber _grid_center">
                          {pageNumber}
                        </span>
                      ) : (
                        ""
                      )}

                      {formTitle}
                    </h3>
                    <span className="line" />
                  </div>
                )}

                {children}

                <AuthButton
                  disabled={loading}
                  style={{
                    background: loading && "#ccc",
                  }}
                  type="submit"
                  className="_flex_center _gap10"
                >
                  {!loading && btnText}
                  <PulseLoader loading={loading} size={15} color="#068fe4" />
                </AuthButton>
              </form>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

const Container = styled.header`
  &&& {
    background: #ffffff;

    > * {
      width: 100%;
    }

    .content {
      box-shadow: 0 0 1px 0 #00000040;
      padding: 0 6.7% 50px;
      gap: 60px;

      > header {
        h3 {
          color: var(--Text---Title, #122025);
          text-align: center;
          font-family: Open Sans;
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: 150%; /* 60px */
        }

        p {
          color: var(--Text---Body, #829095);
          text-align: center;
          font-family: Open Sans;
          font-size: 28px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 42px */
        }

        .link {
          color: var(--Secondary---700, #f90);
          font-family: Open Sans;
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-decoration-line: underline;
        }

        @media screen and (max-width: 800px) {
          display: grid;
          max-width: 100%;
          width: 100%;

          grid-template-columns: 1fr 1fr;
          gap: 40px;

          > div {
            grid-column: span 2;
            grid-row: 2;
          }

          .terms {
            display: flex;
            justify-content: flex-end;
          }

          @media screen and (max-width: 600px) {
            .link {
              /* font-size: 24px !important; */
              font-size: 16px !important;
            }

            p {
              font-size: 20px;
            }
          }
        }
      }

      .authContainer {
        width: min(100%, 700px);

        .line {
          --w: 166.5px;
          --h: 2px;
          width: var(--w);
          min-width: var(--w);
          max-width: var(--w);
          min-height: var(--h);
          max-height: var(--h);
          height: var(--h);
          background: #ffad33;
          line-height: 0;
          display: inline;
        }

        .socialBtns {
          margin-bottom: 70px;

          .socilalBtn {
            padding: 16px 40px;
            border-radius: 10px;
            border: 1.5px solid var(--Primary---500, #06aae4);
            background: var(--White, #fff);

            color: var(--Primary---500, #06aae4);
            font-family: Open Sans;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;

            @media screen and (max-width: 600px) {
              font-size: 16px !important;
            }
          }
        }

        .pageTitle {
          .title {
            color: var(--Text---Title, #122025);
            font-family: Open Sans;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;
          }

          .pageNumber {
            width: 48px;
            min-width: 48px;
            max-width: 48px;
            height: 48px;
            aspect-ratio: 1/1;
            background: var(--Primary---500, #06aae4);
            border-radius: 50%;
            color: #fff;
          }
        }

        .otherAuthLink {
          color: var(--Secondary---700, #f90);
          font-family: Open Sans;
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 150%;
        }
      }
    }

    .modalPpup {
      h3 {
        color: var(--Text---Title, #122025);
        text-align: center;
        font-family: "Open Sans";
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 42px */
      }

      p {
        color: var(--Text---Body, #829095);
        text-align: center;
        font-family: "Open Sans";
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 30px */
      }
    }
  }
`;

export const Form = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 32px;

    width: min(100%, 700px);
  }
`;

export const InputBox = ({ item = {}, customInput }) => {
  return (
    <InputBoxWrapper>
      <h5 className="name">{item?.label ?? "Field Name"}</h5>

      {customInput ? (
        customInput
      ) : (
        <input
          inputMode={item?.inputMode || "text"}
          type={item?.type || "text"}
          className="_flex1 input"
          placeholder={item?.ph || "Your Placeholder"}
          name={item?.name}
          value={item?.value}
          onChange={item?.handleChange}
          ref={item?.ref}
        />
      )}
    </InputBoxWrapper>
  );
};

export const InputBoxWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .name {
      color: var(--Text---Title, #122025);
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 36px */
    }

    .input {
      padding: 16px 24px;
      color: #00000099;
      width: 100%;
      font-size: 20px;

      border-radius: 8px;
      background: var(--Background, #f5f5f5);
    }

    .input::placeholder {
      color: var(--Text---Body, #829095);
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      text-transform: lowercase;
    }

    .label {
      color: var(--Text---Title, #122025);
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 30px */
    }
  }
`;

export const RadioBox = ({
  item = {
    options: [],
    label: "Field Name",
    name: "myradio",
    handleChange: () => {},
  },
}) => {
  const options = item?.options ?? [
    { id: "yes", ph: "Yes" },
    { id: "no", ph: "No" },
  ];
  return (
    <RadioBoxWrapper>
      <h5 className="name">{item?.label}</h5>

      <div
        className="input _flex_col _gap10"
        style={{ alignItems: "flex-start" }}
      >
        {options?.map((option, i) => (
          <label
            key={option?.id ?? i}
            htmlFor={option?.value ?? option?.id}
            className="radio _pointer _flex _gap10"
          >
            <input
              type="radio"
              value={option?.id}
              id={option?.id}
              name={item.name}
              onChange={item?.handleChange}
              ref={item?.ref}
            />
            <div className="radioSvgs">
              <svg
                className="radio_checked"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                  rx="4"
                  fill="#06AAE4"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#06AAE4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className="radio_unchecked"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="label">{option?.ph}</p>
          </label>
        ))}
      </div>
    </RadioBoxWrapper>
  );
};

const RadioBoxWrapper = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .name {
      color: var(--Text---Title, #122025);
      font-family: Open Sans;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 36px */
    }

    .input {
      padding: 16px 24px;
      color: #00000099;
      width: 100%;
      font-size: 17px;

      border-radius: 8px;
      background: var(--Background, #f5f5f5);
    }

    .label {
      color: var(--Text---Title, #122025);
      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
    }

    .radioSvgs {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;

      svg {
        grid-area: 1/1;
        transition: 0.2s all ease-in-out;

        &.radio_checked {
          scale: 0;
        }
      }
    }

    input[type="radio"] {
      background: red;
      display: none;

      &:checked ~ .radioSvgs {
        svg {
          &.radio_checked {
            scale: 1;
          }
          &.radio_unchecked {
            scale: 0;
          }
        }
      }
    }
  }
`;

export const AuthButton = styled.button`
  &&& {
    border-radius: 10px;
    background: #06aae4;
    width: 100%;
    max-width: 100%;
    height: 68px;

    display: flex;
    width: 700px;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: var(--White, #fff);
    font-family: Open Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
`;

const DateBoxStyle = styled.div`
  &&& {
    width: 100%;

    > p {
      color: #010c15;

      /* Mid text semibold */

      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 21px;
    }
  }
`;

export const DateBox = ({ item, ...others }) => {
  useEffect(() => {
    const date_div = document.querySelector(
      ".DateBoxStyle .MuiInputBase-root.MuiOutlinedInput-root"
    );

    date_div.classList.remove("Mui-error");
  }, []);

  return (
    <DateBoxStyle
      key={item?.name}
      className="DateBoxStyle input_item _flex_col _gap8"
    >
      {!item?.hideTitle && <p>{item?.label}</p>}
      <div className="input _flex _align_center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MyDatePicker
            label={item?.label ?? item?.ph}
            placeholder={item?.ph || "Select Date"}
            name={item?.name}
            labelId="simple-select-label"
            className="_flex1"
            value={item?.value}
            onChange={item?.handleChange}
            ref={item?.ref}
            displayEmpty
            defaultValue={""}
            {...others}
            sx={{ outline: "none", border: "none", scale: 2 }}
          />
        </LocalizationProvider>

        {/* <DatePicker
          label="Uncontrolled picker"
          defaultValue={dayjs("2022-04-17")}
        /> */}
      </div>
      {item?.showDownText ? (
        <div className="down_text _flex _align_center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M5.5 7.5H6.5V8.5H5.5V7.5ZM5.5 3.5H6.5V6.5H5.5V3.5ZM5.995 1C3.235 1 1 3.24 1 6C1 8.76 3.235 11 5.995 11C8.76 11 11 8.76 11 6C11 3.24 8.76 1 5.995 1ZM6 10C3.79 10 2 8.21 2 6C2 3.79 3.79 2 6 2C8.21 2 10 3.79 10 6C10 8.21 8.21 10 6 10Z"
              fill="#FCBF49"
            />
          </svg>
          <p>{item?.downText}</p>
        </div>
      ) : (
        ""
      )}
    </DateBoxStyle>
  );
};

const InputBoxStyle = styled.div`
  &&& {
    width: 100%;

    > p {
      color: #010c15;

      /* Mid text semibold */

      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 21px;
    }

    .input {
      width: 100%;
      padding: 10px 15px;
      padding-right: 25px;
      border-radius: 4px;
      border: 1px solid rgba(1, 12, 21, 0.1);
      background: #fafafa;
      height: 40px;

      &.textareaInput {
        height: fit-content;
        padding: 0;

        textarea {
          color: #000000;
          background: transparent;

          min-height: 152px;
          max-height: 152px;
          max-width: 100%;
          min-width: 100%;
          color: #000;
          resize: none;
          padding: 10px 15px;
          border-radius: 4px;

          &::placeholder {
            color: rgba(1, 12, 21, 0.2);

            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px;
          }
        }
      }

      input {
        color: #000000;
        background: transparent;

        &::placeholder {
          color: rgba(1, 12, 21, 0.2);

          /* Mid text regular */

          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 21px;
        }
      }
    }

    .down_text {
      color: #fcbf49;

      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
  }
`;

const MyDatePicker = styled(DatePicker)`
  &&& {
    height: fit-content;
    border: none !important;
    outline: none !important;

    /* border: 5px solid pink !important; */

    .Mui-error {
      border: none !important;
      outline: none !important;
    }

    .MuiInputAdornment-root {
      border: none !important;
      outline: none !important;
    }

    label {
      display: none !important;
    }

    input {
      border: none !important;
      outline: none !important;
    }
  }
`;
