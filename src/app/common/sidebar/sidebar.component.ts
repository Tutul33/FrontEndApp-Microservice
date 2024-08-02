import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  menuName: string;
  menuIcon: string;
  url: string;
  subMenu?: MenuItem[]; // Recursive structure for nested menus
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
   menuList: MenuItem[] = [
    {
      id: 1,
      menuName: 'Dashboard',
      menuIcon: 'bi bi-house',
      url: '/dashboard',
    },
    {
      id: 2,
      menuName: 'Components',
      menuIcon: 'bi bi-gear',
      url: '/components',
      subMenu: [
        {
          id: 3,
          menuName: 'Alerts',
          menuIcon: 'bi bi-bell',
          url: '/components/alerts',
        },
        {
          id: 4,
          menuName: 'Buttons',
          menuIcon: 'bi bi-hand-thumbs-up',
          url: '/components/buttons',
        },
        {
          id: 5,
          menuName: 'Cards',
          menuIcon: 'bi bi-card-text',
          url: '/components/cards',
          subMenu: [
            {
              id: 6,
              menuName: 'Card Types',
              menuIcon: 'bi bi-card-checklist',
              url: '/components/cards/types',
            },
            {
              id: 7,
              menuName: 'Card Layouts',
              menuIcon: 'bi bi-layout-sidebar',
              url: '/components/cards/layouts',
            },
          ],
        },
      ],
    },
    {
      id: 8,
      menuName: 'Forms',
      menuIcon: 'bi bi-journal-text',
      url: '/forms',
      subMenu: [
        {
          id: 9,
          menuName: 'Form Elements',
          menuIcon: 'bi bi-pen',
          url: '/forms/elements',
        },
        {
          id: 10,
          menuName: 'Form Layouts',
          menuIcon: 'bi bi-layout-wtf',
          url: '/forms/layouts',
        },
      ],
    },
    {
      id: 11,
      menuName: 'Tables',
      menuIcon: 'bi bi-table',
      url: '/tables',
      subMenu: [
        {
          id: 12,
          menuName: 'General Tables',
          menuIcon: 'bi bi-grid',
          url: '/tables/general',
        },
        {
          id: 13,
          menuName: 'Data Tables',
          menuIcon: 'bi bi-database',
          url: '/tables/data',
        },
      ],
    },
    {
      id: 14,
      menuName: 'Charts',
      menuIcon: 'bi bi-bar-chart',
      url: '/charts',
      subMenu: [
        {
          id: 15,
          menuName: 'Chart.js',
          menuIcon: 'bi bi-bar-chart-line',
          url: '/charts/chartjs',
        },
        {
          id: 16,
          menuName: 'ApexCharts',
          menuIcon: 'bi bi-pie-chart',
          url: '/charts/apexcharts',
        },
      ],
    },
    {
      id: 17,
      menuName: 'Icons',
      menuIcon: 'bi bi-gem',
      url: '/icons',
      subMenu: [
        {
          id: 18,
          menuName: 'Bootstrap Icons',
          menuIcon: 'bi bi-bootstrap',
          url: '/icons/bootstrap',
        },
        {
          id: 19,
          menuName: 'Font Awesome',
          menuIcon: 'bi bi-star',
          url: '/icons/fontawesome',
        },
      ],
    },
    {
      id: 20,
      menuName: 'Profile',
      menuIcon: 'bi bi-person',
      url: '/profile',
    },
  ];
  
   
  
}
