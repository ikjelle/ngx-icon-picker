import {Icon} from './icon';

export interface IconsPack {
  prefix: string;

  getIcons(): Icon[];
}
