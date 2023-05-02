import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

const WorkLink = ({
  workName,
  workHref,
  workImgSrc,
}: {
  workName: string;
  workHref: string;
  workImgSrc?: StaticImageData;
}) => {
  return (
    <Link className="relative w-full bg-black text-[#d1d1d1] hover:text-white duration-300" href={workHref}>
      {workImgSrc && (
        <div className=" relative from-[#00000000] to-[#000000] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:opacity-90">
          <Image src={workImgSrc} alt={workName}></Image>
        </div>
      )}
      <p className="absolute bottom-0 p-2 text-5xl font-bold">{workName}</p>
    </Link>
  );
};

export default WorkLink;
