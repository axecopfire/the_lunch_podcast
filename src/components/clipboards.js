import React from 'react';
import Clipboard from './clipboard';

export default class Clipboards extends React.Component {
    render () {
        return (
            <ul class="clipboards">
                <h2>Clipboards App</h2>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
                <li><Clipboard /></li>
            </ul>
        )
    }
}