import { SectioniImage } from "./sections/section-image";
import { SectionNewsletter } from "./sections/section-newsletter";
import { SectionNumbers } from "./sections/section-numbers";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-10"
    >
      <section className="flex-1">
        <SectionNewsletter />
      </section>

      <section className="flex-1 hidden-fullscreen">
        <SectioniImage />
      </section>

      <section className="flex-1">
        <SectionNumbers />
      </section>
    </section>
  );
};
