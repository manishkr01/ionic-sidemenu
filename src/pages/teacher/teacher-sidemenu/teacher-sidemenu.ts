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
  selector: 'page-teacher-sidemenu',
  templateUrl: 'teacher-sidemenu.html',
})
export class TeacherSidemenu {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TeacherHome;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: TeacherHome },
      { title: 'List', component: TeacherHomework }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
