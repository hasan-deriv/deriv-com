import React, { ComponentProps } from 'react'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

type FloatingCtaProps = ComponentProps<'div'>

const FloatingCta = (props: FloatingCtaProps) => {
    return (
        <div
            className="fixed left-50 w-full z-40 h-[68px] backdrop-blur-xl flex justify-center items-center lg:hidden"
            {...props}
        >
            <TradersHubCtaButton variant="primary" colorStyle="coral" />
        </div>
    )
}

export default FloatingCta
