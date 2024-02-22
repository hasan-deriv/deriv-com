import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useUpdateEffect } from 'usehooks-ts'
import { isLoggedIn } from 'common/utility'

const useAuthCheck = () => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const [is_auth_checked, setIsAuthChecked] = useState(false)
    const checkCookieInterval = useRef<NodeJS.Timeout>()

    useLayoutEffect(() => {
        setLoggedIn(isLoggedIn())
    }, [])

    useUpdateEffect(() => {
        setIsAuthChecked(true)
        checkCookieInterval.current = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieInterval.current)
    }, [])

    useEffect(() => {
        if (is_logged_in) {
            clearInterval(checkCookieInterval.current)
        }
    }, [is_logged_in])

    return [is_logged_in, is_auth_checked]
}

export default useAuthCheck
