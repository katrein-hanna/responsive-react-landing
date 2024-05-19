import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

function Home() {
  return (
    <>
      <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
        <Banner
          banner={banner}
          heading={"Develop your skills without diligence"}
          subheading={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilisunde inventore, ea odio officia autem, blanditiis placeat tempore asperiores vel omnis itaque."
          }
          btn1={"Get Started"}
          btn2={"Discount"}
        />
      </div>
    </>
  );
}

export default Home;
