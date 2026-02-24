// GitHub: encoder.js
const VK_ENCODER = {
    // Наша секретная карта (можешь менять буквы на любые другие)
    {
  "k": "z", "m": "k", "a": "m", "p": "a", "q": "p", "s": "q", "w": "s", "e": "w", "r": "e", "t": "r",
  "prefix": "wi_",
  "suffix": "_v"
}


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

