import React from 'react'

const Form = () => {
    return (
            <div className="form">
                <div className="form-outer-container">
                    <div className="form-inner-container">
                        <div className="email-container">
                            <h4>Email</h4>
                            <input type="text" name="email"/>
                        </div>
                        <div className="request-container">
                            <h4>Name your request *</h4>
                            <input type="text" placeholder="Type here"/>
                        </div>
                        <div className="no-of-words">
                            <div className="words">
                                <h4>No. of Words</h4>
                                <span>1000</span>
                            </div>
                            <div className="meter">
                                <progress id="file" value="32" max="100">
                                </progress>
                                <div className="circle-end"><div className="inner-circle"><i className="fas fa-check-circle"></i></div></div>
                                
                            </div>
                        </div>
                        <div className="proceed-btn">
                            <button>Proceed to Requirements <i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Form
