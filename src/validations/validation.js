
const isValidName = new RegExp(/^[a-zA-Z ]{2,50}$/)
const isValidMobile = new RegExp(/^\(?([6-9]{1})\)?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
const isValidEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const isValidCollegeName = function (value) {
    let nameRegex =
    /^[a-z ,.'-]+$/i;
    if (nameRegex.test(value)) return true;
  };

const isValid = function (value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};

function isValidUrl(value) {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regexp = new RegExp(expression);
    return regexp.test(value);
}

module.exports = { isValid, isValidUrl, isValidName, isValidCollegeName, isValidMobile, isValidEmail };