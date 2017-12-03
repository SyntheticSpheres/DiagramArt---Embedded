import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Menu from '../src/Menu';

describe('Menu component', () => {
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
    ReactDOM.render(<Menu onQueryChange={callback} />, div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Menu onQueryChange={callback} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('simlate change', () => {
    const tree = shallow(
      <Menu onQueryChange={callback} />
    );
    tree.find('input').simulate('change', { target: { value: 'q' } });
    sinon.assert.calledOnce(callback);
    sinon.assert.calledWith(callback, 'q');
  });
});
