export const checkFilterStringValid = (string) => {
    const filterString = string.trim();

    const regExpNumber = /^[0-9]+$/;
    const regExpString = /^[A-Za-zА-Яа-я]+$/;

    let isNumber = regExpNumber.test(filterString);
    let isString = regExpString.test(filterString);

    if (!isNumber && !isString){
        alert("Please, write valid filter.");
        return;
    }        

    return {
        isNumber,
        isString
    }
}