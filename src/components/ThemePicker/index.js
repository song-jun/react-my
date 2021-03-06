/*
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-21 19:10:10
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-22 15:50:19
 */
import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import classNames from 'classnames';
import { SettingOutlined } from '@ant-design/icons';

class ThemePicker extends Component {
    state = {
        switcherOn: false,
        background: localStorage.getItem('@primary-color') || '#313653',
    };
    _switcherOn = () => {
        this.setState({
            switcherOn: !this.state.switcherOn,
        });
    };
    _handleChangeComplete = (color) => {
        console.log(color);
        this.setState({ background: color.hex });
        localStorage.setItem('@primary-color', color.hex);
        window.less.modifyVars({
            '@primary-color': color.hex,
            '@init-color': color.hex
        });
    };
    render() {
        const { switcherOn, background } = this.state;
        return (
            <div className={classNames('switcher dark-white', { active: switcherOn })}>
                <span className="sw-btn dark-white" onClick={this._switcherOn}>
                    <SettingOutlined type="setting" className="text-dark" />
                </span>
                <div style={{ padding: 10 }} className="clear">
                    <SketchPicker
                        color={background}
                        onChangeComplete={this._handleChangeComplete}
                    />
                </div>
            </div>
        );
    }
}

export default ThemePicker;
