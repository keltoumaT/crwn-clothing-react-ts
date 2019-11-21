import React from "react";
import './shop.data'
import { SHOP_DATA } from "./shop.data";
import CollectionPreview from '../../components/preview-collection/collection-preview.component';


interface IState{
    collections:Array<any>;
}
class ShopPage extends React.Component<{}, IState>{
    constructor(props:any){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
        console.log(this.state.collections)

    }

   render(){

    const collection:any = this.state.collections;
       return(
          <div className="shop-page">
              {collection.map(({id, ...otherCollectionProps}:any)=>(
                  
                  <CollectionPreview key={id} {...otherCollectionProps} />
              ))}
          </div>
       )
   }
}

export default ShopPage;