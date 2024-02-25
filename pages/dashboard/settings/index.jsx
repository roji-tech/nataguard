import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import DashboardLayout from "@layouts/DashboardLayout";
import styled from "styled-components";

export const Settings = ({ children, current = "My Profile" }) => {
  const TabLiist = [
    { label: "My Profile", link: "/dashboard/settings/" },
    { label: "General", link: "/dashboard/settings/general" },
    { label: "Documents", link: "" },
    { label: "Notifications", link: "" },
  ];

  return (
    <DashboardLayout showAside={false}>
      <Wrapper className="_flex_col _gap40">
        <h1 className="pageTitle">Settings</h1>

        <div className="_flex tabs _gap0">
          {TabLiist.map((item) => (
            <Link
              href={item?.link}
              key={item?.label}
              className={`tab ${current == item?.label ? "active" : ""}`}
            >
              {item?.label}
            </Link>
          ))}
        </div>

        {children}
      </Wrapper>
    </DashboardLayout>
  );
};

import React from "react";

const ProfileSettings = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabled2, setIsDisabled2] = useState(true);
  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    bio: "",
  });
  const [values2, setValues2] = useState({
    patientId: "",
    residentialAddress: "",
    registeredHospital: "",
  });

  const handleChange = (event) => {
    setValues();
  };

  const PersonalInfo = [
    {
      label: (
        <span className="_flex_col">
          <span> My Photo </span>
          <small>This will be visible on your profile.</small>
        </span>
      ),
      ph: (
        <div className="value _flex _gap40 _align_center">
          <img src="/avatar.png" width={64} height={64} alt="" />
          <button
            className="_p10 imageRemoveBtn _bg_trans _b_radius10"
            type="button"
          >
            Remove
          </button>
          <button
            className="_p10 imageUpdateBtn _bg_trans _b_radius10"
            type="button"
          >
            Update
          </button>
        </div>
      ),
      type: "date",
    },
    {
      label: "First & Last Name",
      ph: (
        <div className="_flex _flex1 names _gap24 _align_center">
          <input
            disabled={isDisabled}
            placeholder="aaaaaaaaaaaa"
            className="_flex1"
            type="text"
          />
          <input
            disabled={isDisabled}
            placeholder="aaaaaaaaaaaa"
            className="_flex1"
            type="text"
          />
        </div>
      ),
    },
    {
      label: "Email Address",
      ph: (
        <input
          disabled={isDisabled}
          placeholder="aaaaaaaaaaaa"
          className="_flex1"
          type="text"
        />
      ),
    },
    {
      label: "Phone Number",
      ph: (
        <input
          disabled={isDisabled}
          placeholder="aaaaaaaaaaaa"
          className="_flex1"
          type="text"
        />
      ),
    },
    {
      label: "Bio",
      ph: (
        <div className="_flex_jce">
          <p className="patientBtn">Patient</p>
        </div>
      ),
    },
  ];

  const PatientInfo = [
    {
      label: "Patients ID",
      ph: (
        <input
          disabled={isDisabled2}
          placeholder="SB-ID-00845"
          className="_flex1"
          type="text"
        />
      ),
    },
    {
      label: "",
      label: (
        <span className="_flex_col">
          <span>Residential Address</span>
          <small>Your address is visible to you only.</small>
        </span>
      ),
      ph: (
        <input
          disabled={isDisabled2}
          placeholder="25, Emily Close, Dolphin Estate, Lekki Phase I, Lekki, VI, Lagos, Nigeria."
          className="_flex1"
          type="text"
        />
      ),
    },
    {
      label: (
        <span className="_flex_col">
          <span>Registered Hospital</span>
          <small>This information is visible to you only.</small>
        </span>
      ),
      ph: (
        <input
          disabled={isDisabled2}
          placeholder="Lekki Central Hospital, Lekki, VI, Lagos, Nigeria."
          className="_flex1"
          type="text"
        />
      ),
    },
  ];
  return (
    <Settings>
      <div className="_flex_col _gap40 myProfile">
        <div className="_flex_col _gap40">
          <h2 className="subTitle">Overview</h2>
          <div className="_flex _gap30">
            <img src="/avatar.png" width={100} height={100} alt="" />
            <div className="_flex_col_jcsb">
              <h3>Emily Kimberly</h3>
              <p className="id">SB-ID-0056</p>
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <hr
          style={{
            width: "100%",
            height: 1,
            background: "#E4E1E8",
          }}
        />

        <form
          ref={formRef}
          onReset={() => setIsDisabled(true)}
          className="_flex_col personal _gap40"
        >
          <h2 className="subTitle">Personal Information</h2>
          <div className="_flex_col _gap24">
            {PersonalInfo.map((item) => (
              <div className="profileItem _flex">
                <div className="_flex _align_center">
                  <p className=""> {item?.label} </p>
                </div>
                <div className="_flex1 _flex _align_center">{item?.ph}</div>
              </div>
            ))}
          </div>
          <div className="actionBtns _flex_jce">
            {isDisabled ? (
              <p
                className="updateBtn _pointer"
                onClick={() => setIsDisabled(false)}
              >
                Update
              </p>
            ) : (
              <>
                <button
                  className="updateBtn"
                  type="reset"
                  // onClick={() => setIsDisabled(true)}
                >
                  Cancel
                </button>
                <button type="button" className="saveBtn">
                  Save Changes
                </button>
              </>
            )}
          </div>
        </form>

        <hr
          style={{
            width: "100%",
            height: 1,
            background: "#E4E1E8",
          }}
        />

        {/* <div className="_flex_col patient _gap40"></div> */}
        <form
          onReset={() => setIsDisabled2(true)}
          ref={formRef}
          className="_flex_col personal _gap40"
        >
          <h2 className="subTitle">Patient’s Information</h2>
          <div className="_flex_col _gap24">
            {PatientInfo.map((item) => (
              <div className="profileItem _flex">
                <div className="_flex _align_center">
                  <p className=""> {item?.label} </p>
                </div>
                <div className="_flex1 _flex _align_center">{item?.ph}</div>
              </div>
            ))}
          </div>
          <div className="actionBtns _flex_jce">
            {isDisabled2 ? (
              <p
                className="updateBtn _pointer"
                onClick={() => setIsDisabled2(false)}
              >
                Update
              </p>
            ) : (
              <>
                <button
                  className="updateBtn"
                  type="reset"
                  // onClick={() => setIsDisabled2(true)}
                >
                  Cancel
                </button>
                <button type="button" className="saveBtn">
                  Save Changes
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </Settings>
  );
};

export default ProfileSettings;

const Wrapper = styled.div`
  &&& {
    /* border: 2px solid red; */

    .pageTitle {
      color: var(--Text---Title, #122025);
      font-family: "Open Sans";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .tabs {
      display: flex;
      padding: 6px;

      border-radius: 80px;
      background: var(--Input-Fields, #f5f5f5);

      .tab {
        border-radius: 80px;
        display: flex;
        padding: 12px 40px;
        justify-content: center;
        align-items: center;
        gap: 8px;

        color: var(--Text---Title, #122025);
        text-align: center;
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        &.active {
          background: var(--White, #fff);
          box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
        }
      }
    }

    .subTitle {
      color: var(--Text---Title, #122025);
      font-family: "Open Sans";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    .personal {
      p {
        color: var(--Text---Title, #122025);
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      small {
        color: var(--Text---Body, #829095);
        font-family: "Open Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      input {
        display: flex;
        height: 49px;
        padding: 12px 24px;
        align-items: center;

        border-radius: 8px;
        background: var(--Input-Fields, #f5f5f5);

        color: var(--Text---Title, #122025);
        font-family: "Open Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        &::placeholder {
          color: var(--Text---Body, #829095);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      .profileItem {
        display: grid;
        grid-template-columns: 39% 60%;

        > div {
          max-width: 100%;
        }

        .patientBtn {
          border-radius: 8px;
          background: rgba(255, 153, 0, 0.1);

          display: flex;
          padding: 8px 24px;
          justify-content: center;
          align-items: center;
          gap: 8px;

          color: var(--Secondary---700, #f90);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .imageUpdateBtn {
          color: var(--Primary---500, #06aae4);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .imageRemoveBtn {
          color: var(--Accent---Pink, #ff5a5f);
          font-family: "Open Sans";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }

        .names {
          display: flex;
          max-width: 100%;

          input {
            max-width: calc(50% - 12px);
          }
        }
      }

      .actionBtns {
        .updateBtn {
          color: var(--Primary---500, #06aae4);
          font-family: "Open Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;

          display: flex;
          padding: 10px 32px;
          justify-content: center;
          align-items: center;
          gap: 24px;

          border-radius: 8px;
          border: 1.5px solid var(--Primary---500, #06aae4);
          background: var(--White, #fff);
        }

        .saveBtn {
          display: flex;
          padding: 10px 32px;
          justify-content: center;
          align-items: center;
          gap: 24px;

          border-radius: 8px;
          background: var(--Primary---500, #06aae4);

          color: var(--White, #fff);
          font-family: "Open Sans";
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }
  }
`;
