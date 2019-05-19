import React,{ PureComponent } from 'react';
import { HomeWapper,
        HomeLeft,
        HomeRight,
        ButtonBack
 } from './style';
 import Topic from './components/Topic';
 import List from './components/List';
 import Writer from './components/Writer';
 import Recomment from './components/Commoent';
 import {actionCreators} from './store';
 import { connect } from 'react-redux';
 

class Home extends PureComponent{
    handleScroolTop(){
        window.scrollTo(0,0);
    }
    render(){
        return(
            <HomeWapper>
                <HomeLeft>
                    <img src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"
                        className = 'banner-img'
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recomment/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <ButtonBack onClick = {this.handleScroolTop}>^</ButtonBack> : null}
                
            </HomeWapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}
const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeHomeData(){
            dispatch(actionCreators.getHomeInfo());
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop > 100){
                dispatch(actionCreators.changeTopScroll(true))
            }else{
                dispatch(actionCreators.changeTopScroll(false))
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);