import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SearchIcon = (props) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" {...props}>
      <Path
        fill="none"
        stroke="#A445ED"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
      />
    </Svg>
  );
};

export default SearchIcon;
