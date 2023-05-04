import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import kitchenImg from "../../public/kitchen.png";
import cabinetImg from "../../public/cabinet.png"

import WorkLink from "~/components/WorkLink";
import RootLayout from "~/layouts/RootLayouts";

const Home: NextPage = () => {
  return (
    <RootLayout>
      <main>
        <div className="relative flex h-[70vh] md:h-[90vh]">
          <div className="h-full w-full absolute -z-10">
            <div className="h-full w-full relative from-[#00000095] to-[#00000000] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:opacity-90">
              <Image
                src={kitchenImg}
                alt="kitchen"
                className="h-full w-full object-cover"
                quality={100}
              ></Image>
            </div>
          </div>
          <h1 className="text-7xl ml-8 mt-[7rem] md:ml-[10%] md:mt-[10%] md:text-[10vw]  font-bold md:leading-[10vw] text-white">
            de Bem
            <br /> Brothers.
          </h1>
          <Link href='/contact/teste' className="absolute bottom-20 right-20 text-[1.3rem] text-white bg-[#2E5BB1] h-[7vh] w-[10rem] flex items-center justify-center hover:bg-white hover:text-[#2E5BB1] duration-300">get a service</Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,_1fr))] gap-4 w-full p-5 bg-[#123758]">
          <WorkLink workName="Crown Molding" workHref="/" workImgSrc={cabinetImg}></WorkLink>
          <WorkLink workName="Base Boards" workHref="/" workImgSrc={cabinetImg}></WorkLink>
          <WorkLink workName="Kitchen Cabinets" workHref="/" workImgSrc={cabinetImg}></WorkLink>
          <WorkLink workName="Finish Carpentry" workHref="/" workImgSrc={cabinetImg}></WorkLink>
        </div>
      </main>
    </RootLayout>
  );
};

export default Home;
