import React, {Component} from 'react';

export default class TemplateHtml extends Component {
  render() {
    return (
      <html>
      <head>
        <title>Server Side Rendering with ReactJS</title>
      </head>
      <body>
      <div id="app" dangerouslySetInnerHTML={{__html: this.props.entry}}></div>
      </body>
      <script src="main.bundle.js"></script>
      </html>
    )
  }
}