import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch'
import {connect} from './react-redux'

class Content extends Component {
    static propTypes = {
        store:PropTypes.object
    }
    constructor(){
        super();
        this.state = {
            themeColor:''
        }
    }
    componentWillMount(){
        this._updateThemeColor()
    }
    _updateThemeColor(){
        const {store} = this.context;
        const state = store.getState();
        this.setState({
            themeColor:state.themeColor
        })
    }
    render(){
        return (
            <div>
                <p style = {{color:this.state.themeColor}}>React.js----Book.content</p>
                <ThemeSwitch />
            </div>
        )
    }
}