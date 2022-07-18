import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Banner: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex content-center justify-center justify-self-end flex-col pr-12">
        <p className="text-xl pb-2">Hi, I am Ian.</p>
        <p className="text-xl pb-2">Keep Curiosity Alive</p>
      </div>
      <div className="flex items-center	justify-start">
        <StaticImage
          src="../../content/images/banner.png"
          alt="ian and hippo"
          width={240}
        />
      </div>
    </div>
  );
};

export default Banner;
