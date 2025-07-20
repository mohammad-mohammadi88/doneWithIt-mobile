import { render, screen } from '@testing-library/react-native';

import { toBeNotOnScreen, toBeOnScreen } from "@Tests/helpers.test";
import SoldOutMark from '@Components/SoldOutMark';

describe('SoldOutMark tests',() => {
    it('not sold out', () => {
        // arrange
        render(<SoldOutMark isSold={false} />)

        // assert
        toBeNotOnScreen(screen.queryByText("SOLD OUT"))
    })
    it('sold out', () => {
        // arrange
        render(<SoldOutMark isSold />)

        // assert
        toBeOnScreen(screen.queryByText("SOLD OUT"))
    })
})