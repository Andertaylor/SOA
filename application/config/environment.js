var environments = {
	// Setup Firebase values 
	staging: {
		FIREBASE_API_KEY: 'AIzaSyC0Bc4QFQP8NR4gdBt2F0lqE02dUABQHsE',
		FIREBASE_AUTH_DOMAIN: 'prueba-93505.firebaseapp.com',
		FIREBASE_DATABASE_URL: 'https://prueba-93505.firebaseio.com',
		FIREBASE_PROJECT_ID: 'prueba-93505fvvtg',
		FIREBASE_STORAGE_BUCKET: 'prueba-93505.appspot.com',
		FIREBASE_MESSAGING_SENDER_ID: '448438599082',
		GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyCm_rOJs-Q8AJbj9pZPlEzhtnGe2JGvlVo'
	},
	production: {
		// Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}

function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}

let Environment = getEnvironment(getReleaseChannel());
export default Environment;
