
import './App.css'
import BlogSection from './components/BlogSection/BlogSection'
import ChefsSection from './components/ChefSection/ChefSection'
import Hero from './components/Hero/Hero'
import OpeningHours from './components/OpeningHours/OpeningHours'
import PopularCategories from './components/PopularCategory/PopularCategory'
import PromotionSection from './components/PromotionSection/PromotionSection'
import RootLayout from './components/RootLayout/RootLayout'
import ServiceSection from './components/Servcies/Services'
import SpecialsMenu from './components/SpecialMenu/SpecialsMenu'



function App() {


  return (
    <RootLayout>
    <div>
   <Hero />
   <PopularCategories />
   <ServiceSection />
   <PromotionSection />
   <SpecialsMenu />
   <OpeningHours />
   <ChefsSection />
   <BlogSection />

    </div>
    </RootLayout>
  )
}

export default App
