import React from 'react'
import { LiveMarketBlock } from '@deriv-com/blocks'
import { CustomLink } from '@deriv-com/components'
import { Text } from '@deriv/quill-design'
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons'
import LiveMarketProvider from './data-provider'
import LiveMarketCard from './cards'
import { Localize } from 'components/localization'

const LiveMarketSection = () => {
    return (
        <LiveMarketProvider>
            <LiveMarketBlock.Tab
                className="bg-background-primary-base"
                header={
                    <Localize translate_text="_t_Top trading assets & unique market indices_t_" />
                }
                tabs={[
                    { children: <Localize translate_text="_t_Forex_t_" /> },
                    { children: <Localize translate_text="_t_Derived indices_t_" /> },
                    { children: <Localize translate_text="_t_ETFs_t_" /> },
                    { children: <Localize translate_text="_t_Stocks & indices_t_" /> },
                    { children: <Localize translate_text="_t_Cryptocurrencies_t_" /> },
                    { children: <Localize translate_text="_t_Commodities_t_" /> },
                ]}
            >
                <LiveMarketCard market="fx">
                    <Text className="text-center pt-gap-3xl">
                        <Localize
                            translate_text="_t_<0>Forex at your fingertips.</0> Currency trading with major, minor, and exotic pairs. _t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <CustomLink
                        size="md"
                        href="/markets/forex/"
                        className="flex items-center justify-center pt-gap-3xl"
                    >
                        <Localize translate_text="_t_See all forex pairs_t_" />
                        <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                    </CustomLink>
                </LiveMarketCard>
                <LiveMarketCard market="der">
                    <Text className="text-center pt-gap-3xl">
                        <Localize
                            translate_text="_t_<0>Virtual markets, real opportunities.</0>Trade simulated markets, as volatile as you like._t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <CustomLink
                        size="md"
                        href="/markets/synthetic/"
                        className="flex items-center justify-center pt-gap-3xl"
                    >
                        <Localize translate_text="_t_See all derived indices pairs_t_" />
                        <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                    </CustomLink>
                </LiveMarketCard>
                <LiveMarketCard market="etfs">
                    <Text className="text-center pt-gap-3xl">
                        <Localize
                            translate_text="_t_<0>You call the stocks</0> Take a position on 1500+ stocks and indices._t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <CustomLink
                        size="md"
                        href="/markets/exchange-traded-funds/"
                        className="flex items-center justify-center pt-gap-3xl"
                    >
                        <Localize translate_text="_t_See all ETFs pairs_t_" />
                        <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                    </CustomLink>
                </LiveMarketCard>
                <LiveMarketCard market="ind">
                    <Text className="text-center pt-gap-3xl">
                        <Localize
                            translate_text="_t_<0>Mine for commodities.</0> Trade the price of precious metals and oil._t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <CustomLink
                        size="md"
                        href="/markets/stock/"
                        className="flex items-center justify-center pt-gap-3xl"
                    >
                        <Localize translate_text="_t_See all stocks & indices pairs_t_" />
                        <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                    </CustomLink>
                </LiveMarketCard>
                <LiveMarketCard market="cry">
                    <Text className="text-center pt-gap-3xl">
                        <Localize
                            translate_text="_t_<0>Ride the crypto waves.</0> 24/7 trading on the price of popular cryptocurrencies._t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <CustomLink
                        size="md"
                        href="/markets/cryptocurrencies/"
                        className="flex items-center justify-center pt-gap-3xl"
                    >
                        <Localize translate_text="_t_See all cryptocurrencies_t_" />
                        <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                    </CustomLink>
                </LiveMarketCard>
                <LiveMarketCard market="com">
                    <Text className="text-center pt-gap-3xl">
                        <Localize
                            translate_text="_t_<0>Mine for commodities.</0> Trade the price of precious metals and oil._t_"
                            components={[<strong key={0} />]}
                        />
                    </Text>
                    <CustomLink
                        size="md"
                        href="/markets/commodities/"
                        className="flex items-center justify-center pt-gap-3xl"
                    >
                        <Localize translate_text="_t_See all commodities_t_" />
                        <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                    </CustomLink>
                </LiveMarketCard>
            </LiveMarketBlock.Tab>
        </LiveMarketProvider>
    )
}

export default LiveMarketSection