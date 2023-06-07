import { createBoard } from '@wixc3/react-board';
import { SecondTab } from '../../../components/second-tab/second-tab';

export default createBoard({
    name: 'SecondTab',
    Board: () => <SecondTab />
});
