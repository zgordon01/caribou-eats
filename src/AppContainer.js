import React, { Component } from 'react';
import MaterialThemeWrapper from './components/theme/MaterialThemeWrapper';
import CaribouTile from './components/tiles/caribouTile';
import EatsTile from './components/tiles/eatsTile';
import RollerTile from './components/tiles/rollerTile';

class AppContainer extends Component {
    render () {
        return (
            <div className="app-root">
                <MaterialThemeWrapper>
                    <div className="flex-space-horizontal">
                        <EatsTile />
                        <CaribouTile />
                    </div>
                    <div className="flex-center vertical-space-large">
                        <RollerTile />
                    </div>
                </MaterialThemeWrapper>
            </div>
        );
    }
}

export default AppContainer;
