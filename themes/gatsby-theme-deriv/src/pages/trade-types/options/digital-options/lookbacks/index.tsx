import React from 'react'
import { WithIntl } from 'components/localization'
import LookbacksDigitalOptionsPage from 'features/pages/options/digital/lookbacks'
import { faq_schema } from 'features/pages/options/digital/lookbacks/_faq-schema'
import ProtectedRoute from 'features/components/molecules/protected-route'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const LookBacksOptions = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return (
        <ProtectedRoute
            region={region}
            is_page_visible={region === "row"}
            component={<LookbacksDigitalOptionsPage region={region}/>}
        />
    )
}

export default WithIntl()(LookBacksOptions)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Lookbacks | Digital options contract | Deriv_t_"
        description="_t_Open a digital options contract with a Lookbacks trade type on Deriv’s trading platforms and earn payouts with accurate market predictions._t_"
        pageContext={pageContext}
    >
        <script type="application/ld+json">{JSON.stringify(faq_schema)}</script>
    </SEO>
)
