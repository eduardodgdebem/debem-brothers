import { useRouter } from "next/router";
import RootLayout from "~/layouts/RootLayouts";

const Contact = () => {
  const router = useRouter();
  const { work } = router.query;
  return (
    <RootLayout>
      <div className="bg-dark-blue text-white p-[10vw]">
        <h1 className="text-5xl font-bold leading-[1.2]">Get in touch</h1>
        <p className="text-gray-light text-2xl">let's talk about your project.</p>
      </div>
    </RootLayout>
  );
};

export default Contact;
