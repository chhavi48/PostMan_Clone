import axios from "axios";
import { getHeadersAndParams } from "../Utils/CommonUtils";

export const getData = async (formdata, jsonText, paramdata, headerdata) => {
    
    const apiType = formdata.type.toLowerCase(); 
    const apiUrl = formdata.url;
    const apiHeaders = getHeadersAndParams(headerdata);
    const apiParams = getHeadersAndParams(paramdata);


    try{
        return await axios({
            method: apiType,
            url: apiUrl,
            body: jsonText,
            headers: apiHeaders,
            params: apiParams
        })


    }catch(error){
        console.log("Error while calling the API data",error);
        return 'error';
    }
}