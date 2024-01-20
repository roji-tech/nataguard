import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";

const index = () => {
  const FIELDS = [
    { name: "Username / Email Address", ph: "John Doe / johndoe@example.com" },
    { name: "Password", ph: "*****************" },
  ];
  return (
    <AuthLayout showFormTitle={false}>
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}
        <div className="otherAuthLink _flex_jce" style={{marginTop: "-20px"}}>
          <Link href={"forgot"}>Forgot Password</Link>
        </div>

        <RadioBox item={{ name: "Remember Me (Save my login info)" }} />
      </Form>
    </AuthLayout>
  );
};

export default index;
