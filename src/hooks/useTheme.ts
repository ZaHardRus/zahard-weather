import {useEffect} from "react";

export const useTheme = (theme: any) => {
    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement
        root.style.setProperty(`--body-background-default`, `var(--body-background-${theme})`)
        root.style.setProperty(`--content-background-default`, `var(--content-background-${theme})`)
        root.style.setProperty(`--card-background-default`, `var(--card-background-${theme})`)
        root.style.setProperty(`--color-default`, `var(--color-${theme})`)
    }, [theme])
}