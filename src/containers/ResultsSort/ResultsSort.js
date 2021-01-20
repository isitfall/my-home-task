import React, {Component} from 'react';
import classes from './ResultsSort.sass'

export default class ResultsSort extends Component {
    constructor(props) {
        super(props);

        this.state = {selectValue : 'releaseDate'}
        
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler(event) {
        this.setState({
            selectValue: event.target.value
        })
    }

    render() {
        return (
            <div className={classes.ResultsSort}>
                <span className={classes.ResultsSort__name}>sort by</span>
                <div className={classes.ResultsSort__select}>
                    <select name="SortResults"
                            id="SortResults"
                            value={this.state.selectValue}
                            onChange={this.changeHandler}
                    >
                        <option value="releaseDate">Release date</option>
                        <option value="byName">By Name</option>
                    </select>
                </div>
            </div>
        )
    }
}