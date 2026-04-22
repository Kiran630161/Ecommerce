import React from "react";

function CategoryCard({ category, onClick }) {
  return (
    <div
      onClick={() => onClick(category.slug)}
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        cursor: "pointer",
        width: "150px",
        textAlign: "center",
        background: "#0F766E",
        color: "white",
      }}
    >
      <h4>{category.name}</h4>
    </div>
  );
}

export default CategoryCard;