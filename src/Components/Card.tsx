import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '@Constants/colors';
import type { FC } from 'react';
import defaultStyles from '@/constants/styles';

interface Props{
    title: string;
    subTitle: string;
    image: any
}

const Card :FC<Props> = ({title,subTitle,image}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginBottom: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        overflow:"hidden"
    },
    image:{
        width: "100%",
        height: 200,
    },
    infoContainer:{
        padding: 20
    },
    title:{
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 7,
        fontFamily: defaultStyles.font.fontFamily,
    },
    subTitle:{
        color: colors.primary,
        fontSize: 20,
        fontWeight: 600,
        fontFamily: defaultStyles.font.fontFamily,
    }
})

export default Card