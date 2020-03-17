
module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1, res = []) {
        res.push(depth);
        for (let el of arr) {
            if(Array.isArray(el)) {
                this.calculateDepth(el, depth + 1, res);
            }
        }
        return Math.max(...res); //оператор ... раскрывает массив в список аргументов
    }
};