import React, { Component } from 'react';
import _ from 'lodash';

export default class TemplateHtml extends Component {
  normalizeAssets = assets => (_.isArray(assets) ? assets : [assets]);

  renderStylesAssets = () =>
    _.map(this.props.assetsByChunkName, items => {
      const item = _.filter(this.normalizeAssets(items), path =>
        path.endsWith('.css')
      );
      return item
        .map(item => `<link href="${item}" rel="stylesheet"></>`)
        .join('\n');
    }).join('\n');

  renderScriptAssets = () =>
    _.map(this.props.assetsByChunkName, items => {
      const item = _.filter(this.normalizeAssets(items), path =>
        path.endsWith('.js')
      );
      return item.map(item => `<script src="${item}"></script>`).join('\n');
    }).join('\n');

  render() {
    return (
      <html>
        <head>
          <title>Server Side Rendering with ReactJS</title>
          <div
            id="style"
            dangerouslySetInnerHTML={{ __html: this.renderStylesAssets() }}
          />
          <div
            id="styled-components"
            dangerouslySetInnerHTML={{ __html: this.props.styleTags }}
          />
        </head>
        <body>
          <div
            id="app"
            dangerouslySetInnerHTML={{ __html: this.props.entry }}
          />
        </body>
        <div
          id="script-assets"
          dangerouslySetInnerHTML={{ __html: this.renderScriptAssets() }}
        />
      </html>
    );
  }
}
