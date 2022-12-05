const checkValidJson = (text) => {
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
        replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
        replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            return true;
    }else{
        return false;
    }
}

export const CheckParam = ({formdata,paramdata,headerdata,jsonText,seterrmsg}) => {
   if(!formdata.Url){
        seterrmsg("Request url not Missing")
       return false;
   }
   if(!checkValidJson(jsonText)) {
    // setErrorMsg('Text is not valid json');
    seterrmsg("Text is not valid json")
    return false;
}

return true;
}

