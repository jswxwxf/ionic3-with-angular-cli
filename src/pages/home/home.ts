import { Component,  OnInit } from '@angular/core';
import { ToastController } from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage implements OnInit {

  constructor(private toastCtrl: ToastController) {
  }

  ngOnInit(): void {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

}
