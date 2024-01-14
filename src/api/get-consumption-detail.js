import axios from 'axios';
// 목록조회 api
/**
 * @params
 * {
 *  id: number,
 *  price: number,
 *  category: string,
 *  fundsAtTheTime: number,
 *  description: string,
 *  createAt: string,
 * }
 */

export const getConsumptionDetails = async() => {
 const {data} = await axios.get('http://localhost:3002/consumption-details');
 console.log(data);
 return data;
}