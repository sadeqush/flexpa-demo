import "./styles.css";
export const FlexpaLinkButton = () => {
  return (
    <div>
      <div className="link-section">
        <div id="flexpa-link-btn" className="launch-btn">
          <span className="icon-container">
            <svg aria-hidden="true" className="lock-icon">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </span>
          Connect your health plan with Flexpa Link
        </div>
      </div>
    </div>
  );
};
