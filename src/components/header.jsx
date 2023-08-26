import PropTypes from 'prop-types';
import { Cart } from './icons';
import Styles from '../styles/header.module.css';

const Header = ({ quantity }) => (
  <header className={Styles.header}>
    <div className={Styles.container}>
      <h1 className={Styles.title}>Redux Toolkit</h1>
      <div className={Styles.badge}>
        <Cart />
        <span className={Styles.counter}>{quantity}</span>
      </div>
    </div>
  </header>
);

Header.propTypes = { quantity: PropTypes.number.isRequired };

export default Header;
