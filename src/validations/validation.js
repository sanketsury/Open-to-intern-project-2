
const isValidName = new RegExp(/^[a-zA-Z ]{2,50}$/)
const isValidMobile = new RegExp("^(\\d{3}[- ]?){2}\\d{4}$")
const isValidEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)


const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};
const isValidUrl = new RegExp("((http|https)://)(www.)?"
+ "[a-zA-Z0-9@:%._\\+~#?&//=]"
+ "{2,256}\\.[a-z]"
+ "{2,6}\\b([-a-zA-Z0-9@:%"
+ "._\\+~#?&//=]*)")

module.exports = { isValid, isValidUrl, isValidName, isValidMobile, isValidEmail };