import React, { ReactNode, lazy, Suspense } from 'react'
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import {
    hero_container,
    hero_content,
    hero_content_gradient,
    hero_content_text,
    hero_content_btn,
} from './styles.module.scss'
import HeroAwardImages from './award-images'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import { isEuDomain } from 'common/utility'
const EUImage = lazy(() => import('./eu-image'))
const ROWImage = lazy(() => import('./row-image'))

export interface HomeHeroProps {
    children?: ReactNode
    className?: string
}

const HomeHero: React.FC<HomeHeroProps> = () => {
    const { is_eu } = useRegion()
    console.log('==>', isEuDomain())

    return (
        <Section className="h-[calc(100vh-136px)] min-h-[587px] relative isolate overflow-hidden">
            <StaticImage
                src="../../../../images/migration/home/home_hero_bg.png"
                alt="hero bg image"
                className="w-full -z-10"
                placeholder="none"
                formats={['auto', 'webp']}
                loading="eager"
                style={{ position: 'absolute', inset: 0 }}
            />

            <FluidContainer className={clsx('h-full flex flex-col relative', hero_container)}>
                <div className={clsx('flex flex-col mb-general-2xl', hero_content)}>
                    <Heading.H1 className="text-solid-slate-50 text-[34px] lg:text-heading-h1">
                        <Localize translate_text="_t_Trading for anyone. Anywhere. Anytime._t_" />
                    </Heading.H1>
                    {isEuDomain() ? (
                        <Text
                            size="md"
                            className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}
                        >
                            <Localize translate_text="_t_Trade CFDs and Multipliers on 1500+ instruments, all in one place with 24/7 trading and 24/7 worldwide support._t_" />
                        </Text>
                    ) : (
                        <Text
                            size="md"
                            className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}
                        >
                            <Localize translate_text="_t_Trade CFDs and Options on 1500+ instruments, all in one place with 24/7 trading and 24/7 worldwide support._t_" />
                        </Text>
                    )}

                    <TradersHubCtaButton
                        className={clsx('mt-general-2xl', hero_content_btn)}
                        variant="primary"
                        colorStyle="coral"
                    />
                </div>
                {(!isEuDomain() || !is_eu) && <HeroAwardImages />}
                <Suspense fallback={<div />}>{isEuDomain() ? <EUImage /> : <ROWImage />}</Suspense>
            </FluidContainer>
            <div className={clsx('absolute -z-10 inset-50', hero_content_gradient)}></div>
        </Section>
    )
}

export default HomeHero
