import React from "react";
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

interface IProps{
    title:string;
    items:any;
}

const CollectionPreview: React.FC<IProps> = ({title, items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                    {items
                    .filter((item:any, index:number)=>index < 4)
                    .map(({id , ...itemProps }:any)=>(
                        <CollectionItem key={id} {...itemProps}/>
                    ))}
            </div>
        </div>
    )
}

export default CollectionPreview;