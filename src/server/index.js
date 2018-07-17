import express from 'express';
import render from './render';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

const app = express();
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    serverSideRender: true,
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(webpackHotMiddleware(compiler));
app.get('*', render);

app.listen(8000, () => console.log('App Listening at Port 8000'));
