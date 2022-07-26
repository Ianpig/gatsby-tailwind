import React from "react";

const SwitchTheme = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className="switch-container">
      <div className="switch-theme">
        <input
          id="toggle_checkbox"
          onChange={onChange}
          type="checkbox"
          checked={checked}
        />
        <label htmlFor="toggle_checkbox">
          <div id="star">
            <div className="star" id="star-1">
              ★
            </div>
            <div className="star" id="star-2">
              ★
            </div>
          </div>
          <div id="moon"></div>
        </label>
      </div>
    </div>
  );
};

export default SwitchTheme;
