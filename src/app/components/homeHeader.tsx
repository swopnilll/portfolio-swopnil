// Import the Image component from next/image
import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="header">
      <div className="logo-wrapper">
        <Image
          src="/images/logo.png"
          alt="Website logo"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default HomeHeader;
