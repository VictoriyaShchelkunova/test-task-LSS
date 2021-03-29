export const stringLengthFilter = (number, list) => {
    const filter = +number;
    
    return list.filter(itemList => itemList.length > filter);
}