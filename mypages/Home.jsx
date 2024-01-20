import Footer from "@components/footer/Footer";
import HomeNavbar from "@components/navbar/HomeNavbar";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Wrapper>
      <HomeNavbar />
      {/* <Footer /> */}
    </Wrapper>
  );
};

export default HomePage;

const Wrapper = styled.div`
  &&& {
    background: #fff;
  }
`;
