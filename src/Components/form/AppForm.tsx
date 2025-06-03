import { StyleSheet, View } from 'react-native';
import type { FC, ReactNode } from 'react';
import { Formik } from 'formik';

interface Props {
    onSubmit: (e: any) => void,
    validationSchema: any,
    children: ReactNode,
    initialValues: any,
}

const AppForm: FC<Props> = ({ initialValues, onSubmit, validationSchema, children }) => (
    <View style={styles.container}>
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {() => children}
        </Formik>
    </View>
)
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default AppForm