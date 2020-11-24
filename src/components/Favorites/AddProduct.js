import React from 'react';

import Card from '../UI/Card';
import './AddProduct.css';

const AddProduct = props => {
    return (
        <Card style={{marginBottom: '1rem'}}>
            <div className="favorite-item">
                <h2>{props.title}</h2>
                <p>
                    {props.description}
                    <h4>{props.qty}</h4>
                </p>
            </div>
        </Card>
    );
};

export default AddProduct;
