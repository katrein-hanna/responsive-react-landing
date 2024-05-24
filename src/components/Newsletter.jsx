import React from "react";
import Banner from "../shared/Banner";
import BannerImg from "../assets/newsletter.png";

function Newsletter() {
  return (
    <>
      <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        <Banner
          banner={BannerImg}
          heading="Each student can shar their discount code for freinds"
          subheading="a simple paragraph orem ipsum dolor sit amet consectetur adipisicing, is called the 'topic sentence'"
          btn1={"I have a code"}
          btn2={""}
        />
      </div>
    </>
  );
}

export default Newsletter;
