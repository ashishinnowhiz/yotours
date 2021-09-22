import App from '../App';
import PageNotFound from '../components/page-not-found';
import CityPage from '../containers/CityPage/CityPage';
import Storytellers from '../containers/CityPage/StoryTellers';
import CityBlogs from '../containers/CityPage/CityBlogs';
import CityVlogs from '../containers/CityPage/CityVlogs';
import Socialmedia from '../containers/CityPage/SocialMedia';
import ProductsPage from '../containers/ProductsPage/ProductsPage';
import SignupPage from '../containers/Signup/SignupPage';
import PaymentPage from '../containers/Payment/PaymentPage';
import HolidayPage from '../containers/HolidayPage/HolidayPage';
import SearchPage from '../containers/SearchPage/SearchPage';
import Home from '../containers/Home/Home';
import WalkingTours from '../containers/WalkingTours/WalkingTours';
import HolidayCityPage from '../containers/HolidayCityPage/HolidayCityPage';
import TravelServices from '../containers/TravelServices/TravelServices';
import SellOurExperiences from '../containers/SellOurExperiences/SellOurExperiences';
import MyProfile from '../containers/MyAccount/MyProfile';
import SavedPaymentMethods from '../containers/MyAccount/SavedPaymentMethods';
import YoCredit from '../containers/MyAccount/YoCredit';
import Wishlist from '../containers/MyAccount/Wishlist';
import BookingHistory from '../containers/MyAccount/BookingHistory';
import ContactUs from '../containers/ContactUs/ContactUs';
import MyCart from '../containers/MyCart/MyCart';
import CommunityPage from '../containers/CommunityPage/CommunityPage';
import BecomeYoStoryTeller from '../containers/BecomeYoStoryTeller/BecomeYoStoryTeller';
import HolidayPlace from '../containers/HolidayPlace/HolidayPlace';
import HolidayPackage from '../containers/HolidayPackage/HolidayPackage';
import SearchResults from '../containers/SearchResults/SearchResults';
import DemoPages from '../containers/DemoPages/DemoPages';

const Routes = [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...SignupPage,
        path: '/signup',
        exact: true,
      },
      {
        ...MyProfile,
        path: '/my-profile',
        exact: true,
      },
      {
        ...YoCredit,
        path: '/yo-credits',
        exact: true,
      },
      {
        ...Wishlist,
        path: '/wishlist',
        exact: true,
      },
      {
        ...BookingHistory,
        path: '/booking-history',
        exact: true,
      },
      {
        ...SavedPaymentMethods,
        path: '/saved-payment-methods',
        exact: true,
      },
      {
        ...ContactUs,
        path: '/contact-us',
        exact: true,
      },
      {
        ...MyCart,
        path: '/my-cart',
        exact: true,
      },
      {
        ...WalkingTours,
        path: '/walking-tours',
        exact: true,
      },
      {
        ...CityPage,
        path: '/City/:cityId',
        exact: true,
      },
      {
        ...HolidayCityPage,
        path: '/holiday-city/:cityId',
        exact: true,
      },
      {
        ...HolidayPlace,
        path: '/holiday-place',
        exact: true,
      },
      {
        ...HolidayPackage,
        path: '/holiday-package/:holidayId',
        exact: true,
      },
      {
        ...Storytellers,
        path: '/storytellers/:cityId',
        exact: true,
      },
      {
        ...CityBlogs,
        path: '/cityblogs/:cityId',
        exact: true,
      },
      {
        ...CityVlogs,
        path: '/cityvlogs',
        exact: true,
      },
      {
        ...ProductsPage,
        path: '/product/:productId',
        exact: true,
      },
      {
        ...Socialmedia,
        path: '/socialmedia',
        exact: true,
      },
      {
        ...PaymentPage,
        path: '/payments',
        exact: true,
      },
      {
        ...HolidayPage,
        path: '/holiday/:countryId',
        exact: true,
      },
      {
        ...SearchPage,
        path: '/search',
        exact: true,
      },
      {
        ...SearchResults,
        path: '/search-results',
        exact: true,
      },
      {
        ...TravelServices,
        path: '/travel-services',
        exact: true,
      },
      {
        ...SellOurExperiences,
        path: '/experiences',
        exact: true,
      },
      {
        ...CommunityPage,
        path: '/community',
        exact: true,
      },
      {
        ...BecomeYoStoryTeller,
        path: '/storyteller',
        exact: true,
      },
      {
        ...DemoPages,
        path: '/demopage',
        exact: true,
      },
      {
        ...PageNotFound,
        path: '',
      },
    ],
  },
];

export default Routes;
