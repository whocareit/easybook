import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 56px;
    z-index: 0;
    width: 100%;
    height: 92%;
    background: #eee;
`;

export const LoginBorder = styled.div`
    margin: 100px auto;
    width: 400px;
    box-shadow: 0 0 8px rgba(0 ,0 , 0, .1);
    border-radius: 4px;
    padding-top: 35px;
    height: 450px;
    background-color: #fff;
`;

export const LoginInput = styled.input`
    display: block;
    width: 290px;
    height: 40px;
    line-height: 40px;
    margin: 40px auto;
    padding-left: 10px; 
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
`;

export const Button = styled.div`
    display: block;
    margin: 40px auto;
    width: 300px;
    text-align: center;
    height: 45px;
    border-radius: 25px;
    outline: none;
    background-color: #3194d0;
    color: #fff;
    line-height: 45px;
`;
