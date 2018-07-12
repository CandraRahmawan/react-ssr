import React from 'react';
import {renderToString} from 'react-dom/server';
import TemplateHtml from '../clients/TemplateHtml';

export default (req, res) => {
  res.send(renderToString(<TemplateHtml/>));
};