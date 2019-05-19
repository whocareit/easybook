import React ,{ PureComponent } from 'react';
import { Recommentwrapper,RecommentItem} from '../style';
import { connect } from 'react-redux';

class Recomment extends PureComponent{
    render(){
        const { items } = this.props;
        return (
            <Recommentwrapper>
                {
                    items.map((item) => {
                        return <RecommentItem  key= {item.get('id')} imgUrl = {item.get('imgUrl')}/>
                    })
                }
            </Recommentwrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.getIn(['home','reList'])
    }
}

export default connect(mapStateToProps,null)(Recomment);