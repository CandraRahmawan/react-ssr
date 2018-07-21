import React from 'react';
import Prism from 'prismjs';

export default (codeSyntak, lang = Prism.languages.javascript) => (
  <pre className="language-javascript">
    <code
      className="language-javascript"
      dangerouslySetInnerHTML={{ __html: Prism.highlight(codeSyntak, lang) }}
    />
  </pre>
);
