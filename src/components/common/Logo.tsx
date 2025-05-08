import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Image
        src={"/images/logoipsum.svg"}
        alt="loremipsumlogo"
        width={50}
        height={50}
        priority
        className="size-12"
      />

      <h1 className="text-2xl font-extrabold text-primary">Ajarin</h1>
    </Link>
  );
};
export default Logo;
