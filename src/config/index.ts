import paths, { IPaths } from './paths';
import menuItems, { IMenuItem } from './menu-items';
import sidenavOptions, { ISidenavOptions } from './sidenav-options';
import routerLinkActiveOptions, {
  IRouterLinkActiveOptions,
} from './router-link-active-options';

interface IConfig {
  paths: IPaths;
  menuItems: IMenuItem[];
  sidenavOptions: ISidenavOptions;
  routerLinkActiveOptions: IRouterLinkActiveOptions;
}

const config: IConfig = {
  paths,
  menuItems,
  sidenavOptions,
  routerLinkActiveOptions,
};

export default config;
