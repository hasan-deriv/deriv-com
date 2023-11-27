import { Features } from '@deriv-com/blocks'
import React from 'react'
import { CardContent } from '@deriv-com/components'
import {
    IllustrativeCfdsIcon,
    IllustrativeMultipleMarketsIcon,
    IllustrativeOptionsIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Illustrative'
import { localize } from 'components/localization'

const cards: CardContent[] = [
    {
        header: localize('_t_CFDs_t_'),
        description: localize(
            '_t_Trade with leverage, unbeatable spreads, and fast execution on the widest range of markets._t_',
        ),
        icon: <IllustrativeCfdsIcon iconSize="md" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Options_t_'),
        description: localize(
            '_t_Trade diverse vanilla and exotic options across platforms and markets without risking more than your initial stake._t_',
        ),
        icon: <IllustrativeOptionsIcon iconSize="md" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
    {
        header: localize('_t_Multipliers_t_'),
        description: localize(
            '_t_Trade on global financial markets and multiply your potential profit without losing more than your stake._t_',
        ),
        icon: <IllustrativeMultipleMarketsIcon iconSize="md" />,
        align: 'start',
        color: 'light',
        size: 'md',
        link: {
            content: localize('_t_Learn more_t_'),
            href: '/',
        },
    },
]

const TradeTypeSection = () => {
    return (
        <Features.Card
            title={localize('_t_Trade CFDs, Options, or Multipliers_t_')}
            cols="three"
            cards={cards}
        />
    )
}

export default TradeTypeSection