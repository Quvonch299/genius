import Cabel from '@/components/Catalog/cabel'
import CatalogHero from '@/components/Catalog/catalog-hero'
import NewProduct from '@/components/Catalog/new-product'
import BuildCableBox from '@/components/home/build-cable-box'
import ContactConsultation from '@/components/home/ContactConsultation'
import ProductsBox from '@/components/home/products-box'
import React from 'react'

export default function Catalog() {
  return (
    <div>
      <CatalogHero />
      <Cabel />
      <NewProduct />
      <ProductsBox display={'hidden'}/>
        <ContactConsultation/>
    </div>
  )
}
