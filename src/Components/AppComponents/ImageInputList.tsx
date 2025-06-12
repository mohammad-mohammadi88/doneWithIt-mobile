import { ScrollView, StyleSheet, View } from 'react-native';
import { useRef, type FC } from 'react';
import type { Href } from 'expo-router';
import ImageInput from './ImageInput';

interface Props {
    ImageUris?: string[],
    onRemove: (uri: string) => void,
    onAdd: (uri: string) => void,
    redirectUri?: Href
}

const ImageInputList: FC<Props> = ({ ImageUris = [], onAdd, onRemove,...props }) => {
    const scrollView = useRef<ScrollView>(null);
    return (
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current?.scrollToEnd()}>
                <View style={styles.container}>
                    {ImageUris.map(uri => <View key={uri} style={styles.image}>
                        <ImageInput
                            onChangeImage={onRemove}
                            imageUri={uri}
                            {...props}
                        />
                    </View>)}
                    <ImageInput onChangeImage={onAdd} {...props} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 5,
        paddingBottom: 5
    },
    image: {
        marginRight: 10
    }
})

export default ImageInputList