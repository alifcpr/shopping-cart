const shorte = (dataname) => {
    const dataNameSplitted = dataname.split(" ");
    const res = `${dataNameSplitted[0]} ${dataNameSplitted[1]}`
    return res
}

const isInCart = (state , id) => {
    const item = !!state.selectedItems.find(item => item.id === id);
    return item;
}

const qunatityCount = (state , id) => {
    const index = state.selectedItems.findIndex(item => item.id === id);
    
    if (index === -1){
        return false
    }

    else {
        return state.selectedItems[index].quantity;
    }
}

export {shorte , qunatityCount , isInCart}