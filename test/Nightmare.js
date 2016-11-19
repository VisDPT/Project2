'use strict';

var Nightmare = require('nightmare'),
    //should = require('chai').should();
    var nightmare = Nightmare({ show: true })

nightmare
//go to Website
    .goto('')
    //wait #about to load before next step to give enough time for nightmare to run
    .wait('#about')
    //click FindRecipe in Nav Bar which will bring it to the checkboxes section
    .click('#about')
    //checks off peanut allergy by making it a true boolean
    .check('#peanuts')
    //checks off treeNuts allergy by making it a true boolean
    .check('#treeNuts')
    //click button to find recipe
    .click('#find')
    //takes a screenshot of results and saves it as NUTallergy.png
    .screenshot('NUTallergy.png')

.end()
    .catch(function(error) {
        console.error('Search failed:', error);
    });