// import axios to make http request
import axios from 'axios';

//grab url as a string
const url = 'https://covid19.mathdro.id/api';


// asynchronous function. 4
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };




    } catch (error) {

    }

}