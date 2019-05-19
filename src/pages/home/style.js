import styled from 'styled-components';

export const HomeWapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const ButtonBack = styled.div`
    position: fixed;
    bottom: 100px;
    right: 100px;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666;
    border: 1px solid #dcdcdc;
    font-size: 20px;
`;
// header组件部分的样式

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    padding-right: 10px;
    margin-bottom: 18px;
    font-size: 14px;
    background-color: #f7f7f7;
    border: 1px solid #ddd;
    border-radius: 4px;
    .topic-pic{
        display: block;
        float: left;
        height: 32px;
        width: 32px;
        margin-right: 10px;
    }
`;
export const ListWrapper = styled.div`
    
`;
export const AddmoreList = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #a5a5a5;
    color: #fff;
    cursor: pointer;
    border-radius: 20px;
    margin: 30px 0;
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .list-pic{
        display: block;
        width: 150px;
        height: 100px;
        float: right;
    }
`;

export const ListInfo = styled.div`
    width: 458px;
    float: left;
    .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .disc{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const Recommentwrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`;

export const RecommentItem = styled.div`
    margin-bottom: 5px;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: cover;
`;

export const WriterWrapper = styled.div`
    width: 270px;
    border: 1px solid #dcdcdc;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;