import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

function ItemBlock(props) {

    const {image,title,size,price} = props.data;
    const {setOpen} = props;

    const handleClick = () => {
        setOpen(true)
    };


    console.log(props);
    return (
        <Card>
            <CardActionArea onClick={handleClick}>
                {
                    (size) ? <div className="size-circle">{size}</div> : null
                }
                <CardMedia
                    image={image}
                    title={title}
                    className="item-block"
                />
                <CardContent>
                    {title} <b>{price}₪</b>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

ItemBlock.propTypes = {
    setOpen: PropTypes.func,
    data: PropTypes.shape(
                    {
                        id: PropTypes.string,
                        image: PropTypes.string,
                        'origin-store-title': PropTypes.string,
                        'category-parent': PropTypes.string,
                        'category-child': PropTypes.string,
                        color: PropTypes.string,
                        title: PropTypes.string,
                        price: PropTypes.number
                    }
    )
};

export default ItemBlock;
