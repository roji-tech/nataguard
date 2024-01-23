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
      showFormTitle={true}
      headerText="Sign Up"
      headerDesc="Create a FREE account in seconds."
      login={false}
      btnText="Sign Up"
      handleSubmit={() => router.push("/dashboard")}
    >
      <Form>
        {FIELDS.map((item) => (
          <InputBox item={item} />
        ))}

        <RadioBox
          item={{
            name: "Subscribe to our Newsletter",
            radio_name: "sub_radio",
          }}
        />

        <div className="otherAuthLink _flex_jce">
          <Link href={"/login"}>Login</Link>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default index;
