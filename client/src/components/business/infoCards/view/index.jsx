import React from 'react';
import {
	Card, 
	Avatar,
	Image,
	Popover,
	Tag
} from 'antd';
import {
	GithubOutlined,
	WechatOutlined,
	MoneyCollectOutlined
} from '@ant-design/icons';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const { Meta } = Card;

export default class InfoCards extends React.Component {
	constructor(props){
        super(props);
        console.log("这里是constructor！");
        this.state = {
            a: 1000
        }
		this.sub = this.sub.bind(this);
    }
    static getDerivedStateFromProps(nextProps, nextState){
        console.log("这里是static getDerivedStateFromProps！");
		console.log("static getDerivedStateFromProps！","nextProps",nextProps,"nextState",nextState);
        return null;
    }
    componentDidMount(){
        console.log("这里是componentDidMount！");
    }
    // shouldComponentUpdate(nextProps, nextState){ //PureComponent 搭配 immutable.js，perfect！
    //     console.log("这里是shouldComponentUpdate！");
	// 	console.log("shouldComponentUpdate！","nextProps",nextProps,"nextState",nextState);
	// 	console.log("THIS","this.props",this.props,"this.state",this.state);
	// 	return true;
    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("这里是getSnapshotBeforeUpdate！");
		console.log("getSnapshotBeforeUpdate！","prevProps",prevProps,"prevState",prevState);
		console.log("THIS","this.props",this.props,"this.state",this.state);
        return "滚动条在150px处~";
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("这里是componentDidUpdate！");
		console.log("componentDidUpdate！","prevProps",prevProps,"prevState",prevState,"snapshot",snapshot);
		console.log("THIS","this.props",this.props,"this.state",this.state);
    }
    componentWillUnmount(){
        console.log("这里是componentWillUnmount！");
    }

	sub(){
		this.setState(
			(state, props) => {
				console.log(state, props);
				return {
					a: --state.a
				}
			},()=>{
				console.log("setState完成！")
			}
		);
	}

	render() {
        console.log("这里是render！");
		
		return(
			<div className={cx("info-cards-group")}>
				<Card
					className={cx("info-cards-main")}
					cover={
						<Image
							width={300}
							placeholder={true}
							src="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?w=300"
							fallback="data:image/png;base64,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"
							preview={
								{
									src: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg'
								}
							}
						/>
					}
					actions={[
						<a href={"https://www.baidu.com"}>
							<Popover placement="top" content={
								<div>
									github
								</div>
							}>
								<GithubOutlined className={cx("info-cards-icon")} key="github" />
							</Popover>
						</a>,
						<Popover placement="top" content={
							<div>
								wechat
							</div>
						}>
							<WechatOutlined className={cx("info-cards-icon")} key="wechat" />
						</Popover>,
						<Popover placement="top" content={
							<div>
								money
							</div>
						}>
							<MoneyCollectOutlined className={cx("info-cards-icon")} key="money" />
						</Popover>,
					]}
				>
					<Meta
					avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
					title={this.state.a}
					description="欢迎光临~！"
					onClick={()=>this.sub()}
					/>
				</Card>

				<Card className={cx("info-cards-tag-group")}>
					<Tag className={cx("info-cards-tag")} color="red">
						HTML
					</Tag>
					<Tag className={cx("info-cards-tag")} color="yellow">
						CSS
					</Tag>
					<Tag className={cx("info-cards-tag")} color="blue">
						Javascript
					</Tag>
					<Tag className={cx("info-cards-tag")} color="#0769ad">
						Jquery
					</Tag>
					<Tag className={cx("info-cards-tag")} color="#61dafb">
						React
					</Tag>
					<Tag className={cx("info-cards-tag")} color="#41b883">
						Vue
					</Tag>
					<Tag className={cx("info-cards-tag")} color="#333">
						Node.js
					</Tag>
					<Tag className={cx("info-cards-tag")} color="#e1234e">
						NestJS
					</Tag>
					<Tag className={cx("info-cards-tag")} color="#75afcc">
						Webpack
					</Tag>
				</Card>

				<Card className={cx("info-cards-other")}>
					<p>2021年4月28日</p>
					江苏南京，晴，25℃-30℃
				</Card>
		  	</div>
		)
	}
}