export const TOGGLE_FAV = 'TOGGLE_FAV';

export const toggleFav = ({productId, qty}) => {
    return {type: TOGGLE_FAV, payload: {productId, qty}};
};