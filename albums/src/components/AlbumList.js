import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor() {
        super();
        this.state = { albums: [] };
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        let { textStyle, viewStyle } = style;
        return (
            <View style={viewStyle}>
                {this.renderAlbums()}
            </View>
        );
    }
}

const style = {
    viewStyle: {
    },
    textStyle: {
        fontSize: 20
    }
};

export default AlbumList;