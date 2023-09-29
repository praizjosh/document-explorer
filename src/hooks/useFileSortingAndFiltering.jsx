import { useState, useEffect } from 'react';

function useFileSortingAndFiltering(rawData, sortBy, sortOrder, filter) {
    const [filteredData, setFilteredData] = useState(rawData);

    useEffect(() => {
        // Create a copy of the data array to avoid mutating the original
        const sortedAndFilteredData = [...rawData];

        // Implement sorting logic based on the criteria and sort order
        sortedAndFilteredData.sort((a, b) => {
            let comparison = 0;

            if (sortBy === 'name') {
                comparison = a.name.localeCompare(b.name);
            } else if (sortBy === 'size') {
                const sizeA = a.size ? parseFloat(a.size) : 0;
                const sizeB = b.size ? parseFloat(b.size) : 0;
                const sizeUnitA = a.size && a.size.toLowerCase().includes('mb') ? sizeA * 1000 : sizeA;
                const sizeUnitB = b.size && b.size.toLowerCase().includes('mb') ? sizeB * 1000 : sizeB;
                comparison = sizeUnitA - sizeUnitB;
            } else if (sortBy === 'date') {
                comparison = new Date(a.added) - new Date(b.added);
            } else if (sortBy === 'type') {
                comparison = a.type.localeCompare(b.type);
            }

            // Apply sort order
            if (sortOrder === 'desc') {
                comparison *= -1;
            }

            return comparison;
        });

        // Implement filtering logic based on the filter text
        const filteredDataArray = sortedAndFilteredData.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase())
        );

        // Update the component state with the sorted and filtered data
        setFilteredData(filteredDataArray);
    }, [filter, sortBy, sortOrder, rawData]); // Dependencies: filter, sortBy, sortOrder, and rawData

    return filteredData;
}

export default useFileSortingAndFiltering;
