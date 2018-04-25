export interface ITopNavItem {
  id: number;
  name: string;
  translation?: string;
  path?: string;
  link?: string;
  subRoutes?: Array<ITopNavItem>;
}

export class TopNavRoute implements ITopNavItem {
  id: number;
  name: string;
  path: string;
  link: string;

  constructor(id: number, name: string, rtName?: string, path?: string, link?: string) {
    this.id = id;
    this.name = name;

    if (path) {
      this.path = path;
    }

    if (link) {
      this.link = link;
    }
  }
}
