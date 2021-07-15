import React from 'react'
import PropTypes from 'prop-types'


const Ratings = ({rating, numReview, color}) => {
    return (
        <div className="rating">
            <span>
                <i style={{color: color}} className={rating >= 1 ? "fas fa-star" : rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} className={rating >= 2 ? "fas fa-star" : rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} className={rating >= 3 ? "fas fa-star" : rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} className={rating >= 4 ? "fas fa-star" : rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            <span>
                <i style={{color: color}} className={rating >= 5 ? "fas fa-star" : rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
            </span>
            {
                numReview &&
            <   span style={{marginLeft:"10px"}}>from {numReview} reviews</span>
            }
        </div>
    )
}

Ratings.defaultProps = {
    // color : '#f8e825'
    color : 'orange'
}

Ratings.ProtoType = {
    rating : PropTypes.number.isRequired,
    numReview : PropTypes.number.isRequired,
    color : PropTypes.string
}
export default Ratings
