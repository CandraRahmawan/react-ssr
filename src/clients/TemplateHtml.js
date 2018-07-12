import React, {Component} from 'react';
import Entry from './Entry';

export default class TemplateHtml extends Component {
  render() {
    return (
      <html>
      <head>
        <title>Server Side Rendering with ReactJS</title>
      </head>
      <body>
      <div id="app"><Entry/></div>
      </body>
      </html>
    )
  }
}