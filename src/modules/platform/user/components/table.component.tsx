import { useEffect, useState } from "react";
import { fetchCampaignList } from "../../admin/admin.actions";
import TableAction from "./table.actions";
import { headers } from "../headers";
import { Campaign } from "../interfaces";
import TableHead from "./table-head.component";
import TableBody from "./table-body.component";

export function Table(): JSX.Element {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [campaignList, setCampaignList] = useState<Campaign[]>([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");
    const [count, setCount] = useState(null);

    const [itemsPerPage, setItemsPerPage] = useState(10);

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        fetchCampaignList(setCampaignList, setNext, setPrev, setItemsPerPage);
    }, []);

    function handleRowClick(row: Campaign) {
        setSelectedRow(row.id);
        setDisabled(false);
    }

    return (
        <div className="container mt-2 shadow pt-4 rounded">
            <TableAction
                disabled={disabled}
                modalIsOpen={modalIsOpen}
                setIsOpen={setIsOpen}
                openModal={openModal}
            />

            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <TableHead headers={headers} />
                    <TableBody
                        itemsPerPage={itemsPerPage}
                        selectedRow={selectedRow}
                        campaignList={campaignList}
                        handleRowClick={handleRowClick}
                        headers={headers}
                        next={next}
                        setCampaignList={setCampaignList}
                        setNext={setNext}
                        setPrev={setPrev}
                        setItemsPerPage={setItemsPerPage}
                        prev={prev}
                        count={count}
                        setCount={setCount}
                    />
                </table>
            </div>
        </div>
    );
}
