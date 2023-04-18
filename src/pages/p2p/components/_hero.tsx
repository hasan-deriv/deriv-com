import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import P2PLogo from 'images/svg/p2p/p2p-banner-logo.svg'
import CommonHeaderSection from 'components/elements/common-header-section'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import Shape from 'components/custom/_hero-shape'
import { Container } from 'components/containers'

const ImageStyle = styled.div`
    z-index: 1;
    max-width: 843px;
    width: inherit;

    @media ${device.tablet} {
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    padding: 64px 0 0;
    justify-content: end;
    width: 100%;
    align-items: end;
    flex: 1 1 0%;
`

const BackgroundStyle = styled.div`
    background-color: var(--color-white);
    flex: 1;
    height: 90vh;
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
`
const ContentWrapperStyle = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    max-width: 45%;
    @media ${device.tablet} {
        max-width: 100%;
    }
`
const HeroImageWrapper = styled.div`
    width: 55%;
    position: absolute;
    right: 0;
    height: 100%;

    @media ${device.tablet} {
        width: 100%;
        position: relative;
    }
`

const Content = styled.div`
    max-width: 632px;
    width: 100%;
    display: flex;
    gap: 30px;
    flex-direction: column;
    overflow-wrap: break-word;

    @media ${device.tablet} {
        padding: 0 16px 40px;
    }
`
const StyledTradingLogin = styled.img`
    width: 250px;
    height: 64px;

    @media ${device.tablet} {
        width: 119px;
        height: 32px;
    }
`
const StyledContainer = styled(Container)`
    @media ${device.tablet} {
        flex-direction: column-reverse;
        justify-content: center;
        margin: 0;
        width: 100%;
    }
`
const DCommonBanner = () => {
    const { is_mobile } = useBreakpoints()
    return (
        <BackgroundStyle>
            <StyledContainer jc="flex-start">
                <ContentWrapperStyle>
                    <Content>
                        <StyledTradingLogin src={P2PLogo} />
                        <CommonHeaderSection
                            title="_t_Hassle-free deposits and withdrawals_t_"
                            subtitle="_t_Use your local currency to make deposits into and withdrawals from your Deriv account._t_"
                            title_font_size={`${is_mobile ? 32 : 80}px`}
                            subtitle_font_size={`${is_mobile ? 18 : 24}px`}
                            line_height="1.25"
                            line_height_subtitle="1.5"
                            margin_title="0 0 8px"
                            color="#414652"
                        />
                    </Content>
                </ContentWrapperStyle>
                <HeroImageWrapper>
                    <Shape angle={is_mobile ? 101 : 163} width="60%">
                        <ImageWrapper>
                            <ImageStyle>
                                <StaticImage
                                    src="../../../images/common/p2p/p2p_hero_img.png"
                                    loading="eager"
                                    alt="Banner"
                                />
                            </ImageStyle>
                        </ImageWrapper>
                    </Shape>
                </HeroImageWrapper>
            </StyledContainer>
        </BackgroundStyle>
    )
}

export default DCommonBanner
