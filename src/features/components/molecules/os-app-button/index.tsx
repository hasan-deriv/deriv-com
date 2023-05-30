import React from 'react'
import { app_text } from './styles.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Image from 'features/components/atoms/image'
import Typography from 'features/components/atoms/typography'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'
import { LinkUrlType } from 'features/types'
import { FlexBoxProps } from 'features/components/atoms/flex-box/box'

export type OsAppType = {
    icon_src: string
    text: TString
    url: LinkUrlType
    smallText?: TString
}

interface OsAppButtonProps extends FlexBoxProps<'div'> {
    item: OsAppType
}

const OsAppButton = ({ item, ...rest }: OsAppButtonProps) => {
    return (
        <Flex.Box align="center" {...rest}>
            <Image src={item.icon_src} alt={item.text} width={32} height={32} />
            <Link pl="3x" url={item.url} no_hover>
                {item?.smallText && (
                    <Typography.Paragraph textcolor="white" size="xxs">
                        <Localize translate_text={item.smallText} />
                    </Typography.Paragraph>
                )}
                <Typography.Paragraph textcolor="white" size="large" className={app_text}>
                    <Localize translate_text={item.text} />
                </Typography.Paragraph>
            </Link>
        </Flex.Box>
    )
}

export default OsAppButton
