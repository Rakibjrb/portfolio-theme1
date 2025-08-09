import About from "@/components/pagecomponents/home/About";
import Banner from "@/components/pagecomponents/home/Banner";

export default function Home() {
  return (
    <>
      <div id="banner">
        <Banner />
      </div>
      <div id="about">
        <About />
      </div>
    </>
  );
}
