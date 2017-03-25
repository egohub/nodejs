var request = require('request')
  //  ,express = require('../node_modules/express')
   ,cheerio = require('cheerio')
   ,async = require('async');


   exports.add = function(a,b)
   {
   	return a+b;
   };

   exports.subtract = function(a,b)
   {
   	return a-b;
   };

   exports.multiply = function(a,b)
   {
   	return a*b;
   };

   exports.divide = function(a,b)
   {
   	return a/b;
   };

   exports.modulo = function(a,b)
   {
   	return a%b;
   };
