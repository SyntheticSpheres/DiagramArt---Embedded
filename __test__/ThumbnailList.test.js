import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ThumbnailList from '../src/ThumbnailList';

describe('ThumbnailList component', () => {
  it('renders without crashing', () => {
    const callback = function() {};
    const div = document.createElement('div');
    ReactDOM.render(<ThumbnailList diagrams={[]} onThumbnailClick={callback} />, div);
  });
});
