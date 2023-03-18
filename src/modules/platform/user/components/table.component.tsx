import React, { useEffect, useState } from "react";
import { getCampaignList, sortData } from "../user.actions";

interface Campaign {
    id: number;
    name: string;
    createdBy: string;
    status: string;
    time: string;
    impression: string;
    totatlBA: string;
    allow_duplicate: boolean;
    description: string;
}

export function Table(): JSX.Element {
    const [disabled, setDisabled] = useState<boolean>(true);
    const [selectedRow, setSelectedRow] = useState<number | null>(null);
    const [campaignList, setCampaignList] = useState<Campaign[]>([]);

    useEffect(() => {
        async function fetchCampaignList() {
            try {
                if (localStorage.getItem("userType") === "Admin") {
                    const res: any = await getCampaignList();
                    console.log("CampaignList", res.results);
                    const data = sortData(res.results);

                    setCampaignList(data);
                }
            } catch (error) {
                console.error(error);
            }
        }
        fetchCampaignList();
    }, []);

    function handleRowClick(row: Campaign) {
        setSelectedRow(row.id);
        setDisabled(false);
    }

    const headers: string[] = [
        "id",
        "name",
        "createdBy",
        "status",
        "time",
        "impression",
        "totatlBA",
        "allow_duplicate",
        "description",
    ];

    return (
        <div className="container mt-5 shadow pt-4">
            <div className="row justify-content-end mb-4">
                <div className="col-auto">
                    <button
                        className="btn btn-primary mx-2"
                        disabled={disabled}
                    >
                        Edit
                    </button>
                </div>
                <div className="col-auto">
                    <button
                        className="btn btn-success mx-2"
                        disabled={disabled}
                    >
                        Approve
                    </button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger mx-2" disabled={disabled}>
                        Delete
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            {headers.map((header) => (
                                <th key={header} scope="col">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
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
                                    <td key={header} className="align-middle">
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
