export const checkParams = (formData, jsonText, paramData, headerData, setErrorMsg) => {

    if(!formData.url) {
        setErrorMsg('Request URL is empty!');
        return false;
    }

    if(!checkValidJson(jsonText)) {
        setErrorMsg('Text is not valid json');
        return false;
    }

    return true;
}