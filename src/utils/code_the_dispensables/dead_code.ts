const beforeDiscount = `public double GetDiscount() {
  double discountPrice = 0;

  // dead code
  if(isDiscount){
    if(price < 10000){
      discountPrice = price * 0.1;
    } else {
      discountPrice = price * 0.2;
    }
  }

  if(isDiscount) discountPrice = price * 0.15;
  return price - discountPrice;
}`

const afterDiscount = `public double GetDiscount() {
  double discountPrice = 0;
  if(isDiscount) discountPrice = price * 0.15;

  return price - discountPrice;
}`

const deadCodeBefore = [
  {
    id: 1,
    class: 'Discount',
    code: beforeDiscount
  }
]

const deadCodeAfter = [
  {
    id: 1,
    class: 'Discount',
    code: afterDiscount
  }
]

export { deadCodeBefore, deadCodeAfter }