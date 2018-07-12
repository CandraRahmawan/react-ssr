import express from 'express';
import render from './render';
import wdm from 'webpack-dev-middleware';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

const app = express();
const compiler = webpack(webpackConfig);

app.use('/assets', express.static('dist'));
app.use(wdm(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.get('*', render);
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(8000, () => console.log('App Listening at Port 8000'));