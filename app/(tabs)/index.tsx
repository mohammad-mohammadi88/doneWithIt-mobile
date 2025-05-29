import AppScreen from '@Screens/AppScreen';
import WelcomeScreen from '@Screens/WelcomeScreen';
import MessagesScreen from '@Screens/MessagesScreen';
import ViewImageScreen from '@Screens/ViewImageScreen';
import AccountScreen from '@Screens/AccountScreen';
import ListingDetailsScreen from '@Screens/ListingDetailsScreen';
import type { FC } from 'react';

const Index: FC = () => <AppScreen><AccountScreen /></AppScreen>

export default Index 


// import Card from '@Components/Card';
// import type { FC } from 'react';
// import { StyleSheet, View } from 'react-native';

// const Index :FC = () => {
//     return (
//         <View style={styles.container}>
//             <Card
//                 image={require('@Images/sampleCardImage.png')}
//                 title='Red jacket for sale'
//                 subTitle='$100'
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor: "rgb(235,235,235)",
//         padding: 20,
//         paddingTop: 100
//     }
// })

// export default Index