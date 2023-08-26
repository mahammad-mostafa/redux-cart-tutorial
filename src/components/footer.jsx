import PropTypes from 'prop-types';

import { Money } from './icons';
import Styles from '../styles/footer.module.css';

const Footer = ({ total, handler }) => (
  <footer className={Styles.footer}>
    <div className={Styles.container}>
      <h3 className={Styles.title}>
        <Money />
        Total
      </h3>
      <span className={Styles.total}>
        $
        {total.toFixed(2)}
      </span>
    </div>
    <button className={Styles.clear} type="button" onClick={() => handler(true)}>Clear Cart</button>
  </footer>
);

Footer.propTypes = { total: PropTypes.number.isRequired, handler: PropTypes.func.isRequired };

export default Footer;
