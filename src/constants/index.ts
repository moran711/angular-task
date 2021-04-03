import paths, { IPaths } from './paths.constants';
import menuItems, { IMenuItem } from './menu-items.constants';
import sidenavOptions, { ISidenavOptions } from './sidenav-options.constants';
import routerLinkActiveOptions, {
  IRouterLinkActiveOptions,
} from './router-link-active-options.constants';

interface IConfig {
  paths: IPaths;
  menuItems: IMenuItem[];
  sidenavOptions: ISidenavOptions;
  routerLinkActiveOptions: IRouterLinkActiveOptions;
}

const config: IConfig = {
  paths,
  menuItems: menuItems,
  sidenavOptions: sidenavOptions,
  routerLinkActiveOptions,
};

export default config;
