import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingWrapper = (props) => (props.loading ? <div className="flex-container loading-wrapper-container"><CircularProgress color="primary" /></div> : props.children);
export default LoadingWrapper;
// TODO lots of work needed here
