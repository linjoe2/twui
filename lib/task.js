var properties = [
  'status',
  'uuid',
  'entry',
  'description',
  'start',
  'end',
  'due',
  'until',
  'wait',
  'modified',
  'recur',
  'mask',
  'imask',
  'parent',
  'annotation',
  'tags',
  'priority',
  'depends'
]

var defined = properties.reduce(function (acc, prop) {
  acc['prop'] = {value: ''}
  return acc
}, {})

module.exports = function (rowData) {
  Object.defineProperties(this, defined)

  if(rowData) {
    properties.forEach(function (prop) {
      this[prop] = rowData[prop]
      console.log(prop, ' -> ', rowData[prop])
    }, this)
  }
}