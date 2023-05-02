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
    <div className="w-full bg-black text-white">
      {workImgSrc && (
        <div className=" relative from-[#00000000] to-[#00000095] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b after:opacity-90">
          <Image src={workImgSrc} alt={workName}></Image>
        </div>
      )}
      <Link href={workHref}>{workName}</Link>
    </div>
  );
};

export default WorkLink;
