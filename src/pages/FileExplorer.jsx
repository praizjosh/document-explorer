// src/components/FileExplorer.jsx

import { useState } from 'react';
import rawData from '../data';
import FolderItem from '../components/FolderItem';
import FileItem from '../components/FileItem';
import useFileSortingAndFiltering from '../hooks/useFileSortingAndFiltering';

function FileExplorer() {
    const [filter, setFilter] = useState('');
    const [sortBy, setSortBy] = useState('added'); // Default sorting criterion
    const [sortOrder, setSortOrder] = useState('asc'); // Default sort order
    // Use the custom hook to get filtered and sorted data
    const filteredData = useFileSortingAndFiltering(rawData, sortBy, sortOrder, filter);


    return (
        <div>
            <div className='flex flex-col md:flex-row md:space-x-4 mb-4 leading-none tracking-tight text-gray-900'>
                <div className='inline-flex space-x-1 mb-2 md:mb-0'>
                    <label htmlFor='sort-select' className='p-2.5 h-8'>Sort by:</label>
                    <span className='sr-only'> Sort by name, date added, size or file type.</span>
                    <select id='sort-select' value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded focus:ring-blue-500 focus:border-blue-500 h-10 p-2'
                    >
                        <option value="name">Name</option>
                        <option value="date">Date</option>
                        <option value="size">Size</option>
                        <option value="type">Type</option>
                    </select>

                    <label htmlFor='sort-order-select' className='sr-only'> Sort in ascending or descending order.</label>
                    <select
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded focus:ring-blue-500 focus:border-blue-500 h-10 p-2' id='sort-order-select' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="asc">Asc</option>
                        <option value="desc">Dsc</option>
                    </select>

                </div>
                <input
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded focus:ring-blue-500 focus:border-blue-500 h-10 p-2.5'
                    type="text"
                    placeholder="Filter by filename"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <hr className='bg-neutral-100 my-4' />

            <div className='my-12'>
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
                    {filteredData.map((item) => (
                        <li key={item.id} className='flex flex-col h-full justify-center items-center bg-slate-200 p-6 rounded'>
                            {item.type === 'folder' ? (
                                <FolderItem folder={item} />
                            ) : (
                                <FileItem file={item} />
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FileExplorer;
