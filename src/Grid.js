import React, { useEffect } from "react";
import "./Grid.css"; // Create a CSS file for styling (Grid.css)
import cohen_head from "/Users/mbailey/myfirstreactapp/src/cohen_face.jpeg";

const Grid = (props) => {
  // Sample image URLs
  const imageUrls = [
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    cohen_head,
    // Add more image URLs here
  ];
  console.log(props.partyMode);
  //   useEffect(() => {
  //     console.log("Party Mode prop updated:", props.partyMode);
  //   }, [props.partyMode]);

  return (
    <div className="grid-container">
      {imageUrls.map((imageUrl, index) => (
        <div
          className="image-container"
          key={index}
          style={{
            animation: props.partyMode
              ? "App-logo-spin infinite 2s linear"
              : "",
          }}
        >
          <img src={imageUrl} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
