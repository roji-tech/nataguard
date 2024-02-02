// components/Spinner.js
import { ScaleLoader } from "react-spinners";

const Spinner = ({ logo, children }) => {
  const styles = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "aliceblue",
  };
  return (
    <div className="spinner _grid_center" style={styles}>
      <div className="_flex_col_center">
        {logo}
        <ScaleLoader color="#0066ff" loading={true} />
        <br />
        {children}
      </div>
    </div>
  );
};

export default Spinner;
