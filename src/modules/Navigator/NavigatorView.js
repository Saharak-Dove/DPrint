import React, { Component } from 'react';
import {
  BottomNavigation,
  Text,
} from 'react-native-paper';
import HomeView from '../Home/HomeView';

const AlbumsRoute = () => <Text>Albums</Text>;
const RecentsRoute = () => <Text>Recents</Text>;

export default class NavigatorView extends Component {
  static displayName = 'NavigationView';

  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'add', title: 'Add', icon: 'add' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: HomeView,
    add: this.AddRoute,
    recents: this.RecentsRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
