import React from 'react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button, Text, Heading } from '@deriv/quill-design'
import { TString } from 'types/generics'
import { Localize } from 'components/localization'

type AlertButtonProps = {
    text: TString
    onClick?: React.MouseEventHandler<'button'>
}

export interface AlertProps {
    title?: TString
    description: TString
    cancel_button?: AlertButtonProps
    action_button: AlertButtonProps
}

const Alert = ({
    title = '_t_Alert_t_',
    description,
    cancel_button,
    action_button,
}: AlertProps) => {
    return (
        <AlertDialog.Root defaultOpen>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className="alert-overlay" />
                <AlertDialog.Content className="alert-content">
                    <AlertDialog.Title asChild className="AlertDialogTitle">
                        <div>
                            <Heading.H3 className="pb-600">
                                <Localize translate_text={title} />
                            </Heading.H3>
                        </div>
                    </AlertDialog.Title>
                    <AlertDialog.Description asChild className="AlertDialogDescription">
                        <div>
                            <Text>
                                <Localize translate_text={description} />
                            </Text>
                        </div>
                    </AlertDialog.Description>

                    <div className="gap-600 justify-end pt-600">
                        <AlertDialog.Cancel asChild>
                            {cancel_button && (
                                <span>
                                    <Button
                                        variant="secondary"
                                        colorStyle="black"
                                        onClick={() => cancel_button?.onClick}
                                    >
                                        <Localize translate_text={cancel_button.text} />
                                    </Button>
                                </span>
                            )}
                        </AlertDialog.Cancel>
                        <AlertDialog.Action asChild>
                            <span>
                                <Button
                                    variant="primary"
                                    colorStyle="coral"
                                    onClick={() => action_button.onClick}
                                >
                                    <Localize translate_text={action_button.text} />
                                </Button>
                            </span>
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    )
}

export default Alert
