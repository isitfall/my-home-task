import React, {useState, useCallback} from 'react';

import classes from './ResultsSort.sass'


export default function ResultsSort (props) {

    const [state, setState] = useState({selectValue : 'releaseDate'})


    function changeHandler(event) {
        setState({
            selectValue: event.target.value
        })
    }


    return (
        <div className={classes.ResultsSort}>
            <span className={classes.ResultsSort__name}>sort by</span>
            <div className={classes.ResultsSort__select}>
                <select name="SortResults"
                        id="SortResults"
                        value={state.selectValue}
                        onChange={changeHandler}
                >
                    <option value="releaseDate">Release date</option>
                    <option value="byName">By Name</option>
                </select>
            </div>
        </div>
    )

}


