// https://github.com/airbnb/enzyme/issues/1265

const Enzyme = require('enzyme');
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
