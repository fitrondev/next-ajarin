import CourseHighlight from "@/components/layouts/CourseHighlight";
import GetStarted from "@/components/layouts/GetStarted";
import Hero from "@/components/layouts/Hero";
import Testimonials from "@/components/layouts/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CourseHighlight />
      <Testimonials />
      <GetStarted />
    </>
  );
};
export default HomePage;
