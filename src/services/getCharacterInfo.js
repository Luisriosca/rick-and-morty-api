import axios from "axios";

const getCharacterInfo = async (URL = '') => {
    const response = await axios.get(URL);
    return response
}

export default getCharacterInfo