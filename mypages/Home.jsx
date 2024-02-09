import Footer from "@components/footer/Footer";
import HomeNavbar from "@components/navbar/HomeNavbar";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper className="_my_auto_scroll_v">
      {/* <HomeNavbar /> */}
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
        <header>
          <div className="container">
            <div id="nav-bar">
              <div id="safe-left">
                <a href="index.html">
                  <h2>
                    Nata<span>Guard</span>
                  </h2>
                </a>
              </div>

              <div id="safe-hbc">
                <ul>
                  <li>
                    <a href="" id="Home" onclick="change()">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                </ul>
              </div>

              <div id="safe-access">
                <ul>
                  <li id="Login">
                    <a href="/login">Login</a>
                  </li>
                  <li id="free-signup">
                    <a href="/signup">Sign up for FREE</a>
                  </li>
                </ul>
              </div>
            </div>

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

                <div id="googleplay">
                  <p id="comingsoon">Coming Soon</p>
                  <img src="media/guidance_up-arrow.svg" alt="arrow" />
                  <a
                    href="https://play.google.com/store/apps?hl=en_US&gl=US&pli=1"
                    target="_blank"
                  >
                    <img
                      id="playstore"
                      src="media/image 3.png"
                      alt="google play"
                    />
                  </a>
                </div>
              </div>

              <div className="halfcircle"></div>
            </div>
          </div>
        </header>

        <section id="sponsors">
          <img src="media/image 1.png" alt="" />
          <img src="media/image 2.png" alt="" />
          <img src="media/image 3n.png" alt="" />
          <img src="media/image 4.png" alt="" />
          <img src="media/image 5.png" alt="" />
          <img src="media/image 6.png" alt="" />
          <img src="media/image 7.png" alt="" />
        </section>

        <section id="content">
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

            <div className="download">
              <h2>
                <span>Download</span> the NataGuard app
              </h2>
              <p>(Coming soon...)</p>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="col-1">
              <h1>
                Safe<span>Bump</span>
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
                  <Link className="_full_wh" href="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="_full_wh" href="/signup">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-3">
              <p>
                <a href="/signup">Sign up for FREE</a>
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
        width: 80%;
        margin: auto;
      }

      header {
        position: relative;
      }

      header #nav-bar {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px,
          rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
      }

      header #nav-bar #safe-left {
        font-size: 1.3rem;
      }

      header #nav-bar #safe-left a {
        text-decoration: none;
        color: #000;
      }

      header #nav-bar #safe-left span {
        color: #06aae4;
      }

      header #nav-bar #safe-hbc ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      header #nav-bar #safe-hbc ul li {
        font-size: 1.1rem;
        padding: 0 40px;
        font-weight: 400;
      }

      header #nav-bar #safe-hbc ul li a {
        text-decoration: none;
        color: #829095;
      }

      header #safe-access ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
      }

      header #safe-access ul li a {
        text-decoration: none;
        color: #122025;
      }

      header #safe-access ul li#Login {
        color: #122025;
        padding-right: 30px;
        font-size: 1.1rem;
        font-weight: 600;
      }

      header #safe-access ul li#free-signup {
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

      header #safe-access ul li#free-signup a {
        color: #fff;
      }

      /* MAIN-HEADER */
      header #mheader {
        display: flex;
        justify-content: space-between;
        /* align-items: center; */
        padding: 40px 0;
        width: 90%;
        margin: auto;
        background-color: #fff;
      }

      header #mheader #text {
        flex-basis: 50%;
        width: 200px;
      }

      header #mheader #text h1 {
        font-family: "PT Serif Caption", serif;
        font-size: 2.8rem;
        font-weight: 400;
        margin-bottom: 30px;
        line-height: 1.4;
        width: 500px;
      }

      header #mheader #text h1 span {
        color: #06aae4;
        font-family: "PT Serif Caption", serif;
      }

      header #mheader #text p {
        font-size: 1.2rem;
        color: #829095;
        line-height: 1.6;
        margin: 30px 0;
      }

      header #mheader #text #googleplay {
        width: 400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* margin: 40px 0; */
      }

      header #mheader #text #googleplay #comingsoon {
        color: #ffad33;
        font-size: 1rem;
        font-weight: 600;
      }

      header #mheader #text #googleplay #playstore {
        width: 200px;
      }

      header #mheader .halfcircle {
        width: 450px;
        height: 450px;
        background-color: #f5f5f5;
        border-radius: 50%;
      }

      /* header #circle {
    width: 500px;
    height: 500px;
    margin-top: -50px;
    flex-basis: 40%;
}

header #circle img{
    width: 100%;
    height: 100%;
} */

      section#sponsors {
        display: flex;
        align-items: center;
        justify-content: space-between;
        opacity: 0.5;
        background-color: #fff;
        height: 100px;
        z-index: 1;
        flex-wrap: wrap;
      }

      section#sponsors img {
        width: 150px;
      }

      section#sponsors img:first-child {
        width: 80px;
      }

      section#sponsors img:last-child {
        width: 80px;
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
  }
`;
