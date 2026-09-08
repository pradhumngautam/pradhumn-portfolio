import ProfileHero from "@/components/profile-hero";
import ExperienceSection from "@/components/experience-section";

export default function Home() {
  return (
    <div className="flex flex-col items-start">
      <ProfileHero />
      <ExperienceSection />
    </div>
  );
}
