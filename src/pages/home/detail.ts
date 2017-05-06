import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the Detail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  templateUrl: 'detail.html',
})
export class NavigationDetailsPage {

  item;

  constructor(private params: NavParams) {
    this.item = params.data.item;
  }

}
