import React from 'react';
import CatalogList from './CatalogList';
import './Catalog.css'
import 'tachyons'

const Catalog = (props) =>
{
  return (
    <div>
      <h1>Welcome to Donate Your Book</h1>
      <CatalogList id="1" name ="narendra" author="Author1" />
      <CatalogList id="1" name ="raghuwanshi" author="Author2" />
      <CatalogList id="1" name ="abc" author="Author3" />
      <CatalogList id="1" name ="ixx" author="Author4" />
      <button>Donate</button>
    </div>
  );
}


export default Catalog;