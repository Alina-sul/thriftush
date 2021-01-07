import React, {useState} from 'react';
import data from "../../../../demo";
import ItemBlock from '../../../utils/ItemBlock';
import './MainGallerry.scss';
import FullDialog from "../../../utils/FullDialog";

function MainGallery(props) {

    const[open, setOpen] = useState(false);

    const items = data.users.map((user) =>
        user.items.map((item) =>
            <ItemBlock key={item.id} data={item} setOpen={setOpen}/>));

    console.log(items);


    return (
        <>
        <div className="main-gallery">
            {
                items ? items.map(x => x) : null
            }
        </div>

        <FullDialog open={open} setOpen={setOpen}/>

        </>
    );
}

export default MainGallery;
