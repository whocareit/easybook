import React ,{PureComponent } from 'react';
import { ListWrapper, ListInfo ,ListItem,AddmoreList} from '../style'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store'


class List extends PureComponent{
    render(){
        const { items ,addMolist,page } = this.props;
        return (
            <ListWrapper>
                {
                    items.map((item,index) => {
                        return (
                            <Link to = {'/detail/' + item.get('id') } key = {index}>
                                <ListItem>
                                    <img src = {item.get('imgUrl')}
                                    alt = '' 
                                    className = 'list-pic'
                                    />
                                    <ListInfo>
                                        <h3 className = 'title'>{item.get('title')}</h3>
                                        <p  className = 'disc'>{item.get('disc')}</p>
                                    </ListInfo>
                                </ListItem>
                           </Link>
                        )
                    })
                }
                <AddmoreList onClick = {() => addMolist(page)}>加载更多...</AddmoreList>
            </ListWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        items: state.getIn(['home','itemList']),
        page: state.getIn(['home','itemPage']),
    }
}
const mapDispatchToProps = (dispatch) => ({
    addMolist(page){
        dispatch(actionCreators.addMorelist(page));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);