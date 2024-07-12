import categories from "../assets/categories"
import CategoryFilterButton from "./CategoryFilterButton"

const CategoryFilter = ({setSpecifiedCategory}) => {

  return (
    <aside>
      <ul className="categories-list">
        <li className="category">
          <button className="btn btn-all-categories" onClick={() => setSpecifiedCategory('All')}>All</button>
        </li>
        {categories.map((cat) => <CategoryFilterButton key={cat.id} cat={cat} onCategoryClick={setSpecifiedCategory} />)}
      </ul>
    </aside>
  )
}

export default CategoryFilter