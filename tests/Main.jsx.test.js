import React from 'react';
import Main from '../Components/Main.jsx';
import renderer from 'react-test-renderer';

test('BookIndex can access the Goodreads API', () => {
    const component = renderer.create(
        <Main />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})

