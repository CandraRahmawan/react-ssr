import React from 'react';
import {renderToString} from 'react-dom/server';
import Entry from '../clients/Entry';
import TemplateHtml from '../clients/TemplateHtml';
import {StaticRouter} from 'react-router-dom';


export default (req, res) => {
  const context = {};
  const entry = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Entry/>
    </StaticRouter>
  );
  const renderTemplate = renderToString(
    <TemplateHtml entry={entry}/>
  );
  res.send(`<!doctype html> ${renderTemplate}`);
};