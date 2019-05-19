import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`
export const Logo = styled.div`
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background-image: url(${logoPic});
    background-size: cover;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 10px;
    box-sizing: border-box;
    margin: 0 auto;
`;
export const Navitem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.active{
        color: #ea6f5a;
    }
    &.right{
        float: right;
        color: #969696;
    }
`;

export const Searchwapper = styled.div`
    float: left;
    position: relative;
    .slide-enter{
        transition: all 0.2s ease-out;
    }
    .slide-enter-active{
        width: 240px;
    }
    .slide-exit{
        transition: all 0.2s ease-out;
    }
    .slide-exit{
        width: 160px;
    }
    .demo {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused{
            color: #fff;
            background: #999;
        }
    }
`;

export const Navresearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 30px;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 18px;
    border: none;
    outline: none; 
    background: #eee;
    font-size: 14px;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 240px;
    }
`;
export const SearchInfo = styled.div`
    position: absolute;
    left: 30px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0 ,0 ,0 ,.2);
`;
export const SearchInfotitle = styled.div`
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    color: #969696;
`;
export const SearchInfoswitch = styled.a`
    float: right;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .switch{
        display: block;
        float: left;
        font-size: 12px;
        margin-left: 2px;
        transition: all 0.2s ease-in;
        transform-origin: center center;
    }
`;
export const SearchInfoList = styled.div`

`;
export const SearchInfoitem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 20px;
    margin-bottom: 10px;
    border-radius: 3px;
    line-height: 20px;
    padding: 0 5px;
    color: #787878;
    border: 1px solid #ddd;
`;
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 30px;
    line-height: 38px;
    border-radius: 18px;
    padding: 0 20px;
    border: 1px solid #ea6f5a;
    &.res{
        color: #ea6f5a;
    }
    &.wri{
        background: #ea6f5a;
        color: #fff;
    }
`;