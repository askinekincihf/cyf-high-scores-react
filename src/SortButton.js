import React, { useState } from "react";
import HighScoreTable from "./HighScoreTable";

const SortButton = () => {
    const [sort, setSort] = useState(false);

    const handleSort = () => {
        setSort(!sort);
        console.log(sort, "button clicked");
    }

    return (
        <div className="d-grid gap-2 col-3 mx-auto mt-3">
            <button
                className="btn btn-primary"
                onClick={handleSort}
            >
                Sort Scores
        </button>
        </div>
    )
}

export default SortButton;