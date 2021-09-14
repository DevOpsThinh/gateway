/**
 * Topic: Designing a Payment Gateway for Online Merchants
 * src/Components/Timer.js
 * Renders a 15 minutes timer and checks whether the complete amount
 * has been transferred to the merchant's wallet at an interval: 10s.
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