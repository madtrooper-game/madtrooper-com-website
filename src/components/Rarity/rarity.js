import React from "react";

const item = (props) => {
  const { link, image, desc } = props;
  return (
    <div {...props}>
      <a href={link} target="_blank" title={desc}>
        <img src={image} width="150px" />
      </a>
    </div>
  );
};

export default item;
