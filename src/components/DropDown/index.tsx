import React, { useState, useCallback } from 'react';
import Select from 'react-select';

import { Container } from './styles';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const DropDown: React.FC = () => {
  const [category, setCategory] = useState(null);

  const handleChange = useCallback(selected => {
    setCategory(selected);
  }, []);
  return (
    <Container>
      <Select value={category} onChange={handleChange} options={options} />
    </Container>
  );
};

export default DropDown;
