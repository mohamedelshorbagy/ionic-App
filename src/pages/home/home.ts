import { Component } from '@angular/core';
import { NavController ,NavParams , LoadingController} from 'ionic-angular';
import { Http, Response,Headers , RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {HandelApi} from '../../providers/handel-api';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allData:any;
  public token:any;
  public merchants:any;

  segments:string = "merchants";
  constructor(public navCtrl: NavController,private handel: HandelApi,public params: NavParams, private http:Http , private loadingCtrl:LoadingController) {
          this.token = this.params.get('token');

          let loadingPopup = this.loadingCtrl.create({
         content: 'Loading data...'
         });

         // Show the popup
         loadingPopup.present();

         let  headers = new Headers({
                'Content-Type':'application/json'

         });
         let options = new RequestOptions({
              headers:headers

         });

         let body = {
            token:this.token

         }
         // Get the data
         this.http.post('https://demo.paymeapp.co/api/v2/mobile/home',JSON.stringify(body),options)
         .map((res: Response) => res.json())
         .subscribe(
           data => {

             // I've added this timeout just to show the loading popup more time
             setTimeout(() => {
               this.allData = data;
               this.merchants = this.allData.merchants;
               
               console.log(data);
               loadingPopup.dismiss();
             }, 1000);

             // Should be just this:
             // this.users= data;
             // loadingPopup.dismiss();
           },
           err => console.error(err)
         );
  }



}
