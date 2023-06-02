import React from 'react'
import styled from 'styled-components'
import LearnMore from './_learn-more'
import MarketsCarousel from './_markets-carousel'
import { SectionContainer, Flex, Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'

type TRenderableData = {
    icon: string
    heading: string
    paragraph: string
    link: string
}
type TProps = {
    renderableData: TRenderableData[]
    mainHeading: string
}

const StyledSection = styled(SectionContainer)`
    @media ${device.tablet} {
        padding-block-end: 4.5rem;
    }
`

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        > img {
            width: 48px;
            height: 48px;
            margin: 0 0 16px;
        }
    }
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;
    font-family: Ubuntu, sans-serif;
    color: var(--color-black-9);

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`
const StyledPara = styled(Text)`
    margin-top: 1.6rem;
    font-size: 16px;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`
const StyledHeading = styled(Header)`
    font-family: Ubuntu, sans-serif;
    font-size: 48px;
    color: var(--color-black-9);
    @media ${device.tablet} {
        font-size: 24px;
        max-width: 213px;
        margin: 0 auto;
    }
`
const Card = styled.article`
    position: relative;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    height: 100%;
    padding: 24px 24px 0;
    max-width: 315px;

    @media (max-width: 680px) {
        padding: 16px 16px 36px;
        max-width: 328px;
        min-height: unset;
        margin: 0 15px;
    }

    &:hover .learn-more {
        opacity: 1;
    }
`
const MarketsItem = styled(Flex)`
    align-items: center;
    height: 100%;
    padding: 4px 0;
    margin-bottom: 2.8rem;
    position: relative;
    z-index: 2;
`
const SmallContainer = styled(Container)`
    width: 60%;
    max-width: 62.5rem;

    @media ${device.desktop} {
        max-width: 800px;
    }
    @media ${device.laptopL} {
        width: 60%;
    }
    @media ${device.desktopL} {
        max-width: 1000px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const GenericCarousel: React.FC<TProps> = ({ renderableData, mainHeading }) => {
    return (
        <StyledSection background="white" position="relative">
            <SmallContainer direction="column" ai="flex-start">
                <StyledHeading as="h3" type="section-title" mb="2.4rem" align="center">
                    {localize(`_t_${mainHeading}_t_`)}
                </StyledHeading>
            </SmallContainer>
            <MarketsCarousel>
                {renderableData.map((item, index) => (
                    <MarketsCarousel.Item key={index + 1}>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={item.icon} width="48" height="48" />

                                    <StyledText weight="bold">
                                        {localize(`_t_${item.heading}_t_`)}
                                    </StyledText>
                                </MobileCardHeader>
                                <StyledPara>{localize(`${item.paragraph}`)}</StyledPara>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to={item.link}
                                    in_trading_platforms
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                ))}
            </MarketsCarousel>
        </StyledSection>
    )
}

export default GenericCarousel