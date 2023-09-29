// Breadcrumb.jsx

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumb = ({ items }) => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                {items.map((item, index) => (
                    <li key={item.id} className='flex items-center'>
                        {index > 0 && (
                            <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="m1 9 4-4-4-4" />
                            </svg>
                        )}
                        {item.url ? (
                            <Link to={item.url} className={`ml-1 text-sm font-medium ${index === items.length - 1 ? 'text-gray-500' : 'text-gray-700'} hover:text-blue-600 md:ml-2`}>
                                {item.label}
                            </Link>
                        ) : (
                            <span className={`ml-1 text-sm font-medium ${index === items.length - 1 ? 'text-gray-500' : 'text-gray-700'} md:ml-2`}>
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

Breadcrumb.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            url: PropTypes.string,
        })
    ).isRequired,
};

export default Breadcrumb;
