// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '391509667639780', // your App ID
        'clientSecret'  : 'e6c699f0031c944e2febaadce4500def', // your App Secret
        'callbackURL'   : 'ec2-35-161-17-216.us-west-2.compute.amazonaws.com:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'UWvwEjUUutZqxbC9Djo5kT7OJ',
        'consumerSecret'    : 'Ifh2VIbGGvEQxQDRwkaXYE7IULGKNrXP3PD1vBZ1iTtnV0iHk4',
        'callbackURL'       : 'ec2-35-161-17-216.us-west-2.compute.amazonaws.com:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '1062986257663-avg8l9kguqf562dnk5m1nju3p94437oh.apps.googleusercontent.com',
        'clientSecret'  : 'VGlHvz3v_LGH6PjzvP0V3feS',
        'callbackURL'   : 'ec2-35-161-17-216.us-west-2.compute.amazonaws.com:8080/auth/google/callback'
    }

};