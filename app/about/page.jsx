import AboutHero from '@/components/About/about-hero'
import Brands from '@/components/home/brands'
import Compony from '@/components/home/compony'
import Compony2 from '@/components/home/compony2'
import ContactConsultation from '@/components/home/ContactConsultation'
import React from 'react'

export default function About() {
  return (
    <div>
      <AboutHero />
      <Compony />
      <Compony2 />
      <Brands />
      <ContactConsultation />
    </div>
  )
}
