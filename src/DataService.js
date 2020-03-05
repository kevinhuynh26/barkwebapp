import axios from "axios";
//5e607d8509c313436a69ff9a
const apiBark = "https://barkpostapi-5d2b.restdb.io/rest";

export default class DataService {
    getAllPosts(){
        return axios.get(`${apiBark}/barkpost`, {
            headers : {
                'content-type': 'application/json',
                'x-apikey': '5e607d8509c313436a69ff9a'
                //'Access-Control-Allow-Origin': '*'    
            },
            crossdomain : true
        });
    }
}

//