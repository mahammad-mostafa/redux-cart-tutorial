import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Indicator from './indicator';
import Item from './item';
import Styles from '../styles/list.module.css';

const List = ({ items }) => {
  const { loading, error } = useSelector((state) => state.cart);

  return (
    <section className={Styles.section}>
      <h2 className={Styles.title}>My Bag</h2>
      {!loading && error === '' && items.length > 0 ? (
        <div className={Styles.list}>
          {items.map((item) => <Item key={item.id} item={item} />)}
        </div>
      ) : <Indicator parameters={[loading, error, items.length]} />}
    </section>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
