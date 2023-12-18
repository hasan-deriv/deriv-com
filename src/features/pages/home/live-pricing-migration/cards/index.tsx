import React, { ReactNode, useMemo } from 'react'
import { CardSlider, LiveMarketContent } from '@deriv-com/components'
import {
    MarketForexAudusdIcon,
    MarketForexEurusdIcon,
    MarketForexGbpjpyIcon,
    MarketForexGbpusdIcon,
    MarketForexUsdcadIcon,
} from '@deriv/quill-icons'
import useLiveData from '../data-provider/useLiveData'
import { MarketName } from '../data-provider/types'
import { percentToDecimal, swiperOption } from '../utils'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'

const IconsMapper = {
    AUDUSD: <MarketForexAudusdIcon />,
    EURUSD: <MarketForexEurusdIcon />,
    GBPJPY: <MarketForexGbpjpyIcon />,
    GBPUSD: <MarketForexGbpusdIcon />,
    USDCAD: <MarketForexUsdcadIcon />,
}

const LiveMarketCard = <T extends MarketName>({
    market,
    children,
}: {
    market: T
    children: ReactNode
}) => {
    const [is_logged_in] = useAuthCheck()
    const handleSignup = useHandleSignup()

    const { data } = useLiveData(market)

    const buySellButtonClickHandler = useMemo(() => {
        return is_logged_in ? () => handleRedirectToTradersHub() : () => handleSignup()
    }, [is_logged_in])

    const livePriceData: LiveMarketContent[] = useMemo(() => {
        if (!data) return []
        return Object.keys(data).map((key, index) => ({
            id: index,
            instrumentIcon: IconsMapper[key] ?? <MarketForexAudusdIcon />,
            instrument: data[key].sym,
            changePercentage: `${data[key].chng}`,
            status: percentToDecimal(data[key].chng) >= 0 ? 'up' : 'down',
            bidPrice: `${data[key].bid}`,
            askPrice: `${data[key].ask}`,
            spread: `${data[key].sprd}`,
            onClickBuyButton: () => buySellButtonClickHandler(),
            onClickSellButton: () => buySellButtonClickHandler(),
        }))
    }, [data, buySellButtonClickHandler])

    return (
        <>
            <CardSlider
                variant="LiveMarketCard"
                swiperData={swiperOption}
                slideClasses="max-w-[286px]"
                className="w-screen !mr-[calc((-100vw+100%)/2)] lg:w-full lg:!mr-auto"
                cards={livePriceData.slice(0, 4)}
            />
            {children}
        </>
    )
}

export default LiveMarketCard
