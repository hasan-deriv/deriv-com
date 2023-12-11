import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useIntersectionObserver, useWindowSize } from 'usehooks-ts'
import { FluidContainer, Heading, Section, Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import {
    hero_container,
    hero_content,
    hero_content_award_img,
    hero_content_gradient,
    hero_img,
    hero_content_text,
    hero_content_btn,
} from './styles.module.scss'
import FloatingCta from './floating-cta'
import { Localize, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

export interface HomeHeroProps {
    children?: ReactNode
    className?: string
}

const HomeHero: React.FC<HomeHeroProps> = () => {
    const [visibilityPercentage, setVisibilityPercentage] = useState(100)
    const { is_eu } = useRegion()
    const ref = useRef<HTMLButtonElement | null>(null)
    const { width } = useWindowSize()
    const entry = useIntersectionObserver(ref, {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '-80px',
    })

    useEffect(() => {
        if (width < 601) {
            const targetHeight = entry?.boundingClientRect?.height
            const intersectionHeight = entry?.intersectionRect?.height
            const percentage = (intersectionHeight / targetHeight) * 100
            setVisibilityPercentage(percentage)
        }
    }, [entry?.boundingClientRect?.height, entry?.intersectionRect?.height, width])

    return (
        <>
            <Section className="h-[calc(100vh-136px)] min-h-[587px] relative isolate overflow-hidden">
                {is_eu ? (
                    <StaticImage
                        src="../../../../images/migration/home/home_hero_bg_eu.png"
                        alt="hero image"
                        className="w-full -z-10"
                        placeholder="none"
                        style={{ position: 'absolute', inset: 0 }}
                    />
                ) : (
                    <StaticImage
                        src="../../../../images/migration/home/home_hero_bg.png"
                        alt="hero image"
                        className="w-full -z-10"
                        placeholder="none"
                        style={{ position: 'absolute', inset: 0 }}
                    />
                )}

                <FluidContainer className={clsx('h-full flex flex-col relative', hero_container)}>
                    <div className={clsx('flex flex-col', hero_content)}>
                        <Heading.H1 className="text-solid-slate-50 text-500 lg:text-heading-h1">
                            <Localize translate_text="_t_Trading for anyone. Anywhere. Anytime._t_" />
                        </Heading.H1>
                        <Text
                            size="md"
                            className={clsx('text-solid-slate-50 mt-general-md', hero_content_text)}
                        >
                            <Localize translate_text="_t_Trade CFDs and Options on 1500+ instruments, all in one place with 24/7 trading and 24/7 worldwide support._t_" />
                        </Text>
                        <TradersHubCtaButton
                            ref={ref}
                            className={clsx('mt-general-2xl', hero_content_btn)}
                            variant="primary"
                            colorStyle="coral"
                        />
                    </div>
                    <div
                        className={clsx(
                            'flex mt-general-2xl pb-general-xl',
                            hero_content_award_img,
                        )}
                    >
                        <StaticImage
                            src="../../../../images/migration/home/award-1.png"
                            alt={localize('_t_Best forex spreads APAC 2023 by UF Awards_t_')}
                            width={132}
                            height={68}
                            placeholder="none"
                        />
                        <StaticImage
                            src="../../../../images/migration/home/award-2.png"
                            alt={localize('_t_Broker of the year 2023 by FinanceFeeds_t_')}
                            width={132}
                            height={68}
                            placeholder="none"
                        />
                        <StaticImage
                            src="../../../../images/migration/home/award-3.png"
                            alt={localize('_t_Most trusted broker APAC 2023 by UF Awards_t_')}
                            width={132}
                            height={68}
                            placeholder="none"
                        />
                    </div>
                    <div className={clsx('absolute inset-50 flex items-end -z-10', hero_img)}>
                        {is_eu ? (
                            <StaticImage
                                src="../../../../images/migration/home/home_hero_new_eu.png"
                                alt="hero image"
                                placeholder="none"
                            />
                        ) : (
                            <StaticImage
                                src="../../../../images/migration/home/home_hero_new.png"
                                alt="hero image"
                                placeholder="none"
                            />
                        )}
                    </div>
                </FluidContainer>
                <div className={clsx('absolute -z-10 inset-50', hero_content_gradient)}></div>
            </Section>
            <FloatingCta
                style={{
                    transform: `translateY(${visibilityPercentage - 100}%)`,
                }}
            />
        </>
    )
}

export default HomeHero
