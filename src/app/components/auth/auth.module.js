angular
    .module('components.auth', [
        'ui.router',
        'firebase'
    ])
    .config(function ($firebaseRefProvider) {
        
        var config = {
            apiKey: "AIzaSyBpc93tiapkeb7OiAu0hnWWjd9adJGcT0c",
            authDomain: "contacts-manager-6ee68.firebaseapp.com",
            databaseURL: "https://contacts-manager-6ee68.firebaseio.com",
            storageBucket: "contacts-manager-6ee68.appspot.com",
            messagingSenderId: "230671818167"
        };

        $firebaseRefProvider
            .registerUrl({
                default: config.databaseURL,
                contacts: config.databaseURL + '/contacts',
            });
        firebase.initializeApp(config);
    });
