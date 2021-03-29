export const substringFilter = (str, list, doesCaseSensitive) => {
    if(!doesCaseSensitive){
        const substr = str.toLowerCase();

        return list.filter(itemList => itemList.toLowerCase().includes(substr));
    }
       
    return list.filter(itemList => itemList.includes(str));
}