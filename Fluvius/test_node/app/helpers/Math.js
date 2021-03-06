/*
*   Math.js
*
*   Some help  math fns
*
*/

module.exports = {

  /*
       |--------------------------------------------------------------------------
       | Получить рандомное целочисельное
       |--------------------------------------------------------------------------
       */
  getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },

  /*
        |--------------------------------------------------------------------------
        | Получить рандомный индекс в пределе размера данного массива
        |--------------------------------------------------------------------------
        */
  getRandomIndexFromArray: function (array) {
    return Math.floor(Math.random() * array.length)
  }

}
