// FolderPage.jsx

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import rawData from '../data';
import FileItem from '../components/FileItem';
import Breadcrumb from '../components/Breadcrumb';
import useFileSortingAndFiltering from '../hooks/useFileSortingAndFiltering';


const FolderPage = () => {
    const { id } = useParams(); // Get folder ID from the URL
    const folder = rawData.find(item => item.id === parseInt(id));

    const [sortBy, setSortBy] = useState('added'); // Default sorting criterion
    const [sortOrder, setSortOrder] = useState('asc'); // Default sort order
    const [filter, setFilter] = useState('');

    const sortedAndFilteredFiles = useFileSortingAndFiltering(folder.files, sortBy, sortOrder, filter);


    // If the folder with the specified id is found, render its contents
    if (folder) {

        const breadcrumbItems = [
            { id: 1, label: 'Home', url: '/' },
            { id: 2, label: folder.name, url: `/folder/${id}` }
        ];



        return (
            <>
                <div>
                    <Breadcrumb items={breadcrumbItems} />

                    <div className='flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0 text-gray-900 mt-4'>
                        <input
                            className='w-full sm:max-w-[280px] bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded focus:ring-blue-500 focus:border-blue-500 h-10 p-2.5'
                            type="text"
                            placeholder="Filter by filename"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        />
                        <div className='inline-flex space-x-2'>
                            <label htmlFor='sort-select' className='p-2.5 h-8'>Sort by:</label>
                            <span className='sr-only'> Sort by name, date added, size or file type.</span>
                            <select id='sort-select' value={sortBy} onChange={(e) => setSortBy(e.target.value)}
                                className='w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded focus:ring-blue-500 focus:border-blue-500 h-10 p-2'
                            >
                                <option value=""></option>
                                <option value="date">Date</option>
                                <option value="name">Name</option>
                                <option value="size">Size</option>
                                <option value="type">Type</option>
                            </select>

                            <label htmlFor='sort-order-select' className='sr-only'> Sort in ascending or descending order.</label>
                            <select
                                className='w-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-md rounded focus:ring-blue-500 focus:border-blue-500 h-10 p-2' id='sort-order-select' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                                <option value="asc">Asc</option>
                                <option value="desc">Dsc</option>
                            </select>
                        </div>
                    </div>

                    <hr className='bg-neutral-100 my-4' />
                    <h2 className='text-lg text-gray-900 font-light leading-8 my-3'>Folder Name: {folder.name}</h2>

                    <div className='my-12'>
                        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
                            {sortedAndFilteredFiles.map((file) => (
                                <li key={file.id} className='flex flex-col h-full justify-center items-center bg-neutral-200 p-6 rounded'>
                                    <FileItem file={file} />

                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </>
        );
    } else {
        // If the folder is not found, render a message indicating that it doesn't exist
        return (
            <div>
                <h1>Folder not found!</h1>
            </div>
        );

    }
};


export default FolderPage;
