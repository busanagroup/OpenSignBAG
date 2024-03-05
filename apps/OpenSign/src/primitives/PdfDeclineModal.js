import React from "react";
import "../styles/customModal.css";
import "../styles/signature.css";

function CustomModal({
  show,
  headMsg,
  bodyMssg,
  footerMessage,
  declineDoc,
  setIsDecline,
  containerWH
}) {
  const isMobile = window.innerWidth < 767;
  return (
    show && (
      <div
        className="parentDiv"
        style={{
          width: containerWH && containerWH.width,
          height: isMobile ? "100%" : containerWH && containerWH.height
        }}
      >
        <div className="childDiv">
          <div className="modalHeadDiv bg-danger">{headMsg && headMsg}</div>
          <div className="modalBodyDIv">
            <p className="pTagBody">{bodyMssg && bodyMssg}</p>
          </div>
          {footerMessage && (
            <>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#9f9f9f",
                  width: "100%"
                }}
              ></div>
              <div className="modalFooterDiv">
                <button
                  style={{
                    background: "#de4337"
                  }}
                  type="button"
                  className="finishBtn"
                  onClick={() => declineDoc()}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="finishBtn cancelBtn"
                  onClick={() => setIsDecline({ isDeclined: false })}
                >
                  Close
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
}

export default CustomModal;
