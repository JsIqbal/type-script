import { useState } from "react";
import { fetchCampaignList } from "../../admin.actions";

const TableBody = ({
    selectedRow,
    campaignList,
    handleRowClick,
    headers,
    next,
    setCampaignList,
    setNext,
    setPrev,
    setItemsPerPagenext,
    prev,
}: any) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = campaignList;

    const totalPages = Math.ceil(campaignList.length / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = (
        <>
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <a
                    className="page-link"
                    href="#"
                    onClick={() => {
                        fetchCampaignList(
                            setCampaignList,
                            setNext,
                            setPrev,
                            setItemsPerPage,
                            prev
                        );
                    }}
                >
                    Previous
                </a>
            </li>
            {pageNumbers.map((number) => (
                <li
                    key={number}
                    className={`page-item ${
                        currentPage === number ? "active" : ""
                    }`}
                >
                    <a
                        className="page-link"
                        href="#"
                        onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </a>
                </li>
            ))}
            <li>
                <a
                    className="page-link"
                    href="#"
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        fetchCampaignList(
                            setCampaignList,
                            setNext,
                            setPrev,
                            setItemsPerPage,
                            next
                        );
                    }}
                >
                    Next
                </a>
            </li>
        </>
    );

    return (
        <>
            <tbody>
                {currentItems.map((item: any) => (
                    <tr
                        key={item.id}
                        className={
                            selectedRow === item.id
                                ? "table-primary"
                                : "table-light"
                        }
                        onClick={() => handleRowClick(item)}
                    >
                        {headers.map((header: any) => (
                            <td key={header} className="align-middle pt-0 pb-0">
                                {item[header]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={headers.length}>
                        <ul className="pagination justify-content-center">
                            {renderPageNumbers}
                        </ul>
                    </td>
                </tr>
            </tfoot>
        </>
    );
};

export default TableBody;
