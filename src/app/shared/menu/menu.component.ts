import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

import { ThemeService } from 'src/app/core/services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) { }
  theme: string = "mdc-dark-indigo";
  checked!: boolean;
  items!: MenuItem[];


  ngOnInit(): void {

    this.items = [{
      label: 'About',
      icon: 'pi pi-users'
    },
    {
      label: 'Discord',
      icon: 'pi pi-discord'
    },
    {
      label: 'Transactions',
      icon: 'pi pi-wallet',
      items: [
        { label: 'Sell', icon: 'pi pi-dollar' },
        { label: 'Buy', icon: 'pi pi-shopping-bag' },
      ]
    },
    ]
  }

  //Change Theme

  changeTheme(checked: boolean) {
    if (!checked) {
      this.theme = 'mdc-dark-indigo';
      this.themeService.switchTheme(this.theme);
    } else {
      this.theme = 'mdc-light-indigo'
      this.themeService.switchTheme(this.theme)

    }
  }
}
