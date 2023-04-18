import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'

const content = [
    {
        header: <Localize translate_text="21,000+" />,
        text: <Localize translate_text="active users" />,
    },
    {
        header: <Localize translate_text="12M+ USD" />,
        text: <Localize translate_text="exchanged to date" />,
    },
]

const StyledSection = styled(SectionContainer)`
    padding-block: 40px;
`
const StyledRow = styled(Flex)`
    gap: 143px;
`

const ClientCard = styled.article`
    text-align: center;
`

const StyledText = styled(Header)`
    font-family: 'Ubuntu', sans-serif;
`

const Numbers = () => (
    <StyledSection>
        <StyledRow tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
            {content.map((item, idx) => {
                return (
                    <ClientCard key={idx}>
                        <Header mb="0.8rem" as="h3" type="heading-2" color="black-9" align="center">
                            {item.header}
                        </Header>
                        <StyledText
                            as="p"
                            type="paragraph-1"
                            weight="400"
                            color="black-9"
                            align="center"
                        >
                            {item.text}
                        </StyledText>
                    </ClientCard>
                )
            })}
        </StyledRow>
    </StyledSection>
)

export default Numbers
