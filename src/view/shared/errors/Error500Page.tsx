import React from 'react';
import { Link } from 'react-router-dom';
import ErrorWrapper from 'src/view/shared/errors/styles/ErrorWrapper';

const Error500Page = () => {
  return (
    <ErrorWrapper>
      <div className="exception">
        <div className="imgBlock">
          <div
            className="imgEle"
            style={{
              backgroundImage: `url(/images/500.svg)`,
            }}
          />
        </div>
        <div className="content">
          <h1>500</h1>
          <div className="desc">Sorry, the server is reporting an error</div>
          <div className="actions">
            <Link to="/">
              <button
                className="btn btn-primary"
                type="button"
              >
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </ErrorWrapper>
  );
};

export default Error500Page;
