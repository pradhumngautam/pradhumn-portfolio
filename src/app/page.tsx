import ProfileHero from "@/components/profile-hero";
import ExperienceSection from "@/components/experience-section";
import ProjectCaseStudy from "@/components/project-case-study";
import QuoteSection from "@/components/quote-section";

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <ProfileHero />
      <ExperienceSection />
      <ProjectCaseStudy />
      <QuoteSection />
    </div>
  );
}
