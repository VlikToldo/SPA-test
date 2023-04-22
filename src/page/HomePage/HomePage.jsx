import { ChangeForm } from 'components/ChangeForm/ChangeForm';
import { useSelector } from 'react-redux';
import { selectLoading, selectResult } from 'redux/selectors';

const HomePage = () => {
  const isLoading = useSelector(selectLoading);
  const result = useSelector(selectResult);
  return (
    <div>
      <ChangeForm />

      {isLoading ? <p>Loading...</p> : result ? <p>Result : {result}</p> : null}
    </div>
  );
};

export default HomePage;
