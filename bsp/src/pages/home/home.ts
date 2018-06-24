import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Slides } from 'ionic-angular';
// import { HomePage } from '../home/';
import { ListPage } from '../../pages/list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list = ListPage;
  constructor(public navCtrl: NavController) {

  }
  // @ViewChild(Slides) slides: Slides;
  // goToSlide() {
  //   this.slides.slideTo(2, 500);
  // }
  listPage() {
    this.navCtrl.setRoot(ListPage);
  }
}
