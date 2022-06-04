import React from "react";
import styles from "./SelectButton.module.scss";
import PropTypes from 'prop-types';

type SelectButtonProps = {
  content: string,
  onClick?: () => void,
}

function SelectButton({content, onClick}: SelectButtonProps) {
  return (
    <div className={`${styles.SelectButton} ${styles.UnSelected}`} onClick={onClick}>
      <p>{content}</p>
    </div>
  );
}

SelectButton.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SelectButton;