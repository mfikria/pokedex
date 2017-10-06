import React from 'react';

// NotFound 404 handler for unknown routes
import { NotFound } from 'kit/lib/routing';

// Create a route that will be displayed when the code isn't found
const NotFoundPage = () => (
  <NotFound>
    <h1>Unknown route - the 404 handler was triggered!</h1>
  </NotFound>
);

export default NotFoundPage;
