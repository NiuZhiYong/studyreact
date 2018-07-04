import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './themeSwitch'
import {connect} from './react-redux'

class Content extends Component{
    static propTyps = {
        themeColor:PropTypes.string
    }
    render(){
        return (
            <div>
                <p style={{color:this.props.themeColor}}>React.js littleBook</p>
                <ThemeSwitch /> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor:state.themeColor
    }
}

Content = connect(mapStateToProps)(Content)

export default Content;