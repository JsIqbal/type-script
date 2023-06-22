import { useState } from "react";

import { adminActions } from "../..";
import { svgIcon } from "../../../../core";

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
    setItem,
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
                    onClick={() => {
                        adminActions.fetchCampaignList(
                            setCampaignList,
                            setNext,
                            setPrev,
                            setItemsPerPage,
                            prev
                        );
                    }}
                >
                    {svgIcon.previous}
                </a>
            </li>
            {
                <li className={`page-item `}>
                    <a
                        style={{
                            zIndex: 0,
                        }}
                        className="page-link"
                    >
                        1
                    </a>
                </li>
            }
            <li className="page-item">
                <button
                    className={
                        next === null
                            ? "disabled page-link"
                            : "active page-link"
                    }
                    disabled={next === null ? true : false}
                    onClick={() => {
                        setCurrentPage(currentPage + 1);
                        adminActions.fetchCampaignList(
                            setCampaignList,
                            setNext,
                            setPrev,
                            setItemsPerPage,
                            next
                        );
                    }}
                >
                    {svgIcon.next}
                </button>
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
                        onClick={() => {
                            handleRowClick(item);
                            setItem(item);
                        }}
                    >
                        {headers.map((header: any) => (
                            <td
                                style={{
                                    fontSize: "12px",
                                }}
                                key={header}
                                className="align-middle pt-0 pb-0"
                            >
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
