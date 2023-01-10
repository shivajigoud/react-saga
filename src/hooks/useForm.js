import React, { useState } from 'react';

export default function useForm() {
  const [userFormState, setUserFormState] = useState('Submit');
  return { userFormState, setUserFormState };
}
