import React from 'react';

const SearchMenu = ({ tags, categories, handleSearchChange, handleTagClick }) => {
  // Add a check for the existence of the tags array
  if (!tags) {
    return null; // Return null or a loading message while waiting for the data
  }

  return (
    <div className='flex justify-center space-x-4 my-4'>
      <button onClick={() => handleTagClick('')} className='text-blue-600 hover:text-blue-800 transition'>
        Todos
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className='text-blue-600 hover:text-blue-800 transition'
        >
          {tag}
        </button>
      ))}

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleTagClick(category)}
          className='text-blue-600 hover:text-blue-800 transition'
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default SearchMenu;
