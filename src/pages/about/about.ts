import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HandelApi } from '../../providers/handel-api';
import { HomePage } from '../home/home';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html',

})
export class AboutPage {
      public loginData: any;
      public username:any;
      public password:any;
  constructor(public navCtrl: NavController,private handel: HandelApi) {

  }


load(data) {
  return data;

}


check(email , password) {
    // console.log(email + " =====> " + password);
    var newData;
    this.handel.loginApi(email,password).map(res => res.json()).subscribe(data => {

      this.loginData = data;
        if(data.Message == "Success" && data.User.isvalidated == 1){
              this.navCtrl.push(HomePage , {
                  token:data.User.token

              });


        }

      // console.log(this.loginData);
    });


      this.loginData = function () {
        return newData;
      }



        console.log(newData);
    //     if (data.Message == "Success" && data.User.isvalidated == 1) {
    //       // this.navCtrl.push(HomePage, {
    //       //       token:data.User.token
    //       //
    //       //     });
    //       console.log(data)
    //
    //     } else {
    //         console.log("There is Some Error");
    //
    //     }

}

}
