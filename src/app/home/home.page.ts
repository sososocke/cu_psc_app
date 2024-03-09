import { Component } from '@angular/core';
import { IonButton, IonMenu } from '@ionic/angular/standalone';
import { MenuController } from '@ionic/angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { IonMenuButton } from '@ionic/angular/standalone';
import { IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonMenu, IonButtons, IonMenuButton],
})
export class HomePage {
  constructor() {}
}
