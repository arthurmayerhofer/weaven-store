import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ProductRow from '../products/ProductRow';
import { connect } from 'react-redux';

class ProductsBanner extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="custom-container py-5 my-5">
        <div className="d-flex flex-column align-items-center mb-2 pb-4">
          <p className="font-color-medium mb-4">
          Apresentando nossos produtos mais recentes
          </p>
          <p
            className="text-center font-size-display1 mb-3 font-weight-medium"
            style={{ maxWidth: '32rem' }}
          >
            {/* Limited reservations on upcoming products and restocks. */}
            Nova Coleção
          </p>
          {/* <Link href="/collection">
            <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
              <p className="mr-3">Veja mais</p>
              <img src="/icon/arrow-long-right.svg" />
            </a>
          </Link> */}
        </div>
        <ProductRow products={products.slice(0, 4)} />
          <div className="d-flex flex-column align-items-center mb-5 pb-4">
            <Link href="/collection">
              <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
                <p className="mr-3">Veja mais</p>
                <img src="/icon/arrow-long-right.svg" />
              </a>
            </Link>
          </div>
      </div>
    );
  }
}

ProductsBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsBanner.defaultProps = {
  products: [],
};

export default connect(state => state)(ProductsBanner);
