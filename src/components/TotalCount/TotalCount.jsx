import { TotalCountStyled } from './TotalCountStyled';
import PropTypes from 'prop-types';

export default function TotalCount({ pizzas }) {
  const totalCount = pizzas.reduce((acc, pizza) => acc + pizza.count, 0);

  return (
    <>
      {totalCount === 0 ? null : (
        <TotalCountStyled>{totalCount}</TotalCountStyled>
      )}
    </>
  );
}

TotalCount.propTypes = {
  pizzas: PropTypes.array.isRequired,
};
