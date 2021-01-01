import React from 'react';
import data from "../../../../demo";
import ItemBlock from '../../../utils/ItemBlock';
import './MainGallerry.scss';

function MainGallery(props) {


    const items = data.users.map((user) => user.items.map((item) => <ItemBlock key={item.id} data={item} />));
    console.log(items);


    return (
        <div className="main-gallery">
            {
                items ? items.map(x => x) : null
            }
        </div>
    );
}

export default MainGallery;
