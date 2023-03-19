const ModalForm = ({
    createCampaign,
    formData,
    setIsOpen,
    handleInputChange,
    handleSelectChange,
}: any) => {
    return (
        <form onSubmit={() => createCampaign(formData, () => setIsOpen(false))}>
            <div className="form-group">
                <label htmlFor="name">Campaign Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="status">Status:</label>
                <select
                    className="form-control"
                    id="status"
                    name="status"
                    onChange={handleSelectChange}
                    disabled={true}
                >
                    <option value="PENDING">Pending</option>
                    <option value="RUNNING">Running</option>
                    <option value="APPROVED">Approved</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary mt-2">
                Submit
            </button>
        </form>
    );
};

export default ModalForm;
