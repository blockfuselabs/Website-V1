import Hero from '@/app/(marketing)/home/_components/Hero'
import ProgramPaths from '@/app/(marketing)/home/_components/ProgramPaths'
import CoreReality from '@/app/(marketing)/home/_components/CoreReality'
import ForStudentsAndOrgs from '@/app/(marketing)/home/_components/ForStudentsAndOrgs'
import HowItWorks from '@/app/(marketing)/home/_components/HowItWorks'
import EventsAndOpenSource from '@/app/(marketing)/home/_components/EventsAndOpenSource'
import CohortShowcase from '@/app/(marketing)/home/_components/CohortShowcase'
import About from '@/app/(marketing)/home/_components/About'
import FinalCTA from '@/app/(marketing)/home/_components/FinalCTA'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProgramPaths />
      <CoreReality />
      <ForStudentsAndOrgs />
      <HowItWorks />
      <EventsAndOpenSource />
      <CohortShowcase />
      <About />
      <FinalCTA />
    </div>
  )
}
