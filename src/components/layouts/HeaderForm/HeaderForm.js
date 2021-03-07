import React from 'react';
// import {useHistory} from "react-router";
import { connect } from 'react-redux';
import { useRouter } from "next/router";

import actionsTypes from "../../../Store/actionsTypes";
import { getMoviesSorted } from "../../../Store/actionCreators";

import classes from './HeaderForm.module.sass'
import PropTypes from 'prop-types'

const HeaderForm = (props) => {
    // const history = useHistory()
    const router = useRouter();

    function submitHandler(e) {
        e.preventDefault();

        props.getMoviesSorted(actionsTypes.FETCH_MOVIES_LIST, 'All')
        router.push('/search');
    }

    return (
        <form className={classes.HeaderForm}>
            <input type="text"
                   placeholder={'What do you want to watch?'}/>
            <input
                type="submit"
                onClick={submitHandler}
                value={'search'}

               />
        </form>
    )
}

HeaderForm.propTypes = {
    click: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
    getMoviesSorted: (actionType, title) => dispatch(getMoviesSorted(actionType, title))
});

export default connect(null, mapDispatchToProps) (HeaderForm)