import { LayerType } from "../Enum/layer-type";

export interface IBaseLayer {
  name? : string;
  type: LayerType;
  data?: any;
  zIndex?: number;
  visible?: boolean;
  opacity?: number;
  width?: number;
  height?: number;
  rotation? : number;
  scale? : number;
  attachedDisplayID?: Array<number>;
  parent: IBaseLayer|null;
}
