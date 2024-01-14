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

export const addConsumptionDetail = async(body) => {
 const {data} = await axios.post('http://localhost:3002/consumption-details', body);
 return data;
}