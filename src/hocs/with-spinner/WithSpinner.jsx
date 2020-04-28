import React from 'react';
import Spinner from '../../components/Spinner';

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  );
};

export { WithSpinner };
