const headers: string[] = [
    "ID",
    "NAME",
    "BY",
    "STATUS",
    "TIME",
    "PARTICIPANTS",
    "BA",
    "DUPPLICATE",
    "DUPLICATE ACROSS",
    "REWARD",
    "DESCRIPTION",
];

const TableHead = () => {
    return (
        <thead className="thead-light">
            <tr>
                {headers.map((header: any) => (
                    <th
                        style={{
                            fontSize: "11px",
                        }}
                        className="table-dark"
                        key={header}
                        scope="col"
                    >
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
