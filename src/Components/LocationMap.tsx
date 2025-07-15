import { memo, useCallback, useRef, type FC } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

import type { UserLocationType } from "@Types/globals";
import Icon from "./Icon";

const LocationMap: FC<UserLocationType> = ({ latitude = 0, longitude = 0 }) => {
    const mapRef = useRef<MapView>(null);
    const initialRegion = {
        latitude,
        latitudeDelta: 0.01,
        longitude,
        longitudeDelta: 0.01,
    };
    const resetRegion = useCallback(
        () => mapRef.current?.animateToRegion(initialRegion),
        [latitude, longitude]
    );

    return (
        <View style={styles.container}>
            <MapView
                initialRegion={initialRegion}
                ref={mapRef}
                style={styles.map}
            >
                <Marker coordinate={{ latitude, longitude }} title='location' />
            </MapView>
            <Icon
                backgroundColor='rgb(0,0,0,0.5)'
                icon='target'
                iconColor='white'
                onPress={resetRegion}
                size={36}
                style={styles.resetRegion}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    map: {
        height: 200,
        width: "100%",
        borderRadius: 8,
        overflow: "hidden",
    },
    resetRegion: {
        position: "absolute",
        bottom: 5,
        right: 5,
        zIndex: 1,
    },
});

export default memo(LocationMap);
