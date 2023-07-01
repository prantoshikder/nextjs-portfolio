import AboutUs from "@/components/AboutUs";
import HeroContent from "@/components/HeroContent";
import Project from "@/components/Project";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <>
      <Container>
        <HeroContent />
        <AboutUs />
        <Project />
      </Container>
    </>
  );
}
