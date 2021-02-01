/** Libraries */
import { createContext } from 'react';

/** Data */
import SHOP_DATA from './shop.data';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;
