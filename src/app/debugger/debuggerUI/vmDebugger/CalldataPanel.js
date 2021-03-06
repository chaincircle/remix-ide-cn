'use strict'
var DropdownPanel = require('./DropdownPanel')
var yo = require('yo-yo')

function CalldataPanel () {
  this.basicPanel = new DropdownPanel('调用数据', {json: true})
}

CalldataPanel.prototype.update = function (calldata) {
  this.basicPanel.update(calldata)
}

CalldataPanel.prototype.render = function () {
  return yo`<div id='calldatapanel' >${this.basicPanel.render()}</div>`
}

module.exports = CalldataPanel
