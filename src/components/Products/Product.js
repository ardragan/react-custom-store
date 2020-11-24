import React, {useState} from 'react';

import {InputGroup, FormControl, Button, Row, Col} from 'react-bootstrap';

import Card from '../UI/Card';
import {useStore} from '../../hooks-store/store';
import styled from 'styled-components';
import {useDispatch} from "react-redux";

const ProductItem = styled.h2`
  font-size: 1.15rem;
  margin: 0.25rem 0;
`;

const ProductItemIsFav = styled.h2`
  color: #ff2058;
`;

const ProductDescription = styled.p`
  margin: 0.25rem 0;
`;

const Product = ({id, title, description, isSelected}) => {
    // const [, dispatch] = useStore();
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(0);

    const toggleFavHandler = () => {
        // dispatch('TOGGLE_FAV', {
        //     productId: id,
        //     qty: quantity
        // });

        dispatch({
            type: 'TOGGLE_FAV',
            payload: {
                productId: id,
                qty: quantity
            }
        });
    };

    return (
        <Card style={{marginBottom: '1rem'}}>
            <div className="product-item">
                {isSelected ? <ProductItem>{title}</ProductItem> : <ProductItemIsFav>{title}</ProductItemIsFav>}

                <ProductDescription>{description}</ProductDescription>

                <Row>
                    <Col sm={3}>
                        <InputGroup className="mb-1">
                            {
                                isSelected ||
                                <FormControl
                                    placeholder="0"
                                    aria-label="Qty..."
                                    aria-describedby="basic-addon2"
                                    type="number"
                                    min="0"
                                    onChange={e => setQuantity(e.target.value * 1)}
                                />
                            }
                            <InputGroup.Append>
                                <Button variant={!isSelected ? 'primary' : 'danger'} onClick={toggleFavHandler}>
                                    {isSelected ? 'Un-AddProduct' : 'Add item'}
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
        </Card>
    );
};

export default Product;
