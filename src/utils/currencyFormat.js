export const currencyFormat = (number)=>{
  return new Intl.NumberFormat('id-ID', {}).format(number);
};
