import ArchitectureDrawing from "@/components/architecture-drawing";
import ProfileHero from "@/components/profile-hero";
import ActivitySection from "@/components/activity-section";
import ExperienceSection from "@/components/experience-section";
import ProjectCaseStudy from "@/components/project-case-study";
import WritingSection from "@/components/writing-section";
import StackSection from "@/components/stack-section";

export const revalidate = 3600;
export default function Home() {
  return (
    <>
      <ArchitectureDrawing />
      <div className="sheet-sections">
        <ProfileHero />
        <ActivitySection />
        <ExperienceSection />
        <ProjectCaseStudy />
        <WritingSection />
        <StackSection />
      </div>
    </>
  );
}
