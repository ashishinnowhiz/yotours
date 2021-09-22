import { combineReducers } from 'redux'
import City from './city'
import Auth from './Auth'
import HeaderReducer from './header'
import Product from './Product'
import Holidays from './holidays'
import Holiday from './holiday'
import HolidayPackage from './holidayPackage'

export default combineReducers({
  city: City,
  auth: Auth,
  header: HeaderReducer,
  product: Product,
  holidays: Holidays,
  holiday: Holiday,
  holidayPackage: HolidayPackage
})
