import { AsyncStorage } from 'react-native';

let store: any = {};

/**
 * Storing Object Value
 * @param value 
 */
const setValue = async (key: string, value: any) => {
    try {
        store[key] = value;
        const jsonValue = JSON.stringify(store)
        await AsyncStorage.setItem('store', jsonValue)
    } catch (e) {
        console.log(e);
    }
}

/**
 * Get Value From Local Storage
 * @param key
 */
const getValue = async (key: string) => {
    debugger;
    try {
        debugger;
        let jsonValue: any = await AsyncStorage.getItem('store');

        if (jsonValue !== null) {
            jsonValue = JSON.parse(jsonValue);
            console.log('Local storeg return++', jsonValue[key]);
            return jsonValue[key] ? jsonValue[key] : null;
        }
        return null;
    } catch (e) {
        console.log(e);
    }
}

export default { getValue, setValue, store };
