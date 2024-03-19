import Footer from "@components/footer/Footer";
import HomeNavbar from "@components/navbar/HomeNavbar";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper className="_my_auto_scroll_v">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>NATAGUARD - LANDING PAGE</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="responsive.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif+Caption:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="root">
        <HomeNavbar />
        <header>
          <div className="container">
            <div id="mheader">
              <div id="text">
                <h1>
                  Your Journey to a <span>Healthy and Happy Pregnancy</span>{" "}
                  Begins Here
                </h1>

                <p>
                  NataGuard, your personalized pregnancy companion, uses machine
                  learning to predict potential complications and guide you
                  toward a healthy pregnancy.
                </p>

                <div className="signupfree">
                  <a href="">
                    <button>Sign up for FREE</button>
                  </a>
                </div>
              </div>

              <div className="homeImage1">
                <img src="/homeImage1.svg" alt="" />
              </div>
            </div>
          </div>
        </header>

        {/* <section id="sponsors" className="container">
          <img src="/microsoft.svg" alt="" />
          <img src="/microsoft.svg" alt="" />
          <img src="/microsoft.svg" alt="" />
        </section> */}

        <div className="container">
          <section className="aboutus" id="aboutus">
            <div className="image">
              <img src="/whoweare.png" alt="" />
            </div>
            <div className="text">
              <h1>Who We Are</h1>
              <p>
                NataGuard, your personalized pregnancy companion, uses machine
                learning to predict potential complications and guide you toward
                a healthy pregnancy.
                <br /> <br />
                NataGuard, your personalized pregnancy companion, uses machine
                learning to predict potential complications and guide you toward
                a healthy pregnancy. NataGuard, your personalized pregnancy
                companion, uses machine learning to predict potential
                complications and guide you toward a healthy pregnancy.
              </p>
            </div>
          </section>
{/* 
          <section classNamw="services">
            <div classNamw="box-1 box">
              <div classNamw="top">
                <p>
                  <span>50+</span> <br /> professional doctors and experts
                  onboard
                </p>
                <div classNamw="lamp">
                  <img src="./media/lamp-charge.svg" alt="" />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="2"
                viewBox="0 0 402 2"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M1 1H401"
                  stroke="#829095"
                  stroke-linecap="round"
                />
              </svg>
              <div classNamw="bottom">
                <p>
                  We boast a comprehensive network of over 50 accomplished and
                  credentialed professionals on out team, ensuring a diverse
                  wealth of expertise.
                </p>
              </div>
            </div>

            <div classNamw="box-2 box">
              <div classNamw="top">
                <p>
                  <span>2+</span> <br /> states across the country
                </p>
                <div classNamw="lamp">
                  <img src="./media/glass.svg" alt="" />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="2"
                viewBox="0 0 402 2"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M1 1H401"
                  stroke="#829095"
                  stroke-linecap="round"
                />
              </svg>
              <div classNamw="bottom">
                <p>
                  Our services have been extended to over 2 states across the
                  country, exemplifying our reach and commitment to providing
                  and improving pregnancy healthcare.
                </p>
              </div>
            </div>

            <div classNamw="box-3 box">
              <div classNamw="top">
                <p>
                  <span>2 Mins</span> <br /> quick yet accurate responses
                </p>
                <div classNamw="lamp">
                  <img src="./media/timer.svg" alt="" />
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="2"
                viewBox="0 0 402 2"
                fill="none"
              >
                <path
                  opacity="0.25"
                  d="M1 1H401"
                  stroke="#829095"
                  stroke-linecap="round"
                />
              </svg>
              <div classNamw="bottom">
                <p>
                  Our healthcare team ensures swift yet accurate responses
                  during consultations, underscoring our dedication to efficient
                  and timely medical care.
                </p>
              </div>
            </div>
          </section> */}

          <section className="illustrations">
            <div className="row-1 rows">
              <div className="mobile-image1 image1">
                <img src="./media/image 15.png" alt="" />
              </div>

              <div className="text">
                <h1>
                  <span>What</span> We Do
                </h1>
                <p>
                  NataGuard, your personalized pregnancy companion, uses machine
                  learning to predict potential complications and guide you
                  toward a healthy pregnancy. NataGuard, your personalized
                  pregnancy companion, uses machine learning to predict
                  potential.
                  <br />
                  <br />
                  NataGuard, your personalized pregnancy companion, uses machine
                  learning to predict potential complications and guide you
                  toward a healthy pregnancy.
                </p>
              </div>
              <div className="image">
                <img src="/whatwedo.png" alt="" />
              </div>
            </div>

            <div className="row-2 rows">
              <div className="image">
                <img src="/wevegot.png" alt="" />
              </div>

              <div className="text">
                <h2>
                  We’ve got a team of licensed healthcare professionals who are
                  dedicated to providing excellent medical assistance through
                  our platform.
                </h2>
                <a href="">
                  <button className="getintouch">Get in Touch</button>
                </a>
              </div>
            </div>

            {/* <div className="row-3 rows">
              <div className="mobile-image3">
                <img src="./media/image 16.png" alt="" />
              </div>

              <div className="text">
                <h2>Book an appointment for an in-clinic consultation.</h2>
                <a href="">
                  <button className="getintouch">Get in Touch</button>
                </a>
              </div>

              <div className="image">
                <img src="./media/image 16.png" alt="" />
              </div>
            </div> */}
          </section>
        </div>

        {/* <section id="content">
          <div className="container">
            <div className="first-row" id="aboutus">
              <h1>Who We Are</h1>
              <p>
                NataGuard, your personalized pregnancy companion, uses machine
                learning to predict potential complications and guide you toward
                a healthy pregnancy.
                <br /> <br />
                NataGuard, your personalized pregnancy companion, uses machine
                learning to predict potential complications and guide you toward
                a healthy pregnancy. NataGuard, your personalized pregnancy
                companion, uses machine learning to predict potential
                complications and guide you toward a healthy pregnancy.
              </p>
            </div>

            <div className="second-row">
              NataGuard, your personalized pregnancy companion, uses machine
              learning to predict potential complications and guide you toward a
              healthy pregnancy. NataGuard, your personalized pregnancy
              companion, uses machine learning to predict potential
              complications and guide you toward a healthy pregnancy. NataGuard,
              your personalized pregnancy companion, uses machine learning to
              predict potential complications and guide you toward a healthy
              pregnancy.
            </div>
          </div>
        </section> */}

        <footer>
          <div className="container">
            <div className="col-1">
              <h1>
                Nata<span>Guard</span>
              </h1>
              <p>
                Your personalized pregnancy companion, uses machine learning to
                predict potential complications and guide you toward a healthy
                pregnancy.
              </p>
              <ul>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="col-2">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="#aboutus">About Us</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
                <li>
                  <a href="signin.html">Login</a>
                </li>
                <li>
                  <a href="signup.html">Sign Up</a>
                </li>
              </ul>
            </div>

            <div className="col-3">
              <p>
                <a href="signup.html">Sign up for FREE</a>
              </p>
              <div className="icons" id="Contact">
                <a href="#">
                  <img src="media/ant-design_instagram-outlined.svg" alt="" />
                </a>
                <a href="#">
                  <img src="media/dashicons_facebook-alt.svg" alt="" />
                </a>
                <a href="#">
                  <img src="media/akar-icons_linkedin-fill.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <p id="Copyright">
            &copy; Copyright 2024 | <span>NataGuard</span> by MASL FUTA
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  &&& {
    background: #fff;

    & {
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "PT Sans", sans-serif;
        list-style: none;
        /* font-size: 10px; */
      }

      #root {
        width: 100%;
        margin: auto;
      }

      .container {
        padding-right: 5%;
        padding-left: 5%;
        width: 100%;
      }

      .signupfree a button {
        font-size: 1.1rem;
        font-weight: 500;
        color: #fff;
        background-color: #06aae4;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
      }

      header {
        position: relative;

        #nav-bar {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          /* padding: 20px; */
          box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
            rgba(255, 255, 255, 0.25) 0px 1px 0px inset;

          #safe-left {
            font-size: 1.3rem;
          }

          #safe-left a {
            text-decoration: none;
            color: #000;
          }

          #safe-left span {
            color: #06aae4;
          }

          #safe-hbc ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          #safe-hbc ul li {
            font-size: 1.1rem;
            /* padding: 0 40px; */
            font-weight: 400;
          }

          #safe-hbc ul li a {
            text-decoration: none;
            color: #829095;
          }
        }

        #safe-access ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
        }

        #safe-access ul li a {
          text-decoration: none;
          color: #122025;
        }

        #safe-access ul li#Login {
          color: #122025;
          padding-right: 30px;
          font-size: 1.1rem;
          font-weight: 600;
        }

        #safe-access ul li#free-signup {
          color: #fff;
          font-size: 1.1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          background-color: #06aae4;
          height: 40px;
          width: 160px;
          border-radius: 10px;
        }

        #safe-access ul li#free-signup a {
          color: #fff;
        }

        /* MAIN-HEADER */
        #mheader {
          display: flex;
          justify-content: space-between;
          padding: 40px 0;
          margin: auto;
          background-color: #fff;

          #text {
            flex-basis: 50%;
            width: 200px;
          }

          #text h1 {
            font-family: "PT Serif Caption", serif;
            font-size: 2.8rem;
            font-weight: 400;
            margin-bottom: 30px;
            line-height: 1.4;
            width: 500px;
          }

          #text h1 span {
            color: #06aae4;
            font-family: "PT Serif Caption", serif;
          }

          #text p {
            font-size: 1.2rem;
            color: #829095;
            line-height: 1.6;
            margin: 30px 0;
          }

          #text #googleplay {
            width: 400px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            /* margin: 40px 0; */

            #comingsoon {
              color: #ffad33;
              font-size: 1rem;
              font-weight: 600;
            }

            #playstore {
              width: 200px;
            }
          }

          .halfcircle {
            width: 450px;
            height: 450px;
            background-color: #f5f5f5;
            border-radius: 50%;
          }

          .homeImage1 {
            z-index: 0;
            position: relative;

            &:before {
              position: absolute;
              content: "";
              inset: 0;
              top: -100px;
              z-index: -1;
              width: 750px;
              height: 750px;

              border-radius: 750px;
              background: radial-gradient(
                50.07% 50.07% at 50% 50%,
                #56cffb 0%,
                rgba(86, 207, 251, 0) 91%
              );
            }
          }
        }
      }

      section#sponsors {
        display: flex;
        align-items: center;
        justify-content: space-between;
        opacity: 0.5;
        background-color: #fff;
        height: 100px;
        z-index: 1;
        flex-wrap: wrap;

        /* img {
          width: 150px;

          &:first-child {
            width: 80px;
          }

          &:last-child {
            width: 80px;
          }
        } */
      }

      section#content {
        width: 90%;
        margin: auto;
        background-color: #fff;
        padding: 40px 0;
      }

      section#content .first-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
      }

      section#content .first-row h1 {
        width: 800px;
        margin-right: 100px;
        position: relative;
      }

      section#content .first-row h1::after {
        content: "";
        position: absolute;
        top: 35px;
        bottom: 0;
        left: 0;
        background-color: #06aae4;
        color: #06aae4;
        height: 2px;
        width: 100px;
      }

      section#content .first-row p {
        font-size: 1.1rem;
        color: #829095;
        line-height: 2;
        text-align: justify;
      }

      section#content .second-row {
        width: 40%;
        margin: 150px auto;
        text-align: justify;
        color: #829095;
        font-size: 1.1rem;
        color: #829095;
        line-height: 2;
        text-align: justify;
      }

      section#content .download {
        font-family: "PT Sans", sans-serif;
        width: 40%;
        margin: 150px auto;
        text-align: justify;
        font-size: 1.1rem;
        line-height: 2;
        text-align: center;
      }

      section#content .download h2 span {
        color: #06aae4;
      }

      footer {
        color: #fff;
        background-color: #04739a;
        padding: 60px 0;
      }

      footer .container {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
      }

      footer .container .col-1 {
        flex-basis: 30%;
      }

      footer .container .col-1 h1 {
        color: #fff;
        margin-bottom: 20px;
      }
      footer .container .col-1 h1 span {
        color: #06aae4;
      }

      footer .container .col-1 p {
        line-height: 1.8;
        margin-bottom: 80px;
      }

      footer .container .col-1 ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
      }

      footer .container .col-1 ul li a {
        text-decoration: underline;
        color: #fff;
      }

      footer .container .col-1 ul li a:hover {
        color: #ffad33;
      }

      footer .container .col-2 h2 {
        color: #fff;
        position: relative;
        margin-bottom: 30px;
      }

      footer .container .col-2 h2::after {
        content: "";
        position: absolute;
        top: 30px;
        bottom: 0;
        left: 0;
        background-color: #fff;
        color: #fff;
        height: 2px;
        width: 100px;
      }

      footer .container .col-2 ul li {
        margin-bottom: 10px;
      }

      footer .container .col-2 ul li a {
        text-decoration: none;
        color: #fff;
      }

      footer .container .col-2 ul li a:hover {
        color: #ffad33;
      }

      hr {
        color: #04739a;
        background-color: #04739a;
        width: 80%;
        margin: 50px auto;
      }

      footer p#Copyright {
        color: #fff;
        text-align: center;
        margin: auto;
      }

      footer p#Copyright span {
        color: #06aae4;
      }

      footer .container .col-3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      footer .container .col-3 p {
        width: 200px;
        text-align: center;
        color: #fff;
        background-color: #06aae4;
        border-radius: 10px;
        padding: 10px 20px;
        /* margin-bottom: 120px; */
      }

      footer .container .col-3 p a {
        text-decoration: none;
        color: #fff;
      }

      footer .container .col-3 .icons {
        text-align: right;
      }
    }

    & {
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "PT Sans", sans-serif;
      }

      a button {
        cursor: pointer;
      }

      header {
        box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
      }

      header .container {
        width: 80%;
        margin: auto;
      }

      header .container .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        padding: 10px 0;
      }

      header .container .navbar .logo {
        font-size: 2rem;
        font-weight: 600;
      }

      header .container .navbar .logo span {
        color: #06aae4;
      }

      header .container .navbar .navlinks ul {
        display: flex;
        justify-content: space-between;
      }

      header .container .navbar .navlinks ul li {
        margin-right: 40px;
        font-size: 1.2rem;
      }

      header .container .navbar .navlinks ul li a {
        text-decoration: none;
        color: #000;
      }

      header .container .navbar .navaccess button {
        cursor: pointer;
      }

      header .container .navbar .navaccess button.login {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
      }

      header .container .navbar .navaccess button.signup {
        color: #fff;
        background-color: #06aae4;
        font-size: 1.2rem;
        letter-spacing: 1px;
        padding: 10px 25px;
        border: none;
        border-radius: 10px;
        font-weight: 500;
        margin-left: 30px;
      }

      header .container .navbar .menu {
        display: none;
      }

      header .container .navbar .mobile-links {
        display: none;
        width: 100%;
        background-color: #06aae4;
        padding: 20px;
        /* border-radius: 10px; */
        position: absolute;
        top: 0px;
        right: 0px;
      }

      header .container .navbar .mobile-links .mobile-navlinks ul li {
        margin-bottom: 15px;
      }

      header .container .navbar .mobile-links .mobile-navlinks ul li a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
      }

      header .container .navbar .mobile-links .mobile-navaccess button {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 15px;
        color: #fff;
      }

      header .container .navbar .mobile-links .mobile-navaccess .close-btn {
        position: absolute;
        top: 25px;
        right: 25px;
      }

      main .container {
        width: 80%;
        margin: auto;
      }

      main .container .main-header {
        display: flex;
        justify-content: space-between;
        padding: 70px 0 20px 0;
      }

      main .container .main-header .text {
        /* width: ; */
        flex-basis: 40%;
      }

      main .container .main-header .text h1 {
        line-height: 1.2;
        margin-bottom: 30px;
        margin: 20px auto;
      }

      main .container .main-header .text p {
        color: #829095;
        line-height: 1.4;
        margin-bottom: 40px;
      }

      main .container .main-header .signupfree a button {
        font-size: 1.1rem;
        font-weight: 500;
        color: #fff;
        background-color: #06aae4;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
      }

      main .container .main-header .text h1 span {
        color: #06aae4;
      }

      main .container .main-header .halfcircle {
        width: 300px;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #56cffb 0%,
          rgba(86, 207, 251, 0) 100%
        );
      }

      main .container .main-header .halfcircle img {
        width: 100%;
      }

      section.sponsors {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0;
      }

      section.sponsors img {
        width: 15%;
      }

      main .mobile-sponsors {
        display: none;
      }

      section.aboutus {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      section.aboutus .image {
        flex-basis: 40%;
        margin-right: 100px;
      }

      section.aboutus .image img {
        width: 100%;
      }

      section.aboutus .text {
        flex-basis: 60%;
      }

      section.aboutus .text h1 {
        font-size: 2.1rem;
        margin-bottom: 80px;
        position: relative;
      }

      section.aboutus .text h1::after {
        content: "";
        width: 100px;
        height: 1.5px;
        background-color: #06aae4;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      section.aboutus .text p {
        color: #829095;
        line-height: 1.8;
      }

      section.services {
        display: flex;
        justify-content: space-between;
        margin: 80px 0 30px 0;
      }

      section.services .box {
        width: 30%;
        padding: 40px 30px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 15px;
      }

      section.services .box .top {
        display: flex;
        justify-content: space-between;
      }

      section.services .box .top p {
        line-height: 1.7;
        width: 200px;
        font-size: 1.2rem;
      }

      section.services .box .top p span {
        color: #ffad33;
        font-size: 2.2rem;
        font-weight: 600;
        /* display: block; */
        /* margin-bottom: 5px; */
      }

      section.services .box .top .lamp {
        background-color: #f2cd95;
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }

      section.services .box .top .lamp img {
        width: 40px;
      }

      section.services .box .bottom p {
        color: #829095;
        line-height: 1.8;
        margin: 20px 0;
      }

      section.illustrations .rows {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 80px 0;
      }

      .mobile-image1 {
        display: none;
      }

      .mobile-image3 {
        display: none;
      }

      section.illustrations .row-1 .text {
        width: 80%;
        margin-right: 70px;
      }

      section.illustrations .row-1 .text h1 {
        margin-bottom: 30px;
      }

      section.illustrations .row-1 .text p {
        line-height: 1.6;
      }

      section.illustrations .row-1 .image {
        width: 1100px;
      }

      section.illustrations .row-1 .image img {
        width: 100%;
      }

      section.illustrations .row-2 .image {
        width: 1100px;
        margin-right: 80px;
      }

      section.illustrations .row-2 .image img {
        width: 100%;
      }

      section.illustrations .row-2 .text {
        width: 80%;
      }

      section.illustrations .row-2 .text h2 {
        line-height: 1.4;
        font-weight: 500;
        margin-bottom: 60px;
      }

      section.illustrations .getintouch {
        background-color: #06aae4;
        border: none;
        color: #fff;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 10px 20px;
        border-radius: 10px;
      }

      section.illustrations .row-3 .text {
        width: 80%;
      }

      section.illustrations .row-3 h2 {
        line-height: 1.4;
        font-weight: 500;
        margin-bottom: 60px;
      }

      section.illustrations .row-3 .image {
        width: 1100px;
        margin-left: 60px;
      }

      section.illustrations .row-3 .image img {
        width: 100%;
      }

      section.download {
        background-color: #04739a;
        margin-bottom: 20px;
        padding: 100px;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
      }

      section.download .container {
        font-family: "PT Sans", sans-serif;
        /* padding: 40px; */
        text-align: center;
        position: relative;
      }

      section.download .container h2 {
        font-size: 2rem;
        color: #fff;
      }

      section.download .container h2.app {
        font-size: 2.2rem;
        margin-top: 5px;
      }

      section.download .container h2 span {
        color: #06aae4;
      }
      .images {
        /* margin-top: 20px; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 45%;
        margin: 20px auto;
      }
      #coming-soon {
        font-size: 1.4rem;
        font-weight: 600;
        background-color: #ffad33;
        width: 200px;
        padding: 10px 5px;
        border: 4px solid #fff;
        border-radius: 20px;
        position: absolute;
        top: 0px;
        right: 200px;
        transform: rotate(-15deg);
      }

      section.feedbacks .container h1 {
        font-family: "PT Serif Caption", serif;
        text-align: center;
        font-size: 2rem;
        margin: 50px 0 10px 0;
        position: relative;
      }

      section.feedbacks .container h1::after {
        content: "";
        background-color: #06aae4;
        width: 200px;
        height: 1.5px;
        position: absolute;
        bottom: -5px;
        left: 500px;
      }

      section.feedbacks .container h1 span {
        font-family: "PT Serif Caption", serif;
        color: #06aae4;
      }

      section.feedbacks .container .boxes {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 60px 0;
      }

      section.feedbacks .container .boxes .box {
        box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
          rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        border-radius: 10px;
        /* border: 1px solid #829095; */
        width: 30%;
        padding: 40px 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      section.feedbacks .container .boxes .box h3 {
        color: #ffad33;
        font-size: 5rem;
        margin-bottom: 0;
      }

      section.feedbacks .container .boxes .box p {
        color: #829095;
        font-size: 1rem;
        margin-top: 0;
        margin-bottom: 20px;
      }

      footer {
        color: #fff;
        background-color: #04739a;
        padding: 60px 0;
      }

      footer .container {
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
      }

      footer .container .col-1 {
        flex-basis: 30%;
      }

      footer .container .col-1 h1 {
        color: #fff;
        margin-bottom: 20px;
      }
      footer .container .col-1 h1 span {
        color: #06aae4;
      }

      footer .container .col-1 p {
        line-height: 1.8;
        margin-bottom: 80px;
      }

      footer .container .col-1 ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
      }

      footer .container .col-1 ul li a {
        text-decoration: underline;
        color: #fff;
      }

      footer .container .col-1 ul li a:hover {
        color: #ffad33;
      }

      footer .container .col-2 h2 {
        color: #fff;
        position: relative;
        margin-bottom: 30px;
      }

      footer .container .col-2 h2::after {
        content: "";
        position: absolute;
        top: 34px;
        bottom: 0;
        left: 2px;
        background-color: #ffad33;
        /* color: #fff; */
        height: 1.5px;
        width: 100px;
      }

      footer .container .col-2 ul li {
        margin-bottom: 10px;
      }

      footer .container .col-2 ul li a {
        text-decoration: none;
        color: #fff;
      }

      footer .container .col-2 ul li a:hover {
        color: #ffad33;
      }

      hr {
        color: #04739a;
        background-color: #04739a;
        width: 80%;
        margin: 50px auto;
      }

      footer p#Copyright {
        color: #fff;
        text-align: center;
        margin: auto;
      }

      footer p#Copyright span {
        color: #06aae4;
      }

      footer .container .col-3 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      footer .container .col-3 p {
        width: 200px;
        text-align: center;
        color: #fff;
        background-color: #06aae4;
        border-radius: 10px;
        padding: 10px 20px;
        /* margin-bottom: 120px; */
      }

      footer .container .col-3 p a {
        text-decoration: none;
        color: #fff;
      }

      footer .container .col-3 .icons {
        text-align: right;
      }
    }

    @media (min-width: 350px) and (max-width: 650px) {
      .container {
        width: 90%;
        margin: auto;
      }

      header #nav-bar #safe-left {
        font-size: 1rem;
      }

      header #nav-bar #safe-hbc ul {
        display: none;
      }

      header #safe-access ul {
        display: none;
      }

      header #mheader {
        display: flex;
        flex-direction: column;
      }

      header #mheader #text h1 {
        font-size: 2.4rem;
        font-weight: 500;
        width: 150%;
      }

      header #mheader #text p {
        font-size: 1.3rem;
        line-height: 1.8;
        text-align: center;
        width: 150%;
        margin: auto;
      }

      header #mheader #text #googleplay {
        display: none;
      }

      header #mheader .halfcircle {
        display: none;
      }

      section#sponsors {
        display: flex;
        align-items: center;
        justify-content: space-between;
        opacity: 0.5;
        background-color: #fff;
        height: 100px;
        z-index: 1;
        flex-wrap: wrap;
        margin: 30px;
      }

      section#sponsors img {
        width: 150px;
      }

      section#sponsors img:first-child {
        display: none;
      }

      section#sponsors img:last-child {
        display: none;
      }

      section#content {
        width: 90%;
        margin: auto;
        background-color: #fff;
        padding: 20px 0;
      }

      section#content .first-row {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 50px 0;
      }

      section#content .first-row h1 {
        width: 800px;
        margin-right: 100px;
        position: absolute;
      }

      section#content .first-row h1::after {
        display: none;
      }

      section#content .second-row {
        width: 100%;
      }

      section#content .download {
        width: 80%;
        line-height: 1.4;
      }

      footer .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
      }

      footer .container .col-1 p {
        font-size: 1.2rem;
      }

      footer .container .col-1 ul {
        display: flex;
        flex-direction: column;
        margin: auto;
      }

      footer .container .col-1 ul li {
        margin-bottom: 20px;
      }

      footer .container .col-2 h2 {
        color: #fff;
        position: relative;
        margin: 30px 0;
      }

      footer .container .col-2 h2::after {
        display: none;
      }

      footer .container .col-3 p {
        margin: 50px auto;
      }

      footer .container .col-3 .icons {
        text-align: center;
      }
    }

    @media (max-width: 600px) {
      header .container {
        width: 90%;
      }

      header .container .navbar .logo {
        font-size: 1.6rem;
      }

      header .container .navbar .navlinks ul {
        display: none;
      }

      header .container .navbar .navaccess {
        display: none;
      }

      header .container .navbar .menu {
        display: block;
        width: 35px;
      }
      header .container .navbar .menu img {
        width: 100%;
      }

      main .container {
        width: 90%;
        margin: auto;
      }

      main .container .main-header {
        flex-direction: column;
        padding: 30px 0 20px 0;
        text-align: center;
      }

      main .container .main-header .text h1 {
        font-size: 2.3rem;
        line-height: 1.3;
        width: 75%;
      }

      main .container .main-header .text p {
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 40px;
      }

      main .container .main-header .halfcircle {
        width: 300px;
        height: 300px;
        background: radial-gradient(
          50% 50% at 50% 50%,
          #56cffb 0%,
          rgba(86, 207, 251, 0) 100%
        );
        margin: 50px auto;
      }

      section.sponsors {
        display: none;
      }

      main .mobile-sponsors {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        /* gap: 20px; */
      }

      main .mobile-sponsors img {
        width: 45%;
      }

      /* main .mobile-sponsors img:first-child {
width: 80px;
} */

      main .mobile-sponsors img:last-child {
        display: none;
      }

      section.aboutus {
        flex-direction: column;
      }

      section.aboutus .image {
        flex-basis: 40%;
        margin-top: 40px;
        margin-right: 0px;
      }

      section.aboutus .text h1 {
        font-size: 1.8rem;
        margin: 30px 0;
        position: relative;
      }

      section.aboutus .text p {
        line-height: 1.5;
      }

      section.services {
        flex-direction: column;
      }

      section.services .box {
        width: 90%;
        margin: 20px auto;
        padding: 40px 30px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
        border-radius: 15px;
      }

      section.illustrations .rows {
        flex-direction: column;
      }

      section.illustrations .rows .text {
        width: 90%;
        margin: 20px auto;
      }

      section.illustrations .rows .image {
        width: 90%;
      }

      .mobile-image1 {
        display: block;
        width: 90%;
      }

      .mobile-image1 img {
        width: 100%;
      }

      .mobile-image3 {
        display: block;
        width: 90%;
      }

      .mobile-image3 img {
        width: 100%;
      }

      section.illustrations .row-1 .image {
        display: none;
      }

      section.illustrations .row-1 .text h1 {
        margin-bottom: 20px;
      }

      section.illustrations .row-1 .text p {
        color: #829095;
        width: 90%;
      }

      section.illustrations .row-2 .image {
        width: 90%;
        margin-right: 0px;
      }

      section.illustrations .row-2 .text {
        width: 90%;
        text-align: center;
      }

      section.illustrations .row-3 .text {
        width: 90%;
        text-align: center;
      }

      section.illustrations .row-3 .image {
        display: none;
        width: 90%;
        margin-left: 0px;
      }

      section.illustrations .row-3 .image img {
        width: 100%;
      }

      section.download .container h2 {
        font-size: 1.6rem;
        /* width: 80%;
margin: auto; */
      }

      section.download .container h2.app {
        font-size: 1.6rem;
        margin-top: 5px;
        margin-bottom: 20px;
      }

      .images {
        /* margin-top: 20px; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 45%;
        margin: 40px auto;
      }

      .images img {
        display: block;
        margin-bottom: 10px;
      }

      section.download .container {
        position: relative;
      }

      #coming-soon {
        width: 200px;
        position: relative;
        top: 0px;
        left: 10px;
        transform: rotate(-20deg);
      }

      section.feedbacks .container .boxes {
        flex-direction: column;
      }

      section.feedbacks .container .boxes .box {
        width: 90%;
        margin: 20px 0;
      }

      section.feedbacks .container h1 {
        font-family: "PT Serif Caption", serif;
        text-align: center;
        font-size: 1.4rem;
        margin: 50px 0 10px 0;
        position: relative;
      }

      section.feedbacks .container h1::after {
        content: "";
        background-color: #06aae4;
        width: 150px;
        height: 1.5px;
        position: absolute;
        top: 40px;
        left: 90px;
      }

      footer .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
      }

      footer .container .col-1 p {
        font-size: 1.2rem;
      }

      footer .container .col-1 ul {
        display: flex;
        flex-direction: column;
        margin: auto;
      }

      footer .container .col-1 ul li {
        margin-bottom: 20px;
      }

      footer .container .col-2 h2 {
        color: #fff;
        position: relative;
        margin: 30px 0;
      }

      footer .container .col-2 h2::after {
        display: none;
      }

      footer .container .col-3 p {
        margin: 50px auto;
      }

      footer .container .col-3 .icons {
        text-align: center;
      }
    }
  }
`;
