import React from 'react';
import loading from './loading.gif';
const Spinner = () => {
  return (
    <div>
      <img src={loading} alt='' style={loadingImgStyle} />
    </div>
  );
};

const loadingImgStyle = {
  marign: '10px auto',
};
export default Spinner;
