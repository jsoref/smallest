'use strict'
module.exports = function smallest (values) {
  console.log("smallest", values);
  return Math.min.apply(Math, Array.isArray(values) ? values : arguments)
}
