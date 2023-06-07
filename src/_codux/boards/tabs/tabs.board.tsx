import { createBoard } from '@wixc3/react-board';
import { Tabs } from '../../../components/tabs/tabs';

export default createBoard({
    name: 'Tabs',
    Board: () => <Tabs />
});
