import React from 'react'
import { Features } from '@deriv-com/blocks'
import { EUCards, RowCards } from './data'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'

const StartTradingSteps = () => {
    const { is_eu } = useRegion()
    return (
        <Features.Card
            title={localize('_t_Start trading in 3 simple steps_t_')}
            cta={<TradersHubCtaButton className="hidden lg:block" />}
            cols="three"
            variant="ContentTop"
            cards={is_eu ? EUCards : RowCards}
        />
    )
}
export default StartTradingSteps
