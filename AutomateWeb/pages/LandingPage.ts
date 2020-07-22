import {browser, element, by, protractor} from "protractor"
import { verify } from "crypto"
import { userInfo } from "os";

export class LandingPage{
    butAddUser = element(by.buttonText('Add User'));

    testData = require("../testData/testDatavalues");

    addingxvalue(){
        this.testData.param.x = this.testData.param.x+1;
        return this.testData.param.x;
        console.log(this.testData.param.x);
    }
    

    verifyValueRow(){
        
        let rows = element.all(by.repeater('dataRow in displayedCollection'));
        browser.sleep(2000);
        let uservalue =  this.testData.param.y+this.testData.param.x;      
        rows.each(function(row: any){
            let cells = row.$$('td');
            cells.get(2).getText().then(function(txt: any){
                if(txt == uservalue){
                    console.log("The user Exist");
                    
                }
                else{
                    console.log("The user doesn't exist")
                }

                
        
                
            })
        
        })

        this.addingxvalue();
        console.log(uservalue);
    }
}

