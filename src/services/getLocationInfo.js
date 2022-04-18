import axios from "axios";

const getLocationInfo = async (locationSearch) => {
    const URL = `https://rickandmortyapi.com/api/location/${locationSearch}`
    const response = await axios.get(URL)
    return response
}

export default getLocationInfo