import type { FormikOnSubmit } from "@Types/Forms";
import { StyleSheet, View } from "react-native";
import type { FC, ReactNode } from "react";
import { Formik } from "formik";

interface Props {
    onSubmit: FormikOnSubmit;
    validationSchema: any;
    children: ReactNode;
    initialValues: any;
}

const AppForm: FC<Props> = ({ children, ...props }) => (
    <View style={styles.container}>
        <Formik {...props}>{() => children}</Formik>
    </View>
);
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default AppForm;
