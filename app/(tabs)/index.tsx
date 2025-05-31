import AppScreen from '@Screens/AppScreen';
// import WelcomeScreen from '@Screens/WelcomeScreen';
// import MessagesScreen from '@Screens/MessagesScreen';
// import ViewImageScreen from '@Screens/ViewImageScreen';
// import AccountScreen from '@Screens/AccountScreen';
// import ListingDetailsScreen from '@Screens/ListingDetailsScreen';
// import ListingsScreen from '@Screens/ListingsScreen';
import { useState, type FC } from 'react';
import AppPicker from '@Components/AppPicker';
import { Text } from 'react-native';

export interface SelectOptionInterface {
    label: string,
    value: string
}
const selectOptions: SelectOptionInterface[] = [
    {
        label: "Furniture",
        value: "value 1"
    },
    {
        label: "Chairs",
        value: "value 2"
    },
    {
        label: "school",
        value: "value 3"
    }
]
export interface SelectedOption {
    selectedLabel: string,
    selectedValue: string
}
const Index: FC = () => {
    const [ value, setValue ] = useState<SelectedOption>({ selectedLabel: "", selectedValue: "" })
    console.log("🚀 ~ value:", value)
    return (<>
        <AppPicker
            value={value}
            setValue={setValue}
            selectOptions={selectOptions}
            placeholder='Category'
        />
        <Text>{value.selectedValue}</Text>
    </>)
}

export default Index 