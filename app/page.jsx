import Brands from '@/components/home/brands'
import BuildCableBox from '@/components/home/build-cable-box'
import Compony from '@/components/home/compony'
import Compony2 from '@/components/home/compony2'
import ContactConsultation from '@/components/home/ContactConsultation'
import Hero from '@/components/home/hero'
import Map from '@/components/home/map'
import ProductsBox from '@/components/home/products-box'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <BuildCableBox/>
      <ProductsBox/>
      <Compony/>
      <Compony2/>
      <Brands/>
      <Map/>
      <ContactConsultation/>
    </div>
  )
}
