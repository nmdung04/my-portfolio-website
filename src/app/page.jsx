import { ContactSection } from "@/components/home/contact-section";
import { EXPERIENCE, HERO_TAGS, NAV_ITEMS, PROJECTS, SKILLS, SOCIAL_LINKS } from "@/components/home/data";
import { AboutSection } from "@/components/home/about-section";
import { ExperienceSection } from "@/components/home/experience-section";
import { Hero } from "@/components/home/hero";
import { HomeFooter } from "@/components/home/footer";
import { ProjectsSection } from "@/components/home/projects-section";
import { SkillsSection } from "@/components/home/skills-section";
import { TopNav } from "@/components/home/top-nav";
import { TechIcons } from "@/components/ui/icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(192,132,252,0.14),_transparent_45%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 md:gap-32 md:pb-32">
        <TopNav items={NAV_ITEMS} />
        <Hero tags={HERO_TAGS} />
        <AboutSection />
        <ExperienceSection items={EXPERIENCE} />
        <ProjectsSection projects={PROJECTS} />
        <SkillsSection skills={SKILLS} />
        <ContactSection socials={SOCIAL_LINKS} />
        <HomeFooter />
        
      </div>
    </div>
  );
}
