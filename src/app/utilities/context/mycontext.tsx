import { create } from "domain";
import { createContext, useEffect, useState } from "react";
import { themes } from "../themes/mythemes";

export const LevelContext = createContext(0);

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
