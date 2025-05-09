import Title from "@/components/common/Title";
import TestimonialCard from "./TestimonialCard";

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    username: "@johndoe",
    image: "",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "John Doe",
    username: "@johndoe",
    image: "",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "John Doe",
    username: "@johndoe",
    image: "",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 md:py-10 lg:py-20">
      <div className="container space-y-5 md:space-y-10">
        <Title
          title="Testimonials"
          subtitle="Apa yang mereka katakan tentang kami?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4">
          {testimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              username={item.username}
              image={item.image}
              testimonial={item.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
