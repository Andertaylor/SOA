import {Linking} from 'react-native'

Linking.canOpenURL('https://www.facebook.com/physiscaribbean/').then(supported => {
    if (supported) {
        Linking.openURL('https://www.facebook.com/physiscaribbean/');
    } else {
        console.log("Please try again");
    }
});

export default social;