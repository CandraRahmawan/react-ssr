import React from 'react';
import {renderToString} from 'react-dom/server';
import TemplateHtml from '../clients/TemplateHtml';
import {StaticRouter} from 'react-router-dom';
import routes from '../routes/route';

export default (req, res) => {
  let context = {};
  const entry = renderToString(
    <StaticRouter location={req.url} context={context}>
      {routes}
    </StaticRouter>
  );
  const renderTemplate = renderToString(
    <TemplateHtml entry={entry} assetsByChunkName={res.locals.webpackStats.toJson().assetsByChunkName}/>
  );
  res.send(`<!doctype html> ${renderTemplate}`);
};