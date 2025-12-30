import ProductsBox from '@/components/home/products-box'
import IEkKabel from '@/components/IEK/Iektk-kabel'
import Texts from '@/components/IEK/texts'
import React from 'react'

export default function page() {
  return (
    <div>
      <IEkKabel />
      <Texts />
      <ProductsBox text='Похожие товары' display={'hidden'} />
    </div>
  )
}
