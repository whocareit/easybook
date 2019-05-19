import React ,{ PureComponent } from 'react';
import { connect} from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import  { actionCreators }  from './store';
import { actionCreators as LoginactionCreators } from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    Navitem,
    Navresearch,
    Addition,
    Button,
    Searchwapper,
    SearchInfo,
    SearchInfotitle,
    SearchInfoswitch,
    SearchInfoList,
    SearchInfoitem
} from './style.js';

class Header extends PureComponent{
    getListArea(){
    const { onFocus,mouseIn,items,page,totalPage,handleMouseenter,handleMouseLeave,handleChange} = this.props;
    const pageList = [];
    const newItems = items.toJS();
    if(newItems.length){
        for(let i = (page - 1) * 10; i < page * 10; i++){
            pageList.push(<SearchInfoitem key = {newItems[i]}>{newItems[i]}</SearchInfoitem>)
        }
    }
        if(onFocus || mouseIn){
            return(
                <SearchInfo 
                onMouseEnter = {handleMouseenter}
                onMouseLeave = {handleMouseLeave}>
                    <SearchInfotitle>
                        热门搜索
                        <SearchInfoswitch onClick = {() => handleChange(page,totalPage,this.spinIcon)}>
                        <span ref = {(icon) => {this.spinIcon = icon}} className="iconfont switch">&#xe851;</span>
                        换一批
                        </SearchInfoswitch>
                        </SearchInfotitle>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    render(){
        const { onFocus,handleInputfocus,handleIputblur,items,login,logout} = this.props;
        return (
            <HeaderWrapper>
                <Link to = '/'>
                    <Logo />
                </Link>
                <Nav>
                    <Navitem className = 'left active'>首页</Navitem>
                    <Navitem className = 'left'>下载App</Navitem>
                    <Searchwapper>
                        <CSSTransition
                        in = {onFocus}
                        timeout = {200}
                        classNames = 'slide'
                        > 
                        <Navresearch
                            className = {onFocus ? 'focused' : ''}
                            onFocus = {() => handleInputfocus(items)}
                            onBlur = {handleIputblur}
                        ></Navresearch>
                        </CSSTransition>
                        <span className={onFocus ? 'iconfont demo focused' : 'iconfont demo'}>&#xe637;</span> 
                        {this.getListArea(onFocus)}
                    </Searchwapper>
                    {
                        login ?
                         <Navitem className = 'right' onClick = {logout}>退出</Navitem> :
                         <Link to = '/login'><Navitem className = 'right'>登录</Navitem></Link>
                    }
                    <Navitem className = 'right'><span className="iconfont">&#xe636;</span></Navitem>    
                </Nav>
                <Addition>
                    <Link to = '/write'>
                        <Button className = 'wri'>
                            <span className="iconfont">&#xe615;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className = 'res'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        onFocus : state.getIn(['header','onFocus']),
        items : state.getIn(['header','items']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage']),
        login: state.getIn(['login','login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleInputfocus(items){
            if(items.size === 0){
                dispatch(actionCreators.changeItem());
            }
            dispatch(actionCreators.inputFocus());
        },

        handleIputblur(){
            dispatch(actionCreators.inputBlur());
        },

        handleMouseenter(){
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },

        handleChange(page,totalPage,spin){
            let originAngel = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngel){
                originAngel = parseInt(originAngel,10);
            }else{
                originAngel = 0;
            }
            spin.style.transform ='rotate('+(originAngel + 360)+'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },

        logout(){
            dispatch(LoginactionCreators.logoutL())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);