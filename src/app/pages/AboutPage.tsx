import { TeamSection } from '../components/TeamSection';
import { StatsSection } from '../components/StatsSection';
import { ProcessSection } from '../components/ProcessSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { CTASection } from '../components/CTASection';

export function AboutPage() {
  return (
    <div className="pt-32">
      <TeamSection />
      <StatsSection />
      <ProcessSection />
      <ProjectsSection />
      <CTASection />
    </div>
  );
}
