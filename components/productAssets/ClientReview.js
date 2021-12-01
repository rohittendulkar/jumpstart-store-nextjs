import React, { Component } from "react";
import ReviewList from "./ReviewList";
import Modal from "../common/atoms/Modal";

const reviews = [
  {
    stars: "5",
    title: "Perfect",
    description:
      "Love the Quality and Creativity of Jumpstart products! Receiving the same quality for a good price without visiting the store has been a good experience.",
    reviewBy: "R10T",
    date: "December, 2021",
  },
  {
    stars: "4.5",
    title: "Love it!",
    description:
      "Love the Quality and Creativity of Jumpstart products! Receiving the same quality for a good price without visiting the store has been a good experience.",
    reviewBy: "Shreyas Uttekar",
    date: "December, 2021",
  },
  {
    stars: "4",
    title: "Bang for Buck",
    description:
      "Love the Quality and Creativity of Jumpstart products! Receiving the same quality for a good price without visiting the store has been a good experience.",
    reviewBy: "Abhay Wuntkal",
    date: "December, 2021",
  },
  {
    stars: "5",
    title: "Beast Performance!",
    description:
      "Love the Quality and Creativity of Jumpstart products! Receiving the same quality for a good price without visiting the store has been a good experience.",
    reviewBy: "Shivam Mishra ",
    date: "December, 2021",
  },
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
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
        <Modal isOpen={open} onClose={this.handleClose} maxW="1000px">
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">All reviews</p>
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
                4.3 stars from 10 reviews
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                View all reviews
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
