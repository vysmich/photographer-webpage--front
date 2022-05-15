function FilterButtons({ categoriesData, state }) {
  return (
    <ul className="mb-16 flex justify-around">
      {categoriesData.map((category, index) => (
        <li className=" list-none" key={index}>
          <button
            className="bg-primary py-3 px-20 text-center uppercase tracking-wider text-white"
            onClick={() => state(category.attributes.Categories)}
          >
            {category.attributes.Categories}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FilterButtons;
