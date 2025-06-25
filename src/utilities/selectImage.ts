import * as ImagePicker from "expo-image-picker";

const selectImage = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        quality: 0.5,
    });
    return {
        assets: !canceled ? assets[0] : { uri: "", mimeType: 'image/jpeg' },
        canceled,
    };
};

export default selectImage;
