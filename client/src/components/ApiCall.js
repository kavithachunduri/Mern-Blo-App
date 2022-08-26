import axios from "axios";

const BASE_URL = "https://api.pexels.com/v1"
const API_KEY = "563492ad6f917000010000017b9281f5eeea440da692b1ec885e8a5a"


    export async function popularWallPaper(){

        const response_popularWallPaper = await axios.get('https://api.pexels.com/v1/curated?per_page=25',
       {headers:{
            
            Authorization: API_KEY
        } } );
        console.log("data",response_popularWallPaper);
    return response_popularWallPaper
    }

    
    export async function searchWallPaper(search){

        const response_searchWallPaper = await axios.get(`${BASE_URL}/search?query=${search}&per_page=20`,
        {headers:{
            Authorization: API_KEY
        }});

    return response_searchWallPaper
    }

