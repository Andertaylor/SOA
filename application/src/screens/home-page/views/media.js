import {Linking} from 'react-native'

Linking.canOpenURL('http://physiscaribbean.net/').then(supported => {
    if (supported) {
        Linking.openURL('http://physiscaribbean.net//');
    } else {
        console.log("Please try again");
    }
});

export default media;