import { useState } from "react";
import RootLayout from "~/layouts/RootLayouts";
import { api } from "~/utils/api";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    additionalDetails: "",
  });

  const sendMail = api.mail.sendMailToSelf.useQuery(form, {
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((form) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sendMail.refetch();
  };

  return (
    <RootLayout>
      <div className="bg-dark-blue pb-20 pl-[7vw] pr-[7vw] pt-20 text-white">
        <h1 className="text-5xl font-bold leading-[1.2]">Get in touch</h1>
        <p className="text-2xl text-gray-light">
          let&apos;s talk about your project.
        </p>
      </div>
      <div className="flex min-h-[60vh] w-full justify-center bg-gray-dark ">
        <form onSubmit={onSubmit} className="w-full pl-[7vw] pr-[7vw] pt-10">
          <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(20rem,_1fr))] gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2"
              onChange={handleChange}
              value={form.name}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="p-2"
              value={form.phone}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="p-2"
              value={form.address}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              className="p-2"
              value={form.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip code"
              className="p-2"
              value={form.zipCode}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="additionalDetails"
            placeholder="Additional details"
            className="mt-4 h-[10rem] w-full p-2"
            value={form.additionalDetails}
            onChange={handleChange as any}
          ></textarea>
          <button
            type="submit"
            className="float-right mt-2 flex h-[6vh] w-[7rem] items-center justify-center bg-[#2E5BB1] text-[1.1rem] text-white duration-300 hover:bg-white hover:text-[#2E5BB1]"
          >
            Submit
          </button>
        </form>
      </div>
    </RootLayout>
  );
};

export default Page;
