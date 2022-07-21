export const getHeadersAndParams = (objArr) => {
    let obj = {};
    objArr.forEach(data => {
        if (data.hasOwnProperty('check') && data.check) {
            obj = { ...obj, [data.key]: data.value };
        }
    })
    return obj;
}