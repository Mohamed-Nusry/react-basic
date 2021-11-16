import React from "react";
import PropTypes from "prop-types";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

/**
 * Primary UI component for user interaction
 */
export const AlertComponent = ({ severity, label, ...props }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={severity}>{label}</Alert>
    </Stack>
  );
};

AlertComponent.propTypes = {
  severity: PropTypes.oneOf(["success", "info", "warning", "error"]),
  /**
   * AlertComponent contents
   */
  label: PropTypes.string.isRequired,
};

AlertComponent.defaultProps = {
  severity: null,
};
