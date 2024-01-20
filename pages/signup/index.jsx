import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const FIELDS = [
    { name: "Names", ph: "John Doe" },
    { name: "Email Address", ph: "johndoe@example.com" },
    { name: "Password", ph: "*****************" },
    { name: "Confirm Password", ph: "*****************" },
    { name: "Due Date", ph: "Dec 23, 2024" },
  ];

  return (
    <AuthLayout
      showFormTitle={false}
      headerText="Sign Up"
      headerDesc="Create a FREE account in seconds."
      login={false}
      btnText="Continue"
      handleSubmit={() => router.push("/signup/page2")}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}

        <div className="otherAuthLink _flex_jce">
          <Link href={"/login"}>Login</Link>
        </div>

        {/* <RadioBox item={{ name: "Remember Me (Save my login info)" }} /> */}
      </Form>
    </AuthLayout>
  );
};

export default index;
