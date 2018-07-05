import Content from '../components/Content'
import {connect} from './react-redux'

const mapStateToProps = (state) => {
    return {
        themeColor:state.themeColor
    }    
}

Content = connect(mapStateToProps)(Content)

export default Content