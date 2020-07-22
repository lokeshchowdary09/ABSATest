import {browser, element, by, protractor} from "protractor"
import {LandingPage} from "../pages/LandingPage";

export class AddUserPage{

    testData = require("../testData/testDatavalues");

    firstName = element(by.css("[name='FirstName']"));
    lastName = element(by.css("[name='LastName']"));
    userName = element(by.css("[name='UserName']"));
    password = element(by.css("[type='password']"));
    companyA = element(by.css("form[name='smartTableValidForm'] label:nth-of-type(1)"));
    companyB = element(by.css("form[name='smartTableValidForm'] label:nth-of-type(2)"));
    roleAdmim = element(by.cssContainingText('option', 'Admin'));
    roleSalesTeam = element(by.cssContainingText('option', 'Sales Team'));
    roleCustomer = element(by.cssContainingText('option', 'Customer'));
    email = element(by.css("[type='email']"));
    cellPhone = element(by.css("[name='Mobilephone']"));
    close = element(by.buttonText('Close'));
    save = element(by.buttonText('Save'));
    
    
    




    addUser1(){
        
        let landpage = new LandingPage();
        landpage.butAddUser.click();
        browser.sleep(2000);
        this.firstName.click();
        browser.sleep(2000);
        this.firstName.sendKeys("FName1");
        this.lastName.click();
        this.lastName.sendKeys("LName1");
        console.log("Continue the flow once sucessfull");
        this.userName.click();
        this.userName.sendKeys("User1");
        console.log("the user1 till to be continued");
        this.password.click();
        this.password.sendKeys("Pass1");
        console.log("Password key sent");
        this.companyA.click();
        console.log("company is clicked AAAA");
        this.roleAdmim.click();
        console.log("Role Admin was selected");
        this.email.click();
        this.email.sendKeys(this.testData.emailuser1);
        console.log("email entered");
        this.cellPhone.click();
        this.cellPhone.sendKeys(this.testData.Phoneuser1);
        console.log("cell phone entered");
        browser.takeScreenshot();
        this.save.click();
        console.log("closed the application");


    }

    addUser2(){

        let landpage = new LandingPage();
        landpage.butAddUser.click();
        browser.sleep(2000);
        this.firstName.click();
        browser.sleep(2000);
        this.firstName.sendKeys("FName2");
        this.lastName.click();
        this.lastName.sendKeys("LName2");
        console.log("Continue the flow once sucessfull");
        this.userName.click();
        this.userName.sendKeys("User2");
        console.log("the user2 till to be continued");
        this.password.click();
        this.password.sendKeys("Pass2");
        console.log("Password key sent");
        this.companyB.click();
        console.log("clicked company BBBB");
        this.roleCustomer.click();
        console.log("Role customer was selected");
        this.email.click();
        this.email.sendKeys(this.testData.email2);
        console.log("email entered");
        this.cellPhone.click();
        this.cellPhone.sendKeys(this.testData.phone2);
        console.log("cell phone entered");
        browser.takeScreenshot();
        this.save.click();
        console.log("closed the application");

    }

    addusersample(){

        let landpage = new LandingPage();
        landpage.butAddUser.click();
        browser.sleep(2000);
        this.firstName.click();
        browser.sleep(2000);
        this.firstName.sendKeys("FName");
        this.lastName.click();
        this.lastName.sendKeys("LName");
        console.log("Continue the flow once sucessfull");
        this.userName.click();
        this.userName.sendKeys("User");
        console.log("the user2 till to be continued");
        this.password.click();
        this.password.sendKeys("Pass");
        console.log("Password key sent");
        this.companyB.click();
        console.log("clicked company BBBB");
        this.roleCustomer.click();
        console.log("Role customer was selected");
        this.email.click();
        this.email.sendKeys("sample@testing.com");
        console.log("email entered");
        this.cellPhone.click();
        this.cellPhone.sendKeys("089938");
        console.log("cell phone entered");
        this.save.click();
        console.log("closed the application");

    }

    

          

}