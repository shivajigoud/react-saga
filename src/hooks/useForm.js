import React, { useState } from 'react';

const useForm = () => {
  const [userFormState, setUserFormState] = useState('Submit');
  const setUserFormStateFunc = (state) => {
    setUserFormState(state);
  };
  return { userFormState, setUserFormStateFunc };
};
export default useForm;
