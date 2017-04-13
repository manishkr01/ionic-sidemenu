import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TeacherSidemenu} from '../../pages/page';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
 user:any;
 userType:number;
 userName:string = '';
 password:string = ''; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.navParams.data.usertype);
    this.userType=this.navParams.data.usertype;
    console.log('ionViewDidLoad Login');
  }
  testUser(type){
    console.log(type);
    switch(type){
      case 1:
      //console.log("Hello"+ 1);
      this.navCtrl.push(TeacherSidemenu);
      break;
      case 2:
      console.log("Hello"+ 2);
      break;
      case 3:
      console.log("Hello"+ 3);
      break;
      case 4:
      console.log("Hello"+ 4);
      break;
    }
  }

}
