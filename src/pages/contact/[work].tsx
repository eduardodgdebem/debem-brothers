import { useRouter } from "next/router";
import RootLayout from "~/layouts/RootLayouts";

const Contact = () => {
//   const router = useRouter();
  //   const { work } = router.query;
  return (
    <RootLayout>
      <div className="bg-dark-blue p-[10vw] text-white">
        <h1 className="text-5xl font-bold leading-[1.2]">Get in touch</h1>
        <p className="text-2xl text-gray-light">
          let`&apos;`s talk about your project.
        </p>
      </div>
      <div></div>
    </RootLayout>
  );
};

export default Contact;
