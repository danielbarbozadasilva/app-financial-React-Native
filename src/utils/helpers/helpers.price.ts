export function formatPrice(num:string) {
  return(
    num
    .replace('R$', '')
    .replace(' ', '')
    .replace(',', '.')
  )
}

export function calcSubTotal(value:number, current_price:string) {
  var resp = formatPrice(current_price) * value
  return String(resp).replace(".", ",")
}

export function calcTotalTransfer(subtotal:string) {
  const TAX_RATE = 5
  var price = parseFloat(formatPrice(subtotal))
  var resp = price + (price / 100) * TAX_RATE
  return String(resp.toFixed(2)).replace(".", ",");
}