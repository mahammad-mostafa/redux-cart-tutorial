import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { clear } from '../slices/cart';
import { Error } from './icons';
import Styles from '../styles/dialog.module.css';

const Dialog = ({ opened, handler }) => {
  const element = useRef(null);
  const dispatch = useDispatch();
  const confirm = () => {
    dispatch(clear());
    handler(false);
  };
  if (opened) {
    element.current.showModal();
  } else if (element !== null && element.current !== null) {
    element.current.close();
  }

  return (
    <dialog ref={element} className={Styles.dialog} onClose={() => handler(false)}>
      <div className={Styles.icon}><Error /></div>
      <h3 className={Styles.title}>Are you sure?</h3>
      <div className={Styles.buttons}>
        <button type="button" className={Styles.button} onClick={() => handler(false)}>Cancel</button>
        <button type="button" className={Styles.button} onClick={() => confirm()}>Confirm</button>
      </div>
    </dialog>
  );
};

Dialog.propTypes = { opened: PropTypes.bool.isRequired, handler: PropTypes.func.isRequired };

export default Dialog;
