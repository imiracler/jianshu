import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 240px;
    height: 56px;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${LogoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float: right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .zoom{
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
			background: #777;
			color: #fff;
		}
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size: 12px;
    padding: 0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;
`

export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    margin-top: 9px;
    margin-left: 20px;
    width: 240px;
    height: 38px;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 19px;
    box-sizing: border-box;
    padding: 0 30px 0 25px;
    background: #eee;
    color: #666;
    &::placeholder{
        color: #999;
    }
    &.focused{
        width: 280px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 280px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 240px;
    }
`;

export const Addition = styled.div`
    height: 56px;
    position: absolute;
    margin-right: 300px;
    right: 0;
    top: 0;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background: #ec6149;
    }
`;