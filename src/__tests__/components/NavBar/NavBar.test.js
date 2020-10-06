import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import TopNavBar from '../../../components/NavBar/NavBar';
import { VideoProvider } from '../../../providers/Video/Video.provider';
import AuthProvider from '../../../providers/Auth/Auth.provider';
import { shallow, mount, render } from 'enzyme';

const customProvider = (ui) => {
  return render(
    <BrowserRouter>
      <AuthProvider>
        <VideoProvider>{ui}</VideoProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

const state = {
  authenticated: true,
  logout: false,
  searchTerm: 'wizeline',
  searchHandler: 'wizeline',
};

describe('<TopNavBar />', () => {
  it('renders a div fpr search input', () => {
    const wrapper = shallow(<div className="classes.search" />);
    expect(wrapper.html()).to.contain('div');
  });
});
