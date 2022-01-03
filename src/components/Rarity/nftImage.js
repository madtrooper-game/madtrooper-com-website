const Image = ({ src, className }) => {
  return (
      <div
      style={{
        backgroundImage: "url(" + "https://edda-cdn.fra1.cdn.digitaloceanspaces.com/madtrooper/loading.gif"+ ")",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}>
          <img
        className={className}
        src={src}
        alt={"NFT Image"}
        id={"img" + src}
        key={"img" + src}
        style={{ width: "150px", height: "150px" }}
        
      ></img>
      </div>
  );
};

export default Image;
