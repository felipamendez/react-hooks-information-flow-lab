import Item from "./Item"

function Filter ( {items, onCategoryChange, selectedCategory} ) { 

    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;
    
        return item.category === selectedCategory;
      });

    return (
    <>
    <div className="Filter">
        <select name="filter" onChange={onCategoryChange}>
         <option value="All">Filter by category</option>
         <option value="Produce">Produce</option>
         <option value="Dairy">Dairy</option>
         <option value="Dessert">Dessert</option>
        </select>
     </div>
    <ul className="Items">
         {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
        ))}
    </ul>
    </>
    )

}

export default Filter