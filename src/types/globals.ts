import { MaterialCommunityIcons } from "@expo/vector-icons";

const names = MaterialCommunityIcons.glyphMap;
export type IconNamesType = keyof typeof names;

export interface SelectOptionInterface {
    item: {
        label: string;
        icon?: {
            backgroundColor: string;
            icon: IconNamesType;
            iconColor?: string;
        };
    };
    value: number;
}
export interface SelectedOption {
    selectedIcon: IconNamesType;
    selectedLabel: string;
    selectedValue: number;
}

export type LocationType = Record<
    "longitude" | "latitude",
    number | undefined
>;

export type UserLocationType = LocationType | undefined