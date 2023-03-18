interface ActionProp {
    disabled: boolean;
}

const TableAction = ({ disabled }: ActionProp) => {
    return (
        <div className="row justify-content-end mb-4">
            <div className="col-auto">
                <button className="btn btn-primary mx-2" disabled={disabled}>
                    Edit
                </button>
            </div>
            <div className="col-auto">
                <button className="btn btn-success mx-2" disabled={disabled}>
                    Approve
                </button>
            </div>
            <div className="col-auto">
                <button className="btn btn-danger mx-2" disabled={disabled}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TableAction;
