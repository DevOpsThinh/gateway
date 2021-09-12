/**
 * Topic: Designing a Payment Gateway for Online Merchants
 * src/Components/Timer.js
 * 
 * 
 * Author: DevOpsThinh
 * Created At: 13/ 9/ 2021
 */

import React from "react";

function Timer(props) {
    if(props.minutes == '15') {
        props.startTimer();
    }

    return (
        <div>
            <div className="column is-12 has-text-centered">
                {props.minutes}:{props.seconds}
            </div>
        </div>
    )
}

export default Timer;