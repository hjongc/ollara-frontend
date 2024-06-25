'use client';

import React, { ChangeEvent } from 'react';

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => (
  <div className="p-2">
    <input
      type="text"
      value={query}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
      placeholder="Search for stocks or companies"
      className="w-full p-2 rounded-lg border border-gray-300"
    />
  </div>
);

export default SearchBar;
