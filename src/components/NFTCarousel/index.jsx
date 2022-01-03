import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./custom.scss";

import { nfts } from "./nfts";

const NFTCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={3000}
      infiniteLoop={true}
      showThumbs={true}
      showIndicators={false}
      width={"80%"}
    >
      {nfts.map((nft) => {
        return (
          <div className="image-wrapper" key={nft.id}>
            <img src={nft.image} />
            <div style={{ marginTop: "20px" }}>{nft.description}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default NFTCarousel;
