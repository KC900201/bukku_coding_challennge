
import {  transactionHistory, products } from "../helpers"
import { differenceInCalendarDays } from "date-fns"


export const calculateWACSalesPrice = (selectedProductId: number):number => {
  const today = new Date()

  const originalProductPrice = products.find((item) => item.id === selectedProductId)?.price ?? 0

  // filter out the merchant sales history for selected product that the transaction date is no later than latest date
  const selectedProductMerchantPriceList = transactionHistory.filter((item) =>
      item.productID === selectedProductId && item.quantity > 0 && differenceInCalendarDays(today, item.date) >= 0
      ).map((item) => ({merchantPrice: item.merchantPrice, quantity: item.quantity}))

  // calculate the total weighted price and total quantity of selected product
  const { totalWeightedPrice, totalQuantity } = selectedProductMerchantPriceList.reduce(
    (accumulator, item) => {
      accumulator.totalWeightedPrice += item.merchantPrice * item.quantity
      accumulator.totalQuantity += item.quantity
      return accumulator
    },
    { totalWeightedPrice: 0, totalQuantity: 0 }
  );

  // total weight average cost will be the total weighted price / total quantity
  // If there's no purchase history, revert to use original merchant price (from products array)
  return totalQuantity !== 0 ? totalWeightedPrice / totalQuantity : originalProductPrice
}

