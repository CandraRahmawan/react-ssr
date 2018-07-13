import React, {Component} from 'react';
import _ from 'lodash';
import {hot} from 'react-hot-loader';

class TemplateHtml extends Component {
  normalizeAssets = assets => (_.isArray(assets) ? assets : [assets]);

  renderScriptAssets = () =>
    _.map(this.props.assetsByChunkName, items => {
      const item = _.filter(this.normalizeAssets(items), path =>
        path.endsWith('.js')
      );
      return item
        .map(
          item =>
            `<script src="${item}"></script>`
        )
        .join('\n');
    }).join('\n');

  render() {
    return (
      <html>
      <head>
        <title>Server Side Rendering with ReactJS</title>
        <div id="styled-components" dangerouslySetInnerHTML={{__html: this.props.styleTags}}/>
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{__html: this.props.entry}}/>
      </body>
      <div
        id="script-assets"
        dangerouslySetInnerHTML={{__html: this.renderScriptAssets()}}
      />
      </html>
    )
  }
}

export default hot(module)(TemplateHtml);