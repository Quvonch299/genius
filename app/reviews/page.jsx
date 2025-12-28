import ContactConsultation from '@/components/home/ContactConsultation'
import IEK from '@/components/IEK'
import RecentReviews from '@/components/Reviews/recent-reviews'
import ReviewHero from '@/components/Reviews/review-hero'
import React from 'react'

export default function page() {
  return (
    <div>
        <ReviewHero/>
        <RecentReviews/>
        <ContactConsultation/>
        {/* <IEK/> */}
    </div>
  )
}
