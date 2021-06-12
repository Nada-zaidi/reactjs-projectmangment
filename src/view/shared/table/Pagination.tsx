import React from 'react';
import RCPagination from 'rc-pagination';
import PaginationWrapper from 'src/view/shared/table/styles/PaginationWrapper';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const onChange = (current, pageSize) => {
    props.onChange({
      current: Number(current),
      pageSize: Number(pageSize),
    });
  };

  //const locale = getLanguage().dictionary.pagination;
  const { pagination, disabled, showTotal } = props;
  const { current, pageSize, total } = pagination;
  return (
    <PaginationWrapper>
      <RCPagination
        pageSize={Number(pageSize)}
        current={current}
        onChange={onChange}
        total={total}
        //locale={locale}
        showTotal={showTotal || undefined}
      />

      <select
        style={{
          width: 'auto',
        }}
        disabled={!total || disabled}
        className="ml-2 form-control form-control-sm"
        value={Number(pageSize)}
        onChange={(event) =>
          onChange(1, event.target.value)
        }
      >
        <option value={10}>
          10 / page
        </option>
        <option value={20}>
          20 / page
        </option>
        <option value={30}>
          30 / page
        </option>
        <option value={40}>
          40 / page
        </option>
      </select>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  pagination: PropTypes.object,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  showTotal: PropTypes.func,
};

export default Pagination;
