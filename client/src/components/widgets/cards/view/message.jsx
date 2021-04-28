import React from 'react';
import { 
	Card,
	Avatar,
	Divider
} from 'antd';
import {
	CommentOutlined,
	MessageOutlined
} from '@ant-design/icons';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const { Meta } = Card;

export default class MessageCards extends React.Component {
	render(){
		return(
			<a href={this.props.href} className={cx("link")}>
				<Card 
					hoverable={true}
					size={"small"}
					className={cx("home-item", "home-message-item")}
					title={
						<div className={cx("message-item-title")}>
							<CommentOutlined className={cx("message-name-icon")} />
							<span className={cx("message-name")}>留言板</span>
						</div>
					}
					type="inner"
				>
					<Card 
						size={"small"}
						className={cx("home-item", "home-message-item-sub")}
					>
						<Meta
							avatar={
								<Avatar alt={"头像"} size={20} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
							}
							title={
								<span className={cx("message-userName-sub")}>{this.props.subUserName}</span>
							}
							description={
								<>
									<span className={cx("home-item-icon-sub")}>
										<MessageOutlined />
									</span>
									<div className={cx("home-item-content-sub")}>
										<div className={cx("home-item-title-sub")}>
											{this.props.subText}
										</div>
									</div>
								</>
							}
						/>
					</Card>
					<Divider orientation="left" style={{color: "#bbb", fontSize: "12px"}}>回复</Divider>
					<Meta
						avatar={<Avatar alt={"头像"} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						title={
							<span className={cx("message-userName")}>{this.props.userName}</span>
						}
						description={
							<>
								<span className={cx("home-item-icon")}>
									<MessageOutlined />
								</span>
								<div className={cx("home-item-content")}>
									<span className={cx("home-item-title")}>
										<p>{this.props.text}</p>
									</span>
									<span className={cx("home-item-time")}>
										{this.props.operating} {this.props.time}
									</span>
								</div>
							</>
						}
					/>
				</Card>
				


				
			</a>
		)
	}
}