import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, CardActions, CardContent } from '@material-ui/core';

function ItemBlock(props) {

    const {image,title,size} = props.data;

    console.log(props);
    return (
        <Card>
            <CardActionArea>
                <div className="size-circle">{size}</div>
                <CardMedia
                    image={image}
                    title={title}
                    className="item-block"
                />
                <CardContent>
                    {title}
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

ItemBlock.propTypes = {
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
