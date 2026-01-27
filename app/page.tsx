import BannerSection from '@/components/BannerSection'
import ClientsSection from '@/components/ClientsSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import FeatureSection from '@/components/FeatureSection'
import WorkProcessSection from '@/components/WorkProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'

export default function Home() {
  return (
    <main>
      {/* Banner Section */}
      <BannerSection />
      
      {/* Clients Section */}
      <ClientsSection />
       <WhyChooseUsSection />
       <FeatureSection />
       <WorkProcessSection />
       <TestimonialsSection />
       <FAQSection />
      
      {/* Note: Other sections will be added one by one as requested */}
    </main>
  )
}