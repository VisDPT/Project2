'use strict';

var Nightmare = require('nightmare'),
    should = require('chai').should();
nightmare = Nightmare({ show: true })

describe('Allergy Monkey', function() {
            it('should get results for nut free recipes', function() {
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
            });

            it('should display all results for recipes', function() {
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
                    //takes a screenshot of results and saves it as NOallergy.png
                    .screenshot('NOallergy.png')

                it('should ', function() {
                    throw new Error('Failed on purpose, just to make the Mocha output more interesting.');
                });

            })