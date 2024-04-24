'use client'
import { ThemeContext } from "@/app/utilities/context/mycontext";
import { themes, Themes } from "@/app/utilities/themes/mythemes";
import { useEffect, useState } from "react"
import Navbar from "./navbar";
import { getTheme, saveTheme } from '@/app/utilities/themes/savethemes';

export default function MyApp ({ Component, pageProps }: {Component: any, pageProps: any}) {

    // const [theme, setTheme] = useState(themes.light);

    // FIX

    const [theme, setTheme] = useState<keyof Themes>(getTheme());

    useEffect(() => {
        const currentTheme = themes[theme];
        document.body.style.backgroundColor = currentTheme.background;
        document.body.style.color = currentTheme.color;
    }, [theme]);

    const toggleTheme = () => {
        // setTheme(theme === themes.dark ? themes.light : themes.dark);
        // FIX
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        saveTheme(newTheme);
    };

    //FIX di dark theme
    const root = document.documentElement;
    root.style.setProperty('--border-color', themes['dark'].borderColor);

    return (
        // <ThemeContext.Provider value={{ theme, toggleTheme }}>
        //     <div
        //         style={{
        //             width: '100%',
        //             minHeight: '100vh',
        //             ...theme,
        //         }}>
        //         <Navbar />
        //         <Component {...pageProps}/>
        //     </div>
        // </ThemeContext.Provider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: themes[theme].background,
                    color: themes[theme].color,
                }}
            >
                <Navbar />
                <Component {...pageProps} />
            </div>
        </ThemeContext.Provider>
    )
}