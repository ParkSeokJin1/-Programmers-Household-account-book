/** class 바꿔치기 하는 함수
 * @param  Element node
 */
export const toShow = (node) => {
  if (node.className.includes("v-none")) {
    node.className = node.className.replace("v-none", "v-show");
  } else {
    node.classList.add("v-show");
  }
};

/**
 * @param  Element node
 */
export const toHidden = (node) => {
  if (node.className.includes("v-show")) {
    node.className = node.className.replace("v-show", "v-none");
  } else {
    node.classList.add("v-none");
  }
};


//값이 존재하는지 확인해서 존재하지 않으면 error
export const validateRequired = (list) => {
  return list.every((value) => {
  if(value) return true;
  throw new Error("value is invalid");  
  })
}; 

// 가격이 0원 보다 크거나 현재자산보다  작거나 같을때 정상 아닐때 에러 반환
export const validatePrice = (price, $currentAssetValue) => {
  if(price > 0 && price <= $currentAssetValue) return true;
  throw new Error("price value is invalid");
}

