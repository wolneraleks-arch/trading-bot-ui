// GitHub: encoder.js
const VK_ENCODER = {
    // Наша секретная карта (можешь менять буквы на любые другие)
    map: {"0":"z", "1":"k", "2":"m", "3":"a", "4":"p", "5":"q", "6":"s", "7":"w", "8":"e", "9":"r"},
    prefix: "WI-",
    suffix: "-T",

    encode: function(vkId) {
        if (!vkId) return "";
        let encoded = this.prefix;
        let idStr = vkId.toString();
        for (let char of idStr) {
            encoded += this.map[char] || char;
        }
        return encoded + this.suffix;
    }
};

