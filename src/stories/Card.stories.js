import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Card from '../components/Card/Card';
import configureStore from '../store/store';

export default {
  title: 'Example/Card',
  component: Card,
};

const store = configureStore({});
const Template = (args) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Card {...args} />
      </BrowserRouter>
    </Provider>
  );
}

export const Default = Template.bind({});
Default.args = {
  img: 'https://via.placeholder.com/300x300.png?text=Pulp+Fiction',
  title: 'Some card title',
  subtitle: 'This is subtitle',
  label: 'Label',
  rating: 5.0
};
