import * as RiLib from "../../../dist/lib";

export const ALL_ICONS = RiLib["IconsManifest"];

export const getIconById = id => {
  return ALL_ICONS.find(i => i.id === id);
};
