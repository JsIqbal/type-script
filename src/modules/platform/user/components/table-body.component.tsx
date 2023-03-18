const TableBody = ({
    selectedRow,
    campaignList,
    handleRowClick,
    headers,
}: any) => {
    return (
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
                        <td key={header} className="align-middle pt-0 pb-0">
                            {item[header]}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;
