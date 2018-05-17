import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Paginator from '../src/Paginator';

describe('Paginator component', () => {
  let sandbox;
  let callback;

  beforeEach(function() {
    sandbox = sinon.sandbox.create();
    callback = sandbox.stub();
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paginator page={1} pages={3} onPageChange={callback} />, div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Paginator page={3} pages={5} onPageChange={callback} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('simlate on page click', () => {
    const tree = shallow(
      <Paginator page={3} pages={5} onPageChange={callback} />
    );
    tree.find({ page: 1 }).simulate('click');
    sinon.assert.calledOnce(callback);
  });
});
