import { LayerType } from "../Enum/layer-type";
import { IBaseLayer } from "../Interface/base-layer";



export class Layer implements IBaseLayer{
  static layer_id = 0
  name = "Layer" +  Layer.layer_id++;
  type = LayerType.UNKNOWN;
  data= null;
  zIndex= 0;
  visible= false;
  opacity= 100.0;
  width= undefined;
  height= undefined;
  rotation = 0.0;
  scale = 100.0;
  attachedDisplayID= new Array<number>();
  parent = null;
}
