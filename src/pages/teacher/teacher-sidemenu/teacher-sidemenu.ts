import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TeacherHome,TeacherHomework} from '../../../pages/page';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/**
 * Generated class for the TeacherSidemenu page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'menu-list',
  templateUrl: 'teacher-sidemenu.html',
})
export class TeacherSidemenu {
@ViewChild('content') nav: NavController;
rootPage:any;
  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();
    this.rootPage = TeacherHome;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   console.log(page);
  //   this.nav.setRoot(page.component);
  // }
}
