import paths, { IPaths } from './paths';
import menuItems, { IMenuItem } from './menu-items';

interface IConfig {
  paths: IPaths;
  menuItems: IMenuItem[];
}

const config: IConfig = {
  paths,
  menuItems,
};

export default config;
