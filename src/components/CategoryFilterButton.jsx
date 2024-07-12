
const CategoryFilterButton = ({cat, onCategoryClick}) => {
  function handleCategoryClick(){
    onCategoryClick(cat.name);
  }
  return (
    <li className="category">
      <button className="btn btn-category" style={{backgroundColor: cat.color}} onClick={handleCategoryClick}>
       {cat.name}
      </button>
    </li>
  )
}

export default CategoryFilterButton