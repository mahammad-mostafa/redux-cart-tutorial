import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increment, decrement, remove } from '../slices/cart';
import { Down, Up } from './icons';
import Styles from '../styles/item.module.css';

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const check = () => {
    if (item.amount === 1) dispatch(remove(item.id));
    else dispatch(decrement(item.id));
  };
  return (
    <article className={Styles.article}>
      <img className={Styles.image} src={item.img} alt={item.title} />
      <div className={Styles.content}>
        <h4 className={Styles.title}>{item.title}</h4>
        <p className={Styles.price}>
          $
          {item.price}
        </p>
        <button className={Styles.remove} type="button" onClick={() => dispatch(remove(item.id))}>Remove</button>
      </div>
      <div className={Styles.buttons}>
        <button className={Styles.arrow} type="button" onClick={() => dispatch(increment(item.id))}>
          <Up />
        </button>
        <span className={Styles.amount}>{item.amount}</span>
        <button className={Styles.arrow} type="button" onClick={() => check()}>
          <Down />
        </button>
      </div>
    </article>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};

export default Item;
