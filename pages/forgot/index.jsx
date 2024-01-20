import { AuthLayout, Form, InputBox } from "@layouts/AuthLayout";
import Link from "next/link";

import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const FIELDS = [{ name: "Email Address", ph: "johndoe@example.com" }];
  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Forgot Password"
      headerDesc="Retrieve your password."
      btnText="Send Retrieval Code"
      showSocials={false}
      handleSubmit={() => router.push("/forgot/pin")}
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
