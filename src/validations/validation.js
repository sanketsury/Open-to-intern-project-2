

const isValidName = new RegExp(/^[a-zA-Z ]{2,50}$/)


const isValid = function(value) {
    if (typeof value === "undefined" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
};


const isValidUrl = new RegExp(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/);


module.exports = {isValid,isValidUrl,isValidName};