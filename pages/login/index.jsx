import { AuthLayout, Form, InputBox, RadioBox } from "@layouts/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  const FIELDS = [
    { name: "Username / Email Address", ph: "John Doe / johndoe@example.com" },
    { name: "Password", ph: "*****************", type: "password" },
  ];

  return (
    <AuthLayout
      showFormTitle={false}
      handleSubmit={() => router.push("/dashboard")}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}
        <div className="otherAuthLink _flex_jce" style={{ marginTop: "-20px" }}>
          <Link href={"forgot"}>Forgot Password</Link>
        </div>

        <RadioBox
          item={{
            name: "Remember Me (Save my login info)",
            radio_name: "remember_radio",
          }}
        />
      </Form>
    </AuthLayout>
  );
};

export default index;
