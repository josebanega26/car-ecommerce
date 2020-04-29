import React, { useEffect, useState } from 'react';
import OneModelContainer from '../../containers/OneModelContainer';
import { WithSpinner } from '../../hocs/with-spinner/WithSpinner';
const OneModelWithSpinner = WithSpinner(OneModelContainer);

const OneModelPage = () => {
  const [loading, setLoading] = useState(false);
  // CALL API
  useEffect(() => {
    //Fake api call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <OneModelWithSpinner isLoading={loading}></OneModelWithSpinner>;
};

export default OneModelPage;
