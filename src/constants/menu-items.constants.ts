import paths from './paths.constants';

export interface IMenuItem {
  icon: string;
  uri: string;
  text: string;
}

const menuItems: IMenuItem[] = [
  {
    icon: 'home',
    uri: paths.pathToHomePage,
    text: 'Home',
  },
  {
    icon: 'drive_eta',
    uri: paths.pathToCarsPage,
    text: 'Cars',
  },
  {
    icon: 'stars',
    uri: paths.pathToDealersPage,
    text: 'Dealers',
  },
];

export default menuItems;
