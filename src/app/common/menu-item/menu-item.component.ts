import { Component, Input } from '@angular/core';
interface MenuItem {
  id: number;
  menuName: string;
  menuIcon: string;
  url: string;
  subMenu?: MenuItem[]; // Recursive structure for nested menus
}
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  @Input() menuItem!: MenuItem;
}
