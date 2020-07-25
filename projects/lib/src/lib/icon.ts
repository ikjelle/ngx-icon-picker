export class Icon {
  name: string;
  id: string;
  filter?: string[];
  aliases?: string[];
  type?: IconType;
  prefix?: string;
}

export enum IconType {
  FONT_AWESEOME,
  BOOTSTRAP,
  FONT_AWESEOME5,
  MATERIAL,
}
