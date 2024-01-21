import { transactionHistory } from "../helpers"
import { differenceInCalendarDays } from 'date-fns'

// This is to determine if there's any existing transaction record
// exists on the same day of new transaction occurs
export const checkTransactionExists = (selectedDate: Date):boolean => {

  // return true if there is record of transaction which is as the same date as selectedDate
  return !!transactionHistory.find((item) => differenceInCalendarDays(selectedDate, item.date) === 0)
}