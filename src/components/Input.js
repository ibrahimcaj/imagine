import React from 'react';
import { toPng } from 'html-to-image';
import { saveAs } from 'file-saver';

import Preview from './Preview';
import { REGEX, COLORS, EXPORT, PLACEHOLDER } from '../utility/Constants';

import '../stylesheets/Input.css';

class Input extends React.Component {
    setColor(color) {
        Preview.prototype.updateState({ color: color });
    }

    handleFile(e) {
        var file = e.target.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = (e) => {
                var data = e.target.result;
                Preview.prototype.updateState({ avatar: data });
            };
            reader.readAsDataURL(file);
        }
    }

    addReaction() {
        var reactions = Preview.prototype.getState().reactions;
            reactions.push({ emoji: { raw: '', id: '' }, count: 0 });

        if (reactions.length > 14) return;
            
        Preview.prototype.updateState({ reactions: reactions });
        this.forceUpdate();
    }
    updateReaction(index, value) {
        var reactions = Preview.prototype.getState().reactions;

        if (isNaN(parseInt(value))) {
            reactions[index].emoji = { raw: value, id: (value.match(REGEX.EMOJI) ? value.match(REGEX.EMOJI)[0] : null) };
        } else {
            value = parseInt(value);

            if (value < 0) value = 0;
            else if (value > 999) value = 999;

            reactions[index].count = value;
        }

        Preview.prototype.updateState({ reactions: reactions });
        this.forceUpdate();
    }
    removeReaction() {
        var reactions = Preview.prototype.getState().reactions;
        reactions.pop();

        Preview.prototype.updateState({ reactions: reactions });
        this.forceUpdate();
    }

    handleDownload() {
        toPng(document.getElementById('previewContainer'), EXPORT).then((image) => {
            saveAs(image, 'imagine.png');
        });
    }

    render() {
        var colorButtons = Object.keys(COLORS).map((colorName, colorIndex) => {
            var colorValue = COLORS[colorName];

            return (<div key={colorIndex} className={colorValue === Preview.prototype.getState().color ? 'colorButton colorButtonSelected' : 'colorButton'} style={{ backgroundColor: colorValue }} onClick={() => { this.setColor(colorValue); this.forceUpdate() }}></div>);
        });
        var reactionArray = Preview.prototype.getState().reactions?.map((reaction, index) => {
            return (
                <div className="reactionElement" key={index}>
                    <div>
                        <p className="inputTitle">Emoji</p>
                        <input type="text" className="inputText" placeholder={PLACEHOLDER} value={reaction.emoji.raw} style={{ backgroundColor: '#2f3136' }} onChange={(e) => this.updateReaction(index, e.target.value)} />
                    </div>
                    <div>
                        <p className="inputTitle">Count</p>
                        <input type="number" className="inputText" placeholder={PLACEHOLDER} value={reaction.count} style={{ backgroundColor: '#2f3136' }} onChange={(e) => this.updateReaction(index, e.target.value)} />
                    </div>
                </div>
            );
        });

        return (
            <React.StrictMode>
                <div className="pageContentInput">
                    <div className="colorButtonContainer">
                        { colorButtons }
                    </div>

                    <p className="inputTitle">Avatar</p>
                    <input type="file" onChange={this.handleFile} />

                    <p className="inputTitle">Caption</p>
                    <input type="text" className="inputText" placeholder={PLACEHOLDER} onChange={(e) => Preview.prototype.updateState({ text: e.target.value })} />
                    
                    <p className="inputTitle">Username</p>
                    <input type="text" className="inputText" placeholder={PLACEHOLDER} onChange={(e) => Preview.prototype.updateState({ username: e.target.value.toLowerCase() })} />

                    <p className="inputTitle">Reactions</p>
                    <div className="reactionContainer">
                        { reactionArray.length === 0 ? (
                            <div className="reactionElement">
                                <p className="inputTitle">None</p>
                            </div>
                        ) : reactionArray }
                    </div>
                    <div className="reactionContainerButtonContainer">
                        <div className="inputButton" onClick={() => this.addReaction()}>
                            Add
                        </div>
                        <div className="inputButton" onClick={() => this.removeReaction()}>
                            Remove
                        </div>
                    </div>

                    <div className="inputButton" onClick={() => this.handleDownload()}>
                        Download
                    </div>
                </div>
            </React.StrictMode>
        );
    }
}
export default Input;
