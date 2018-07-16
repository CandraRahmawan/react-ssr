const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({adapter: new Adapter()});

global.React = require('react');
global.renderer = require('react-test-renderer');
global.shallow = Enzyme.shallow;