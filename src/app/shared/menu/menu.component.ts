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
  ) {
    if (localStorage.getItem('Theme') === 'mdc-dark-indigo.css') {
      this.checked = true
    }
  }
  theme: string = "mdc-light-indigo";
  checked!: boolean;
  items!: MenuItem[];


  ngOnInit(): void {

    this.items = [{
      label: 'About',
      icon: 'pi pi-users',
      routerLink: '/#'
    },
    {
      label: 'Discord',
      icon: 'pi pi-discord',
      url: 'https://discord.gg/CeRDgf8GMh'
    },
    {
      label: 'Transactions',
      icon: 'pi pi-wallet',
      items: [
        { label: 'Sell (coming soon)', icon: 'pi pi-dollar' },
        { label: 'Buy (coming soon)', icon: 'pi pi-shopping-bag' },
      ]
    },
    ]
  }

  //Change Theme

  changeTheme(checked: boolean) {
    if (!checked) {
      this.theme = 'mdc-light-indigo'
      this.themeService.switchTheme(this.theme);
    } else {
      this.theme = 'mdc-dark-indigo';
      this.themeService.switchTheme(this.theme)

    }
  }
}
