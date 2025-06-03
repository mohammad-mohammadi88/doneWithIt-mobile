import { AppButton } from '../AppComponents';
import { useFormikContext } from 'formik';
import type { FC } from 'react';

interface Props { title: string }

const SubmitFormBtn: FC<Props> = ({ title }) => {
    const { handleSubmit } = useFormikContext()
    return <AppButton title={title} onPress={handleSubmit} />
}

export default SubmitFormBtn