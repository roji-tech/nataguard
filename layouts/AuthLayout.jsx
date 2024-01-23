import styled from "styled-components";
import Link from "next/link";
import HomeNavbar from "@components/navbar/HomeNavbar";

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
  showSocials = true,
}) {
  const _handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
  };
  return (
    <Container className="_my_auto_scroll_v _flex_col _full_w">
      <HomeNavbar showAuthBtns={false} />
      <section className="content _flex_col _full_w _bg_white">
        <header className="_flex_jcsb _full_w">
          <Link className="link" href={""}>
            Privacy Policy
          </Link>
          <div className="_flex_col_center _gap8">
            <h3>{headerText}</h3>
            <p>{headerDesc}</p>
          </div>
          <Link className="link" href={""}>
            Terms of Service
          </Link>
        </header>

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

              <AuthButton type="submit">{btnText}</AuthButton>
            </form>
          </div>
        </div>
      </section>
    </Container>
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
      gap: 80px;

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
      <h5 className="name">{item?.name ?? "Field Name"}</h5>

      {customInput ? (
        customInput
      ) : (
        <input
          type={item?.type || "text"}
          className="_flex1 input"
          placeholder={item?.ph || "Your Placeholder"}
          name={item?.id}
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
    name: "Field Name",
    radio_name: "myradio",
    handleChange: () => {},
  },
}) => {
  const options = item?.options ?? [
    { id: "yes", ph: "Yes" },
    { id: "no", ph: "No" },
  ];
  return (
    <RadioBoxWrapper>
      <h5 className="name">{item?.name}</h5>

      <div
        className="input _flex_col _gap10"
        style={{ alignItems: "flex-start" }}
      >
        {options?.map((option) => (
          <label htmlFor={option?.id} className="radio _pointer _flex _gap10">
            <input
              type="radio"
              value={option?.id}
              id={option?.id}
              name={item.radio_name}
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 11.9999L10.58 14.8299L16.25 9.16992"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
