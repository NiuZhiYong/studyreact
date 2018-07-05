import Header from '../components/Header'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        themeColor:state.themeColor
    }
}

Header = connect(mapStateToProps)(Header)

export default Header