import "@fortawesome/fontawesome-free/js/all.js";
import "../style/index.scss";
import { initCurrentAsset } from "./current-asset";
import {initConsumptionDetails} from './consumption-details' 
import { initAddItem } from "./add-item";



const initApp = () => {
  initCurrentAsset();
  initConsumptionDetails();
  initAddItem();
  // 다른 컴포넌트를 넣어서 초기화 하게끔
}

initApp();



