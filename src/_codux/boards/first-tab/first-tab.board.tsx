import { createBoard } from '@wixc3/react-board';
import { FirstTab } from '../../../components/first-tab/first-tab';

export default createBoard({
    name: 'FirstTab',
    Board: () => <FirstTab />,
    environmentProps: {
        canvasWidth: 316,
        canvasHeight: 228,
    },
});
