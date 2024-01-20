import Footer from "@components/footer/Footer";
import HomeNavbar from "@components/navbar/HomeNavbar";
import Head from "next/head";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <HomeNavbar />
      {/* <Footer /> */}
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SAFEBUMP - LANDING PAGE</title>
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
                    Safe<span>Bump</span>
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
                    <a href="signin.html">Login</a>
                  </li>
                  <li id="free-signup">
                    <a href="signup.html">Sign up for FREE</a>
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
                  SafeBump, your personalized pregnancy companion, uses machine
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
                SafeBump, your personalized pregnancy companion, uses machine
                learning to predict potential complications and guide you toward
                a healthy pregnancy.
                <br /> <br />
                SafeBump, your personalized pregnancy companion, uses machine
                learning to predict potential complications and guide you toward
                a healthy pregnancy. SafeBump, your personalized pregnancy
                companion, uses machine learning to predict potential
                complications and guide you toward a healthy pregnancy.
              </p>
            </div>

            <div className="second-row">
              SafeBump, your personalized pregnancy companion, uses machine
              learning to predict potential complications and guide you toward a
              healthy pregnancy. SafeBump, your personalized pregnancy
              companion, uses machine learning to predict potential
              complications and guide you toward a healthy pregnancy. SafeBump,
              your personalized pregnancy companion, uses machine learning to
              predict potential complications and guide you toward a healthy
              pregnancy.
            </div>

            <div className="download">
              <h2>
                <span>Download</span> the SafeBump app
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
            &copy; Copyright 2024 | <span>SafeBump</span> by MASL FUTA
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
  }
`;
