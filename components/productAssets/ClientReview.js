import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    stars: '5',
    title: 'Perfeito',
    description: 'Caimento e sensação ótimos. Levam o relaxamento para o próximo nível!',
    reviewBy: 'Heidi C.',
    date: 'Dezembro de 2019'
  },
  {
    stars: '3.5',
    title: 'Muito confortável!',
    description:
      'Comprei um tamanho maior só por precaução e meio que me arrependi. Muito confortável e vivo exclusivamente neles durante o fim de semana.',
    reviewBy: 'Heidi C.',
    date: 'Dezembro de 2019'
  },
  {
    stars: '4',
    title: 'Confortável mas fino',
    description:
      'Confortável, mas meio fino para uma calça. Normalmente uso calça 32/33 e tive que aumentar para XL para não ficar parecendo uma legging. Estou usando bastante há cerca de um mês e tem um pouco de bolinha, mas não muito. Bom preço para um produto OK.',
    reviewBy: 'Heidi C.',
    date: 'Dezembro de 2019'
  },
  {
    stars: '5',
    title: 'Muito confortável!',
    description:
      'Comprei um tamanho maior só por precaução e meio que me arrependi. Muito confortável e vivo exclusivamente neles durante o fim de semana.',
    reviewBy: 'Heidi C.',
    date: 'Dezembro de 2019'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              Todas avaliações
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.3 estrelas de 10 avaliações
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                Veja todas avaliações
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
