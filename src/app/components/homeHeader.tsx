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

      <div className="text-box">
        <h1 className="heading-primary">
          <div className="heading-primary-main">Swopnil Acharya</div>
          <div className="heading-primary-sub">
            Blending Engineering Expertise with an Entrepreneurial Mindset
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HomeHeader;
