// src/components/FolderItem.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FolderItem({ folder }) {

    return (
        <Link className='text-inherit' to={`/folder/${folder.id}`}>
            <div className='flex flex-col space-y-2 justify-start items-center'>
                <svg className="w-8 md:w-16 h-8 md:h-20 text-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z" />
                </svg>
                <div className='flex flex-col space-y-1 justify-start items-center text-center'>
                    <h3 className='text-sm md:text-lg text-gray-800'>{folder.name}
                    </h3>
                    {folder.type === 'folder' &&
                        <span className='text-xs md:text-sm text-gray-500'>{folder.files.length} Items</span>}
                </div>
            </div>
        </Link>
    );
}

// Define PropTypes for FolderItem
FolderItem.propTypes = {
    folder: PropTypes.shape({
        id: PropTypes.number.isRequired, // Add id to PropTypes
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        files: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};


export default FolderItem;
