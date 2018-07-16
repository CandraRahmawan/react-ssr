import React from 'react';
import {renderToString} from 'react-dom/server';
import TemplateHtml from '../clients/TemplateHtml';
import {StaticRouter} from 'react-router-dom';
import Routes from '../routes/route';
import {ServerStyleSheet, StyleSheetManager} from 'styled-components';

export default (req, res) => {
  const sheet = new ServerStyleSheet();
  let context = {};
  const entry = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <StaticRouter location={req.url} context={context}>
        <Routes/>
      </StaticRouter>
    </StyleSheetManager>
  );
  const renderTemplate = renderToString(
    <TemplateHtml
      entry={entry}
      assetsByChunkName={res.locals.webpackStats.toJson().assetsByChunkName}
      styleTags={sheet.getStyleTags()}
    />
  );
  res.send(`<!doctype html> ${renderTemplate}`);
};