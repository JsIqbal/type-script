import React, { useEffect, useState } from "react";
import { fetchCampaignList } from "../user.actions";
import TableAction from "./table.actions";
import { headers } from "../headers";
import { Campaign } from "../interfaces";
import TableHead from "./table-head.component";

export function Table(): JSX.Element {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [campaignList, setCampaignList] = useState<Campaign[]>([]);

    useEffect(() => {
        fetchCampaignList(setCampaignList);
    }, []);

    function handleRowClick(row: Campaign) {
        setSelectedRow(row.id);
        setDisabled(false);
    }

    return (
        <div className="container mt-5 shadow pt-4 rounded">
            <TableAction disabled={disabled} />

            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <TableHead headers={headers} />
                    <tbody>
                        {campaignList.map((item: any) => (
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
                                    <td
                                        key={header}
                                        className="align-middle pt-0 pb-0"
                                    >
                                        {item[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
