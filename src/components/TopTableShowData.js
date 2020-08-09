import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledTr = styled.tr.attrs({
  className: 'w-100',
})`
  & {

  }
`;

export default function TopTableShowData(props) {
  const { sortBy } = props;
  return (
    <StyledTr>
      <th>President</th>
      <th onClick={e => sortBy(e.target.innerText)}>Followers</th>
      <th onClick={e => sortBy(e.target.innerText)}>Likes</th>
      <th onClick={e => sortBy(e.target.innerText)}>Comments</th>
      <th onClick={e => sortBy(e.target.innerText)}>Posts</th>
    </StyledTr>
  );
}