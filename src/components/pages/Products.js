import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';

class Products extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-5">
                    <InfoConsumer>
                        {data => {
                            return  data.info.map(item => {
                                return <Info  key={item.id} item={item}  />
                            })
                        }}
                    </InfoConsumer>
                </div>
            </div>
        )
    }
}

export default Products;