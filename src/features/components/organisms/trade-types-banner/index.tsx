import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { banner_wrap, image_wrap } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'

const TradeTypesBanner = () => {
    return (
        <Flex.Box container="fixed" className={banner_wrap} justify="center" align="center">
            <div className={image_wrap}>
                <StaticImage
                    src="../../../../images/common/trade-types/hero-patterns.png"
                    alt="Banner Patter"
                    loading="eager"
                    layout="fullWidth"
                />
            </div>
            <Container.Fluid>
                <Typography.Heading as="h1" size="large" align="center">
                    Heading
                </Typography.Heading>
            </Container.Fluid>
        </Flex.Box>
    )
}

export default TradeTypesBanner
