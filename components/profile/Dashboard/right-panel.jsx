
import Lichnicabenet from '@/app/profile/lichnicabenet/page';
import Lovly from '@/app/profile/lovly/page';
import Nastroyca from '@/app/profile/nastroyca/page';
import Shop from '@/app/profile/shop/page';
import Zakas from '@/app/profile/zakas/page';
import React from 'react'
export default function RightPanel({ step = 0 }) {
    const renderContent = () => {
        switch (step) {
            case 0:
                return <Lichnicabenet />
            case 1:
                return <Shop />
            case 2:
                return <Lovly />
            case 3:
                return<Zakas/>
            case 4:
                return <Nastroyca />
            default:
                return <Lichnicabenet />
        }
    }

    return (
        <div className='mt-[80px]'>

            {renderContent()}
        </div>
    )
}
