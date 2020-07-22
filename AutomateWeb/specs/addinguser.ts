import { browser } from "protractor";
import {LandingPage} from "../pages/LandingPage";
import {AddUserPage} from "../pages/AddUserPage";

describe("Testing the adding user", function(){
    let testData = require("../testData/testDatavalues")

    beforeEach(function(){
        browser.driver.manage().window().maximize();
        browser.get(testData.testURL);
        let landpage = new LandingPage();
        landpage.verifyValueRow();
        
    })


    
   it("Adding User 1 to the table", function(){

        
        let addfirstuser = new AddUserPage();
        addfirstuser.addUser1();
        browser.sleep(2000);
        
        
    
    })

    it("Adding the 2nd customer", function(){

        

        let addsecuser = new AddUserPage();
        addsecuser.addUser2();
        
    })

    

})