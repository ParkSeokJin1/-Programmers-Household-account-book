import { addConsumptionDetail } from '../api/add-consumption-detail';
import { toHidden, toShow, validatePrice, validateRequired } from './util';
import { handleGetConsumptionDetails } from "./consumption-details";
import { updateCurrentAsset } from '../api/update-current-asset';
import { handleAddCurrentAsset } from './current-asset';
const $currentAssetValue = document.querySelector(".current-asset-value"); // 현재자산
const $addItemButton = document.querySelector(".add-item-button"); // 소비내역 작성하기 버튼
const $addItemDetail = document.querySelector(".add-item-detail"); // 소비내역 버튼을 눌렀을 때 form 
const $itemSubmitButton = document.querySelector(".item-submit-button"); // 등록하기 버튼          
const $itemCategory = document.querySelector("#item-category");  // 카테고리 input
const $itemPrice = document.querySelector("#item-price");  // 가격 input
const $itemDescription = document.querySelector("#item-description");  //내용 input



export const initAddItem = () => {              
   addEventListener();
};

const addEventListener = () => {
    $addItemButton.addEventListener('click', function() { // 소비내역 작성하기 버튼
        toShow($addItemDetail);
        toHidden($addItemButton);
      });
      $itemSubmitButton.addEventListener('click', function () { // 등록하기 버튼
        handleAddConsumptionDetail();
      });
};

const handleAddConsumptionDetail = async() => {
    try {
        validateRequired([
        $itemCategory.value, 
        $itemPrice.value, 
        $itemDescription.value
    ])
     validatePrice(
        Number($itemPrice.value), 
       Number($currentAssetValue.textContent.replace(",", "")));
     // 벨리데이션이 다 통과가 되면( = 값이 다 있고 버튼을 눌렀을때) 

     // -> 등록을 하는 api 호출 
     const fundsAtTheTime =
     Number($currentAssetValue.textContent.replace(",", "")) -
     Number($itemPrice.value);
     await addConsumptionDetail({
       // post 요청을 할때 넘겨줄 데이터   
       price:  Number($itemPrice.value),
      category: $itemCategory.value,
      description: $itemDescription.value,
      fundsAtTheTime: fundsAtTheTime,
      createAt: new Date().toISOString(),
     });
     // 현재자산 업데이트 
     await handleAddCurrentAsset(fundsAtTheTime);
     // list 다시 조회 
     handleGetConsumptionDetails();
     initForm(); // form 초기화 
     toHidden($addItemDetail);
     toShow($addItemButton); 
   } catch(err) {
   console.error(err);
  }
}

// form 초기화하는 로직
const initForm = () => {
  $itemCategory.value = "";
  $itemPrice.value = ""; 
  $itemDescription.value = "";
}