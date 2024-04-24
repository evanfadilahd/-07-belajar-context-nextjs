// export const themes = {
//     'dark': {
//         background: 'black',
//         color: 'white',
//         borderColor: 'white',
//     },
//     'light': {
//         background: 'white',
//         color: 'black',
//         borderColor: 'black',
//     }
// }

type Theme = {
    background: string;
    color: string;
    borderColor: string;
};

export type Themes = {
    dark: Theme;
    light: Theme;
};

export const themes: Record<keyof Themes, Theme> = {
    dark: {
        background: 'black',
        color: 'white',
        borderColor: 'white',
    },
    light: {
        background: 'white',
        color: 'black',
        borderColor: 'black',
    },
};