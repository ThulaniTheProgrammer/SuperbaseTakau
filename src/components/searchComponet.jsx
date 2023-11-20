import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedTexts, setSearchedTexts] = useState([]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (searchText.trim() !== '') {
      setSearchedTexts((prevSearchedTexts) => [...prevSearchedTexts, searchText]);
      setSearchText('');
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          placeholder="Enter search text..."
        />
        <button onClick={handleSearch} className='text-white'>Search</button>
      </div>

  
    </div>
  );
};

export default SearchComponent;