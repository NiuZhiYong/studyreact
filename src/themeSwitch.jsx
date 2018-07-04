import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from './react-redux'

class ThemeSwitch extends Component{
    static propTypes = {
        themeColor:PropTypes.string,
        onChangeColor:PropTypes.func
    }
    handleChangeThemecolor(color){
        if(this.props.onChangeColor){
            this.props.onChangeColor(color)
        }
    }    
    _updateThemeColor(){
        const {store} = this.context;
        const state = store.getState()
        this.setState({
            themeColor:state.themeColor
        })
    }
    render(){
        return (
            <div>
                <button 
                style={{color:this.props.themeColor}}
                onClick={this.handleChangeThemecolor.bind(this,'red')}>Red</button>
                <button 
                style={{color:this.props.themeColor}}
                onClick={this.handleChangeThemecolor.bind(this,'blue')}>Blue</button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        themeColor:state.themeColor
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeColor:(color) => {
            dispatch({type:'CHANGE_COLOR',themeColor:color})
        }
    }
}
ThemeSwitch = connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch)
export default ThemeSwitch