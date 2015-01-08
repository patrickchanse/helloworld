console.log('run js')

yargs = require('yargs')
isProduction = yargs.argv.prod

window.$ = require('jquery')
window.Backbone = require('backbone')
window.Backbone.$ = $
window._ = require('underscore');

vendor = require('./vendor')()

$('section').on('click', -> $(this).toggleClass('animate'))