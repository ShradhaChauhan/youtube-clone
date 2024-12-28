const API_KEY = 'AIzaSyC9iCwusRfZBYU9v3JDzT7qCmj8LRe1woE';

export const value_convertor = (value) => {
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else {
        return value;
    }
}

export default API_KEY;