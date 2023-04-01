import CustomHead from "@/components/CustomHead";
import Intro from "@/components/Intro";
import About from "@/components/About";
import NextSoon from "@/components/NextSoon";
import LangBtn from "@/components/LangBtn";

export default function Home() {
  return (
    <>
      <CustomHead title="Jaziel Rodriguez" />
      <LangBtn />
      <Intro />
      <About />
      <NextSoon />
    </>
  );
}
