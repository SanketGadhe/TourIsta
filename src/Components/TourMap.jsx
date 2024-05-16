import React, { useState } from 'react';

const TourMap = () => {
  // Sample array of locations
  const locations = [
    { id: 1, name: 'Ram Mandir' },
    { id: 2, name: 'India Gate' },
    { id: 3, name: 'Brahma Sarovar' },
    { id: 4, name: 'Vaishnavi Devi' },
    { id: 5, name: 'Taj Mahal' },
    // Add more locations as needed
  ];
  
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // State for the search result
  const [searchResult, setSearchResult] = useState(null);

  // Function to handle the search
  const handleSearch = () => {
    const result = locations.find(location => 
      location.name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(result);
  };

  return (
    <div className='bg-[#20022d] h-[140vh] px-10 py-10' >
      <h1>Tour Map</h1>
      <input 
        type="text" 
        placeholder="Search location" 
        className='text-black px-3 py-1 rounded-lg'
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <button onClick={handleSearch} className='px-2 py-1 bg-[#b3dd62] text-lg font-medium rounded-full text-black '>Search</button>
      {searchResult ? (
        <div>
          <h2>Location Found:</h2>
          <p>{searchResult.name}</p>
        </div>
      ) : searchTerm && (
        <div>
          <h2>Location not found</h2>
        </div>
      )}
      {searchResult ? (<div className="img"><img src={`src/Maps/${searchResult.name}.png`} alt="" /></div>):''}
    </div>
  );
};

export default TourMap;
