import { Components } from "../models/components/component";
import { Connector } from "../models/components/connector";

class ConnectionManager {


    establishBiDirectionalConnection(component1: Components, component2: Components) {
      const connector = new Connector();
      component1.connections.push(connector);
      component2.connections.push(connector);
    }
  
    // Add other methods for managing connetions
    // true : from comp1 to comp2
    // false : from comp2 to comp1
    establishDirectionalConnection(component1: Components, component2: Components, direction: boolean){
        const connector = new Connector();
        if(direction){
            component1.connections.push(connector);
        }else{
            component2.connections.push(connector);
        }
    }
  }