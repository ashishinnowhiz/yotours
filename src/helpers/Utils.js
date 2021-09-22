import inclusion from "../components/HolidayPackage/Itinerary";

export const isArray = (data) => {
  if (data && Array.isArray(data) && data.length > 0) return true;
  else return false;
};

export const groupGuideData = (data, separatorKey) => {
  if (!isArray(data)) return {};
  let guideObj = {};
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    const key = element[separatorKey].split(" ").join("_");
    if (!guideObj[key]) guideObj[key] = [element];
    else guideObj[key] = [...guideObj[key], element];
  }
  return guideObj;
};

export const getCostFromStr = (str) => {
  let price = str.split(/[:\n]/);
  if (price.length === 6) {
    price = [price[1], price[3], price[5]];
    price = price.map((price) => {
      let priceStr = price.replace(" INR ", "");
      return priceStr.split(" to ").join("-");
    });
    return price;
  }
};

export const getThemesList = (holidays, theme) => {
  theme && isArray(theme) && theme.forEach((element, idx) => {
    theme[idx]['list'] = []
    for (let index = 0; index < holidays.length; index++) {
      const themeIds = holidays[index]['theme']?.split(',');
      if(themeIds && themeIds.includes(element.id.toString())){
        theme[idx]['list'].push(holidays[index])
      }
    }
  })
  return theme
}

export const getTravelingWith = (holidays) => {
 if(isArray(holidays)){
  let trvlCategories = {}
  let trvlCategoryWithImage = []
  for (let index = 0; index < holidays.length; index++) {
    const category = holidays[index]['holiday_category']['name'];
    if(trvlCategories[category]) trvlCategories[category] = [...trvlCategories[category], holidays[index]]
    else {
      const featured_img = holidays[index]['holiday_category']['image'];
      trvlCategories[category] = [holidays[index]]
      trvlCategoryWithImage.push({category: category, featured_img})
    }
  }
  return {trvlCategories, trvlCategoryWithImage, trvCatkeys:(Object.keys(trvlCategories))}
 }
 return {}
}
export const getTopRateHolidays = (holidays) => {
  let topHolidays = []
  if(isArray(holidays)){
   for (let index = 0; index < holidays.length; index++) {
     const value = holidays[index];
     if(value.bestseller) topHolidays.push(value)
     if(index === 6) return topHolidays
   }
  }
  return topHolidays
 }

 export const sortDestinationByState = (cities) => {
   if(isArray(cities)){
    const sortedProduct = cities.sort((obj1, obj2)=>obj2.state_display_order-obj1.state_display_order)
    return {popularDestination:(sortedProduct?.slice(0,7)) ,isGreater:(sortedProduct.length>7)}
   }
   return {}
 }

 export const groupByDaysItinerary = (inclusion) => {
   if(isArray(inclusion)){
     let days = {}
    for (let index = 0; index < inclusion.length; index++) {
      const day = inclusion[index]['day_select'];
     days[day] = days[day] ? [...days[day], inclusion[index]] : [inclusion[index]]
    }
    return days
   }
   return
 }

 export const formatRelatedHolidays = (relatedHolidays) => {
  if(isArray(relatedHolidays)){
   for (let index = 0; index < relatedHolidays.length; index++) {
    relatedHolidays[index]['name'] = relatedHolidays[index]['product_name']
    relatedHolidays[index]['banner_img_link'] = relatedHolidays[index]['featured_img']
    relatedHolidays[index]['count'] = relatedHolidays[index]['times_booked']
   }
   return relatedHolidays.slice(0,4)
  }
  return
 }