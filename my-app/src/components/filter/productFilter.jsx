// ProductFilter.jsx
import React from 'react';
import './styles.scss';

const ProductFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="product-filter">
      <button
        className={`filter-button ${activeCategory === 'all' ? 'active' : ''}`}
        onClick={() => setActiveCategory('all')}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-button ${activeCategory === category ? 'active' : ''}`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;