import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch'

export default class Content extends Component {
    static propTypes = {
        themeColor:PropTypes.string
    }
    render(){
        return (
            <div>
                <p style = {{color:this.props.themeColor}}>React.js----Book.content</p>
                <ThemeSwitch />
            </div>
        )
    }
}
