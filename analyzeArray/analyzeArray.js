export const analyzeArray = {
    length: function (array) { 
        return array.length;
    },

    average: function (array) {
        return array.reduce((sum, curr) => sum + curr, 0)/array.length;
    }
}