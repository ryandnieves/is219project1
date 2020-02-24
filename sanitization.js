class sanitization {
    static checkIfString(a) {
        let check = true;
        if (typeof a === 'string' || a instanceof String) {
            throw new Error('You cannot use a String');
        } else {
            check = false;
        }
        return check;
    }
}

module.exports = sanitization;
