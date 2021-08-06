/**
 * validate zip code available states
 * @param {Number} zip 
 * @param {String} state 
 */
const validateZipCode = (zip:string, state:string):boolean => {
  let zipString = String(zip)
  if (zipString.length !== 5) return false
  return ((/97/).test(zipString[0] + zipString[1]) && state === "OR") || ((/6(?:6|7)/).test(zipString[0] + zipString[1]) && state === "KS") || ((/64/).test(zipString[0] + zipString[1]) && state === "MO")
}

/**
 * validate zip code call
 * @param {String} zipCode 
 */
export const validateZip = async(zipCode:string) => {
  const url = `https://api.zippopotam.us/us/${zipCode}`
  const options = Object.assign({ method: 'GET' })
  const request = new Request(url, options)
  
  try {
    const response = await fetch(request)
    const data = await response.json()
    let result = {};
    if (data && data.places.length) {
      result = {
        ...data.places[0],
        zipCode,
        validZipcode: validateZipCode(zipCode, data.places[0]['state abbreviation'])
      }
    }
    return result
  } catch(error) {
    console.error(error)
    return false
  }
}

/**
 * Function set item to localstorage
 * @param {*} itemName 
 * @param {*} item 
 */
export const setItemLocalStorage = (itemName:string, item:any) => {
  const windowGlobal = typeof window !== 'undefined' && window;
  
  if (windowGlobal) {
    // Set item to localstorage
    windowGlobal.localStorage.setItem(itemName, JSON.stringify(item));
  }
}

/**
 * Function to retrieved object from localstorage
 * @param {*} itemName 
 */
export const getItemLocalStorage = (itemName:string) => {
  const windowGlobal = typeof window !== 'undefined' && window;

  if (windowGlobal) {
    // Retrieve the JSON string
    const jsonString: any = windowGlobal.localStorage.getItem(itemName);
        
    // Parse the JSON string back to JS object
    const retrievedObject = JSON.parse(jsonString);

    // Return object
    return retrievedObject;
  }
}