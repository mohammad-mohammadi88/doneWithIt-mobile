import { useFormikContext } from 'formik';
import type { FC } from 'react';

import { AppButton } from '../AppComponents';

interface Props { title: string }

const SubmitFormBtn: FC<Props> = ({ title }) => {
    const { handleSubmit } = useFormikContext()
    return <AppButton title={title} onPress={handleSubmit} />
}

export default SubmitFormBtn