import React from 'react';
import { 
	Divider,
    Button
} from 'antd';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import InfoCards from '@components/business/infoCards';
import Cards from '@components/widgets/cards';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
import { xml } from 'cheerio';
const cx = classNames.bind(styles);
import {fetchTest} from "../actions";

const mapStateToProps = (state) => ({
    customTestFetch: state.getIn(["homeReducer", "customTestFetch"]),
    testFetch: state.getIn(["homeReducer", "testFetch"])
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchTest
    }, dispatch)
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fatherNumber: 1
        }
        this.test = this.test.bind(this);
    }

    test(txt){
        this.props.fetchTest(txt)
    }

    render(){
        const {customTestFetch, testFetch} = this.props;
        return(
            <div className={cx("home-content")}>
                <div>
                    {customTestFetch.get("data")}
                </div>
                <div>
                    {String(customTestFetch.get("status"))}
                </div>
                <div>
                    {customTestFetch.get("txt")}
                </div>
                <div onClick={() => this.test("lalala")}>this.props.</div>
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
                    <InfoCards father={testFetch} />
                </div>
            </div>
        )
    }
}