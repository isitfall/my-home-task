import React, {useState} from 'react'
import PropTypes from 'prop-types'
import classes from './Inputs.sass'

export default function Select (props) {

    const genres = ['Crime', 'Documentary', 'Horror', 'Comedy']
    const [isShown, setIsShown] = useState(true)

    return (
        <>
            <label htmlFor={props.name} className={classes.label}>
                <span>{props.title}</span>
                <select name={props.name}
                        id={props.name}
                        value={props.selectValue}
                        onChange={props.change}
                        className={props.error ? classes.errorInput : null}
                        onClick={() => setIsShown(!isShown)}
                >
                    <option value={[]}>Select genre</option>
                </select>

                {props.error ? <p className={classes.errorParagraph}>{props.error}</p> : null}
            </label>
            <div className={classes.optionsWrapper}
                 style={
                     isShown ? {display: "none"} : null
            }>
                {genres.map(elem => {
                    return (
                        <label htmlFor={elem}>
                            <input type="checkbox" name={props.name} id={elem} value={elem} key={elem} onChange={props.change}/>
                            <span>{elem}</span>
                        </label>
                    )
                })}
            </div>
        </>
    )
}

Select.propTypes = {
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    change: PropTypes.func,
}