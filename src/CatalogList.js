import React from 'react';
import Catalog from './Catalog';

const CatalogList=(props)=>
{
  return (
    <div>
        <div className="catalogstyle ma4 bg-light-purple dib pa4 tc grow shadow-4">
    
      <img src={`https://joeschmoe.io/api/v1/{props.name}`} alt="Avatar" />
      <h1 className="">{props.name}</h1>
      <p1>{props.id}</p1>
    </div>
    </div>
  );
}

export default CatalogList;