import axios from "axios";

export const addCurrentAsset = async (value) => {
    await axios.get('http://localhost:3002/current-asset', {
        price: value,
    });
}