import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import SubHeader from './SubHeader'


const FAQs = () => {
    return (
        <Fragment>
            <SubHeader />
            <br />
            <br />
            <br />

            <div className='container' style={{padding:'20px'}}>
                <Col>
                    <center><p className='heading'>FAQ</p></center>

                    <Col>

                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Collapsible Group Item #1
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> className.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Collapsible Group Item #2
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                        Some placeholder content for the second accordion panel. This panel is hidden by default.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Collapsible Group Item #3
                                        </button>
                                    </h2>
                                </div>
                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Col>
                </Col>
            </div>
        </Fragment>
    )
}

export default FAQs
