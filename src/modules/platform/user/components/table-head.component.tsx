const TableHead = ({ headers }: any) => {
    return (
        <thead className="thead-light">
            <tr>
                {headers.map((header: any) => (
                    <th className="table-dark" key={header} scope="col">
                        {header}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
