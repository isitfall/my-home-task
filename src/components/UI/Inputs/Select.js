import React, {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import classes from './Inputs.sass'

export default function Select (props) {

    const genres = ['Crime', 'Documentary', 'Horror', 'Comedy']
    const select = useRef(null)

    //очередная костылина, чтобы обновить компонент, после асинхронного экшна к бд
    useEffect(() => {}, [props.selectValue, select])


    function calculateSpace() {
         if (select.current) {
           return  {top:  42 + select.current.offsetTop + 'px'}
         } else {
             return null
         }
         // else if (select.current && !props.isMovieEditor) {
         //     return {top:  42 + select.current.offsetTop + 'px'}
         // }


    }

    function checkGenresArray(genre) {
            return props.selectValue.length > 0 ? props.selectValue.includes(genre) : false
    }

    return (
        <>
            <label htmlFor={props.name} className={classes.label}>
                <span>{props.title}</span>
                <select name={props.name}
                        id={props.name}
                        value={props.selectValue}
                        onChange={props.change}
                        className={props.error ? classes.errorInput : null}
                        ref={select}
                >
                    <option value={[]}>Select genre</option>
                </select>

                {props.error ? <p className={classes.errorParagraph}>{props.error}</p> : null}
            </label>
            <div className={[classes.optionsWrapper, (props.isMovieEditor ? classes.isMovieEditor : null)].join(' ')}
                 style={
                     !props.isShown ? {display: "none"} :  calculateSpace()
            }>
                {genres.map(elem => {
                    return (
                        <label htmlFor={elem}>
                            <input type="checkbox"
                                   name={props.name}
                                   id={elem}
                                   value={elem}
                                   key={elem}
                                   onChange={props.change}
                                   checked={checkGenresArray(elem)}/>
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
    isShown: PropTypes.bool,
    isMovieEditor: PropTypes.bool
}

Select.defaultProps = {
    selectValue: []
}