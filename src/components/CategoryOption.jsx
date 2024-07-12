import categories from "../assets/categories";

const CategoryOption = ({ fact }) => {
  const category = categories.find((cat) => cat.name === fact.category);

  if (!category) {
    console.warn(`Category not found for fact: ${fact.category}`);
    return (
      <span className="tag" style={{ backgroundColor: "#16a34a" }}>
        {fact.category}
      </span>
    );
  }

  return (
    <span className="tag" style={{ backgroundColor: category.color }}>
      {fact.category}
    </span>
  );
};

export default CategoryOption;
