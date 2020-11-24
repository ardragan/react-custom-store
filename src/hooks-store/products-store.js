import {initStore} from './store';

const configureStore = () => {
    const actions = {
        TOGGLE_FAV: (curState, {productId, qty}) => {
            const prodIndex = curState.products.findIndex(p => p.id === productId);

            const newFavStatus = !curState.products[prodIndex].isSelected;

            const updatedProducts = [...curState.products];

            updatedProducts[prodIndex] = {
                ...curState.products[prodIndex],
                isSelected: newFavStatus,
                qty
            };

            return {products: updatedProducts};
        }
    };
    initStore(actions, {
        products: [
            {
                id: '1',
                title: 'Paine integrala',
                description: 'Paine integrala ambalata de preferat',
                qty: 0,
                isSelected: false
            },
            {
                id: '2',
                title: 'Lapte',
                description: 'Lapte cu grasime 3.5%',
                qty: 0,
                isSelected: false
            },
            {
                id: '3',
                title: 'Cartofi dulci',
                description: 'Cartofi dulci si atat',
                qty: 0,
                isSelected: false
            },
            {
                id: '4',
                title: 'Cascaval',
                description: 'Cascaval normal nu afumat',
                qty: 0,
                isSelected: false
            }
        ]
    });
};

export default configureStore;