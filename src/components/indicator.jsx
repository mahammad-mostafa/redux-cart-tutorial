import PropTypes from 'prop-types';
import Styles from '../styles/indicator.module.css';
import { Error } from './icons';

const Indicator = ({ parameters: [loading, error, length] }) => (
  <div className={Styles.container}>
    <span className={Styles.icon}>
      {!loading && <Error />}
    </span>
    {loading && <h3 className={Styles.title}>loading</h3>}
    {!loading && error !== '' && <h3 className={Styles.title}>{error}</h3>}
    {!loading && error === '' && length === 0 && <h3 className={Styles.title}>Currently empty!</h3>}
  </div>
);

Indicator.propTypes = PropTypes.arrayOf({
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
}).isRequired;

export default Indicator;
