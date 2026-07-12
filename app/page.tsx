import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { StatsSection } from '@/components/stats-section'
import { InstructorSection } from '@/components/instructor-section'
import { AudienceExperience } from '@/components/audience-experience'
import { HowItWorks } from '@/components/how-it-works'
import { ClassMaterials } from '@/components/class-materials'
import { LearningReport } from '@/components/learning-report'
import { TrialSection } from '@/components/trial-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <InstructorSection />
        <AudienceExperience />
        <HowItWorks />
        <ClassMaterials />
        <LearningReport />
        <TrialSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  )
}
