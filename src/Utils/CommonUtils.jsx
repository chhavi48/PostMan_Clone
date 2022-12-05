const checkValidJson = (text) => {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}

export const checkParams = (formdata, jsonText, paramData, headerData, setErrorMsg) => {

    if(!formdata.url) {
        setErrorMsg('Request URL is empty!');
        return false;
    }

    if(!checkValidJson(jsonText)) {
        setErrorMsg('Text is not valid json');
        return false;
    }

    return true;
}
