
export default function ImputForm({
    handleOnChange,
    handleOnSubmit
}) {

    return (
        <div className="form-container">
            <form>
                <input
                    type="file"
                    id="csvFileInput"
                    accept=".csv"
                    onChange={handleOnChange}
                />
                <button
                    onClick={(e) => { handleOnSubmit(e) }}> IMPORT CSV </button>
            </form>
        </div>
    );
};