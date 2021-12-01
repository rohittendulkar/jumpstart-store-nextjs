import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";
import Link from "next/link";

const About = () => (
  <Root>
    <Head>
      <title>About | Jumpstart</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">JumpStart Online Store</h2>
            <h4 className="font-size-subheader mb-4">
              JumpStart is a retail store with 750 stores nationwide. We are known for the quality 
            </h4>
            <div className="about-cjs mt-3 d-flex flex-row">
              <a
                className="px-4 py-3 font-color-white about-doc"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Find Stores Near You
              </a>
              <a className="px-4 py-3 about-dev" href="#" target="_blank" rel="noopener noreferrer">
                Visit the Community Forum
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                style={{
                  width: "504px",
                  height: "650px",
                  objectFit: "cover",
                }}
                src="/jsstores.jpg"
                alt="jumpstart-stores"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                style={{
                  width: "504px",
                  height: "650px",
                  objectFit: "cover",
                }}
                src="/jsstores.jpg"
                alt="jumpstart-stores"
              />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">We develop quality products for everyone</h3>
            <h4 className="font-size-subheader mb-4">
              We make sure that our products are of the best quality when we deliver to our
              customers. We provide top level peripherals at the best price that you can find.
            </h4>
            <div className="mt-3">
              <Link href="/collection">
                <a
                  className="px-4 py-3 flex-grow-1 font-color-white about-net"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See our Products
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
