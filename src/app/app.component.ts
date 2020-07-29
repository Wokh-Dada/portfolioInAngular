import { Component } from '@angular/core';
import {PortfolioStoreService} from "./portfolio-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private PortfolioStore: PortfolioStoreService) {
  }

  /**
   * временный префикс ссылки для картинок
   */
  public testPathToAssets = "https://cdn.ramman.net/flexy-view/abdullakh/promo/1.01/assets/";

  public testPathToAssetsRet(){
    return this.testPathToAssets;
  }

  getHeader(){
    return this.PortfolioStore.getHeader();
  }

  getLatestWork(){
    return this.PortfolioStore.getLatestWork();
  }

  getExperiments(){
    return this.PortfolioStore.getExperiments();
  }

  getFooter(){
    return this.PortfolioStore.getFooter();
  }

}
