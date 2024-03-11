import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DashboardSidebarComponent {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/dashboard'
    },
    {
      title: 'My cars',
      icon: 'car-outline',
      link: '/my-cars'
    },
    {
      title: 'Settings',
      icon: 'settings-outline',
    },
    {
      title: 'Logout',
      icon: 'unlock-outline',
    },
  ];
}
