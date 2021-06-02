import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/store';
import TabbedFilter from '../components/TabbedFilter/TabbedFilter';

const tabs = [
  {
    title: 'Item1',
    isActive: true
  },
  {
    title: 'Item2',
    isActive: false
  },
  {
    title: 'Item3',
    isActive: false
  }
];

const store = configureStore({});

export default {
  title: 'Example/TabbedFilter',
  component: TabbedFilter,
};

const Template = (args) => {
  return (
    <Provider store={store}>
      <TabbedFilter {...args} />
    </Provider>
  );
}

export const Default = Template.bind({});
Default.args = {
  items: tabs
};
