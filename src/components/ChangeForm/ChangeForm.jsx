import { useDispatch } from 'react-redux';
import { fetchChangeCurrency } from 'redux/operations';

export const ChangeForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const { value } = e.target.currency;

    const [amount, from, , to] = value.split(' ');
    dispatch(
      fetchChangeCurrency({
        to,
        from,
        amount,
      })
    );
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="currency" />
      <button type="submit">Submit</button>
    </form>
  );
};
