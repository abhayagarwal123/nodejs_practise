

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const person = require('./model/person');
//authentication using username and password
passport.use(new LocalStrategy(async (Username, Password, done) => {
    try {
        const user = await person.findOne({ username: Username });
        if (!user)
            return done(null, false, { message: 'Incorrect username.' });

        const ispassmatch = user.password == Password ? true : false;
        if (ispassmatch)
            return done(null, user);
        else
            return done(null, false, { message: 'Incorrect password.' })
    } catch (error) {
        return done(error);
    }
}));
module.exports = passport;