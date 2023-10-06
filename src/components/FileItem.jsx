// src/components/FileItem.jsx

import PropTypes from 'prop-types';

function FileItem({ file }) {
    return (
        <div className='flex flex-col space-y-2 justify-start items-center'>
            {file.type === 'pdf' ? (
                <svg className="w-8 md:w-16 h-8 md:h-20 text-red-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.5 11H4v1h.5a.5.5 0 0 0 0-1ZM7 5V.13a2.96 2.96 0 0 0-1.293.749L2.879 3.707A2.96 2.96 0 0 0 2.13 5H7Zm3.375 6H10v3h.375a.624.624 0 0 0 .625-.625v-1.75a.624.624 0 0 0-.625-.625Z" />
                    <path d="M19 7h-1V2a1.97 1.97 0 0 0-1.933-2H9v5a2 2 0 0 1-2 2H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h1a1.969 1.969 0 0 0 1.933 2h12.134c1.1 0 1.7-1.236 1.856-1.614a.988.988 0 0 0 .07-.386H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM4.5 14H4v1a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h1.5a2.5 2.5 0 1 1 0 5Zm8.5-.625A2.63 2.63 0 0 1 10.375 16H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1.375A2.63 2.63 0 0 1 13 11.625v1.75ZM17 12a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-1v1h1Z" />
                    {/* SVG path for PDF */}
                </svg>
            ) : file.type === 'csv' || file.type === 'doc' || file.type === 'xls' || file.type === 'txt' || file.type === 'ppt' || file.type === 'pptx' ? (
                <svg className="w-8 md:w-16 h-8 md:h-20 text-green-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2Z" />
                    {/* SVG path for DOC */}
                </svg>
            ) : (
                <svg className="w-8 md:w-16 h-8 md:h-20 text-blue-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                    {/* SVG path for other file types */}
                </svg>
            )}

            <div className='flex flex-col space-y-1 justify-center items-center text-center'>
                <h3 className='text-sm md:text-lg text-gray-800'>{file.name + '.' + file.type}</h3>
                <span className='text-xs md:text-sm text-gray-500'>{file.added}</span>
                <span className='text-xs md:text-sm text-gray-500'>
                    {/* Check if the 'file.size' property exists and has a truthy value else don't render. */}
                    {file.size && <> {file.size} </>}</span>
            </div>
        </div>
    );
}

// Define prop types for FileItem
FileItem.propTypes = {
    file: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        added: PropTypes.string.isRequired,
        size: PropTypes.string.isRequired,
    }).isRequired,
};

export default FileItem;
