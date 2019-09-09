import React, { Component } from 'react';
import MaterialThemeWrapper from './components/theme/MaterialThemeWrapper';
import CaribouTile from './components/tiles/caribouTile'

class AppContainer extends Component {
    render () {
        return (
            <div className="app-root">
                <MaterialThemeWrapper>
                    <div class="flex-center">
                    <CaribouTile />
                    </div>
                </MaterialThemeWrapper>
            </div>
        );
    }
}

export default AppContainer;
