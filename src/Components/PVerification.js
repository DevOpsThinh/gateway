/**
 * Topic: Designing a Payment Gateway for Online Merchants
 * src/Components/Pverification.js
 * Rendered when the user selects "Other Wallets".
 *
 * Author: DevOpsThinh
 * Created At: 14/ 9/ 2021
 */
import React from "react";

// ------------------------------------------------------- //
//                  Local components                      //
// ----------------------------------------------------- //
import Timer from "./Timer";

function Pverification(props) {
  let ethAddress = props.mAddress;
  let aD = props.amount - props.diff;
  let amountD = aD.toFixed(3);

  return (
    <div className="panel-block is-paddingless is-12">
      <div className="column is-12" id="item-lists">
        {amountD <= 0 ? (
          <div className="column is-12 has-addons-centered">
            <span class="tag is-success is-medium">Transfer Successful</span>
          </div>
        ) : (
          <div className="column is-12 has-text-centered">
            Please open your wallet and transfer exactly
            <a className="is-info">{amountD} ethers</a>
            to the below address
          </div>
        )}

        <div className="column is-12 has-text-centered">
          <span class="tag is-light is-medium">{ethAddress}</span>
        </div>

        <div className="column is-12 has-text-centered">
          {props.diff} ethers successfully received
        </div>

        <Timer
          minutes={props.minutes}
          seconds={props.seconds}
          startTimer={props.startTimer}
        />

        <div className="columns">
          <div className="column is-12 has-text-centered">
            <button
              className="button is-danger"
              onClick={() => props.closePayment()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pverification;
