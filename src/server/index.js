import express from 'express';
import render from './render';
import wdm from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

const app = express();
const compiler = webpack(webpackConfig);

app.use(wdm(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.get('*', render);

app.listen(8000, () => console.log('App Listening at Port 8000'));