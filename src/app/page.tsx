import ArchitectureDrawing from "@/components/architecture-drawing";
import ProfileHero from "@/components/profile-hero";
import ActivitySection from "@/components/activity-section";
import ExperienceSection from "@/components/experience-section";
import ProjectCaseStudy from "@/components/project-case-study";
import WritingSection from "@/components/writing-section";
import StackSection from "@/components/stack-section";
import JsonLd from "@/components/json-ld";
import { homeSchema } from "@/lib/structured-data";
import { pageMetadata, siteDescription } from "@/lib/seo";

export const metadata = pageMetadata(
  "Pradhumn Gautam — Software Engineer",
  siteDescription,
  "/",
);

export const revalidate = 3600;
export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
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
