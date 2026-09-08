import SmoothReveal from "@/components/smooth-reveal";
import WorkExperience from "@/components/work-experience";
import { experience } from "@/lib/experience";

export default function ExperienceSection() {
  return (
    <SmoothReveal className="mt-14 flex w-full flex-col items-start gap-3" delay={0.15}>
      <h2 className="font-medium text-[#EEEEEE]">Experience</h2>
      <p className="mb-4 font-light text-[#B4B4B4]">
        Building dependable product infrastructure across AI, automation, and
        data-intensive applications.
      </p>
      <WorkExperience experiences={experience} />
    </SmoothReveal>
  );
}
