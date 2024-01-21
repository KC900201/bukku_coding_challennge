import { type ProductType, products as sampleProducts } from "./products"

export type TransactionHistoryType = {
  id: number,
  date: Date,
  transactionID: string, /** if it's a merchant transaction, starts with PC-xxxxxx, else starts with SL-xxxxxx */
  productID: ProductType["id"],
  purchasePrice: ProductType["price"],
  salesPrice: number | null,
  quantity: number
  isPurchase: boolean /** true if it's a purchase transaction, false if it's a sales transaction */
}

export const transactionHistory: TransactionHistoryType[] = [
  {
    id: 1,
    date: new Date("1/21/2024"),
    transactionID: "PC-000000",
    productID: sampleProducts[0].id,
    purchasePrice: sampleProducts[0].price,
    salesPrice: null,
    quantity: 10,
    isPurchase: true,
  },
  {
    id: 2,
    date: new Date("1/22/2024"),
    transactionID: "PC-000001",
    productID: sampleProducts[1].id,
    purchasePrice: sampleProducts[1].price,
    salesPrice: null,
    quantity: 10,
    isPurchase: true,
  },
  {
    id: 3,
    date: new Date("1/23/2024"),
    transactionID: "SL-000000",
    productID: sampleProducts[2].id,
    purchasePrice: sampleProducts[2].price,
    salesPrice: 25.43,
    quantity: 10,
    isPurchase: false,
  },
  {
    id: 4,
    date: new Date("1/24/2024"),
    transactionID: "SL-000001",
    productID: sampleProducts[3].id,
    purchasePrice: sampleProducts[3].price,
    salesPrice: 33.44,
    quantity: 10,
    isPurchase: false,
  },
]