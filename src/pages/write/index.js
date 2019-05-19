import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Write extends Component{
    render(){
        const { thelogin } = this.props;
        if(thelogin){
            return(
               <div>write~</div>
            )
        }else{
            return <Redirect to = '/login'/>
        }
    }
}

const mapStateToProps = (state) => ({
    thelogin: state.getIn(['login','login'])
})



export default connect(mapStateToProps,null)(Write);