import { MaterialCommunityIcons } from "@expo/vector-icons"

const names = MaterialCommunityIcons.glyphMap
export type IconNamesType = keyof typeof names

export interface SelectOptionInterface {
    label: string,
    value: string
}
export interface SelectedOption {
    selectedLabel: string,
    selectedValue: string
}