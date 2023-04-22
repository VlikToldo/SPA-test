import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestRates } from 'redux/operations';
import { selectBaseCurrency, selectRates } from 'redux/selectors';

const RatesPage = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const rates = useSelector(selectRates);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!baseCurrency) return;
    dispatch(fetchLatestRates(baseCurrency));
  }, [dispatch, baseCurrency]);

  return (
    <ul>
      {Object.entries(rates).map(([key, value]) => (
        <li key={key}>
          <p>
            {key} : {value}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RatesPage;
