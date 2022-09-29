import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/Auth-service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
})
export class AdminHomeComponent implements OnInit {
  addproducts = false;
  updateProducts = false;
  loadedFeature = 'addNewProduct';

  constructor(private _AuthGuard: AuthService) {}

  ngOnInit(): void {}

  onAddProducts() {
    this.addproducts = true;
  }

  onUpdateProducts() {
    this.updateProducts = true;
  }

  Onlogout() {
    this._AuthGuard.logout();
  }

  onSelect(feature: string) {
    this.loadedFeature = feature;
  }
}
