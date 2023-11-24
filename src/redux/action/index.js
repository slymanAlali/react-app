// for Add to Item to cart



export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// for Add to Item to cart

export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}