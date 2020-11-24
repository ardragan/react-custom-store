import {TOGGLE_FAV} from '../actions/products';

const initialState = {
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
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const prodIndex = state.products.findIndex(
                p => p.id === action.payload.productId
            );

            const isSelected = !state.products[prodIndex].isSelected;

            const updatedProducts = [...state.products];

            updatedProducts[prodIndex] = {
                ...state.products[prodIndex],
                isSelected,
                qty: action.payload.qty
            };

            return {
                ...state,
                products: updatedProducts
            };
        default:
            return state;
    }
};

export default productReducer;
