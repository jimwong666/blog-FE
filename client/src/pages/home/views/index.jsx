import React from 'react';
import { 
	Divider
} from 'antd';
import InfoCards from '@components/business/infoCards';
import Cards from '@components/widgets/cards';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
import { xml } from 'cheerio';
const cx = classNames.bind(styles);

export default class Index extends React.Component{
    render(){
        return(
            <div className={cx("home-content")}>
                <div className={cx("info-list")}>
                    <Divider orientation="left" style={{color: "#999"}}>2020-04-27</Divider>
                    <Cards
                        type="article"
                        href={"javascript:void(0);"}
                        text={"Redux源码解析"}
                        time={"9:45"}
                        operating={0}
                    />
                    <Divider orientation="left" style={{color: "#999"}}>2020-04-24</Divider>
                    <Cards
                        type="message"
                        href={"javascript:void(0);"} 
                        subUserId={"666"}
                        subUserName={"666"}
                        subText={"这题应该这么解...！"}
                        userId={"9527"}
                        userName={"9527"}
                        text={"你叫什么名字？"}
                        time={"16:48"}
                        operating={1}
                    />
                    <Divider orientation="left" style={{color: "#999"}}>2020-04-21</Divider>
                    <Cards
                        type="comment"
                        href={"javascript:void(0);"} 
                        userId={"9527"}
                        userName={"9527"}
                        title={"JS源码赏析"}
                        text={"写的好啊！"}
                        time={"16:48"}
                        operating={2}
                    />
                </div>
                <div className={cx("info-cards")}>
                    <InfoCards />
                </div>
            </div>
        )
    }
}