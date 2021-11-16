import React from "react";
import PropTypes from "prop-types";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckboxUi from "@mui/material/Checkbox";

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  isChecked,
  isDisabled,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  return (
    <FormGroup>
      {isDisabled ? (
        <FormControlLabel disabled control={<CheckboxUi checked={isChecked} size={size} />} label={label} />
      ) : (
        <FormControlLabel  control={<CheckboxUi checked={isChecked} size={size} />} label={label} />
      )}
    </FormGroup>
  );
};

Checkbox.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  isChecked: PropTypes.bool,

  isDisabled: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Checkbox contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  backgroundColor: null,
  isChecked: false,
  isDisabled: false,
  size: "medium",
  onClick: undefined,
};
