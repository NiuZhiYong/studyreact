import React,{Component} from 'react'
import PropTypes from 'prop-types'

export const connect = (mapStateToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store:PropTypes.object
        }
        constructor(){
            super();
            this.state = {
                allProps:{}
            }
        }
        componentWillMount(){
            const {store} = this.context;
            this._updateThemeColor()
            store.subscribe(() => this._updateThemeColor)
        }
        _updateThemeColor(){
            const {store} = this.context;
            let stateProps = mapStateToProps
            ?mapStateToProps(store.getState(),this.props)
            :{}
            let dispatchProps = mapDispatchToProps
            ?mapDispatchToProps(store.dispitch,this.props)
            :{}
            this.setState({
                allProps:{
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }
        render(){
            return (
                <WrappedComponent {...allProps}/>
            )
        }
    }

    return Connect
}