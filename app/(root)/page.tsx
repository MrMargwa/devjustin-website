import AboutBlock from "@/components/AboutBlock";
import HeroBlock from "@/components/HeroBlock";
import SkillsBlock from "@/components/SkillsBlock";
import { HeroData, SkillsData, AboutData } from "@/data/data";

export default function HomePage() {
  return (
    <>
      <HeroBlock data={HeroData} />

      <SkillsBlock skills={SkillsData} />

      <AboutBlock data={AboutData} />
      {/* <Projectslock /> */}
      {/* <ContactBlock /> */}
    </>
  );
}
