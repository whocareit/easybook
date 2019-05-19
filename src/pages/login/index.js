import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';
import { LoginWrapper,LoginBorder,LoginInput,Button } from './style';


class Login extends Component{
    render(){
        const { thelogin } = this.props;
        if(!thelogin){
            return(
                <LoginWrapper>
                    <LoginBorder>
                        <LoginInput placeholder = '账号' ref = {(input) =>{this.account = input}}/>
                        <LoginInput placeholder ='密码' type = 'Password' ref = {(input) => {this.password = input}}/>
                        <Button onClick = {() => this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBorder>
                </LoginWrapper>
            )
        }else{
            return <Redirect to = '/'/>
        }
    }
}

const mapStateToProps = (state) => ({
    thelogin: state.getIn(['login','login'])
})

const mapDiapatchToProps = (dispatch) => ({
    login(account,password){
        dispatch(actionCreators.getLogin(account.value,password.value));
    }
})


export default connect(mapStateToProps,mapDiapatchToProps)(Login);