import Entry from '../clients/Entry';
import AboutUs from '../clients/AboutUs';

const route = [
  {
    component: Entry,
    routes: [
      {
        path: '/',
        exact: true,
        component: Entry
      },
      {
        path: '/about-us',
        component: AboutUs
      }
    ]
  }
];

export default route;