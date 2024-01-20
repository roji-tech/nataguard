import { AuthLayout, Form, InputBox } from "@layouts/AuthLayout";
import Link from "next/link";

const index = () => {
  const FIELDS = [{ name: "Pin", ph: "000000" }];
  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Forgot Password"
      headerDesc="Retrieve your password."
      btnText="Verify"
      showSocials={false}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}
        <div className="otherAuthLink _flex_jce" style={{ marginTop: "-20px" }}>
          <Link href={"/login"}>Login</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
