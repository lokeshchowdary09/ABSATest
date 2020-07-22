import {Config, browser} from "protractor"
var HtmlReporter = require('protractor-beautiful-reporter');

var reporter = new HtmlReporter({
    baseDirectory: 'tmp/screenshots'
 });

export let config: Config = {
    framework: "jasmine",

    capabilities:{
        browserName:'chrome'
    },

    specs:['./specs/addinguser.js'],

    seleniumAddress:'http://localhost:4444/wd/hub',

    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
           baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());
     }
}