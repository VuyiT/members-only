const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../db/queries");

const customFields = {
    usernameField: "email",
    passwordField: "password",
};

const verifyCallback = async (email, password, done) => {
    try {
        const user = await db.getUserByEmail(email);
        if (!user) {
            return done(null, false, { message: "Incorrect email address" });
        }
        const match = await bcrypt.compare(password, user.password_hash);
        if (!match) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.getUserById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});