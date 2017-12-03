import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import Thumbnail from '../src/Thumbnail';

describe('Thumbnail component', () => {
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
    ReactDOM.render(<Thumbnail id={1} title="diagram" picture="https://cdn.shopify.com/s/files/1/0255/1589/products/USPTO_Patent_0003302.png" onThumbnailClick={callback} />, div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(
      <Thumbnail id={1} title="diagram" picture="https://cdn.shopify.com/s/files/1/0255/1589/products/USPTO_Patent_0003302.png" onThumbnailClick={callback} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('simlate click', () => {
    const tree = shallow(
      <Thumbnail id={1} title="diagram" picture="https://cdn.shopify.com/s/files/1/0255/1589/products/USPTO_Patent_0003302.png" onThumbnailClick={callback} />
    );
    tree.find('.da-thumbnail').simulate('click');
    sinon.assert.calledOnce(callback);
  });
});
