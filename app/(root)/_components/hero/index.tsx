import { SectioniImage } from "./sections/section-image";
import { SectionNewsletter } from "./sections/section-newsletter";
import { SectionNumbers } from "./sections/section-numbers";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto grid grid-cols-1 lg:grid-cols-3 w-full gap-10"
    >
      <section className="flex-1">
        <SectionNewsletter />
      </section>
      <section className="flex-1">
        <SectioniImage />
      </section>
      <section className="flex-1">
        <SectionNumbers />
      </section>
    </section>
  );
};
