'use client';

import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function ApiDocs() {
  return (
    <div className="swagger-container">
      <SwaggerUI 
        url="/swagger.yaml"
        docExpansion="list"
        defaultModelsExpandDepth={-1}
      />
    </div>
  );
} 