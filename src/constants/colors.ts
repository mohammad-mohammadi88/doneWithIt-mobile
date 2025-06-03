const colors = {
    primary: "#6394f2",
    secondary: "#fc5c65",
    medium: "#6e6969",
    light: "#efefef",
    lightGray: "#eee",
    dark:"#101010",
    gray: "oklch(87% 0 0)",
};
export type AppColorsType = keyof typeof colors

export const grayPressAction = {
    android_ripple: { color: colors.gray },
    highlightColor: colors.light,
};

export const initialPressAction = {
    android_ripple: { color: "transparent" },
    highlightColor: "transparent"
}

export default colors;
