import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculate, fetcher } from './slices/cart';
import Header from './components/header';
import List from './components/list';
import Footer from './components/footer';
import Dialog from './components/dialog';

function App() {
  const { items, quantity, total } = useSelector((state) => state.cart);
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(fetcher());
    return () => promise.abort();
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculate());
  }, [dispatch, items]);

  return (
    <>
      <Header quantity={quantity} />
      <main>
        <List items={items} />
      </main>
      <Footer total={total} handler={setOpened} />
      <Dialog opened={opened} handler={setOpened} />
    </>
  );
}

export default App;
