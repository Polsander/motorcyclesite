
import React from 'react'

const RouteSearch = () => {
    return (
        <div className=" row align-items-center pt-3 pb-5">
            <form>
                <div className="col-5">
                    <input className="form-control" type="text" placeholder={`Ex. "City" or "Province"`} />
                </div>
                <div className="col">
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>

    )
}

export default RouteSearch