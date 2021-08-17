
import React from 'react'

import classes from './RouteSearch.module.css';

const RouteSearch = () => {
    return (
        <div className=" row align-items-center text-center pt-3 pb-5">
            <form className={classes.formformat}>
                <input className={`form-control`} type="text" placeholder={`Ex. "City" or "Province"`} />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>

    )
}

export default RouteSearch