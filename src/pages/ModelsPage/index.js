import React, { useEffect, useState } from 'react';
import './ModelsPage.style.scss';
import { WithSpinner } from '../../hocs/with-spinner/WithSpinner';
import ModelContainer from '../../containers/ModelsContainer';

const ModelsContainerWithSpinner = WithSpinner(ModelContainer);

const ModelsPage = () => {
  const [loading, setLoading] = useState(false);
  // CALL API
  useEffect(() => {
    //Fake api call
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <ModelsContainerWithSpinner isLoading={loading} />;
};

export default ModelsPage;
