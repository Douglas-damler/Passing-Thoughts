import React from 'react';
import ReactPlayer from 'react-player';

export class Video extends React.Component {
    
    render() {
        return (
            <ReactPlayer width='50%' height='50%' controls={true} url='https://youtu.be/7sDY4m8KNLc' />
        );
    }
}