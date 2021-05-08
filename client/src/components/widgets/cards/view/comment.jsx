import React from 'react';
import { 
	Card,
	Avatar
} from 'antd';
import {
	EditOutlined,
	FileTextOutlined
} from '@ant-design/icons';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const { Meta } = Card;

export default class CommentCards extends React.Component {
	render(){
		return(
			<a href={this.props.href} className={cx("link")}>
				<Card 
					hoverable={true}
					size={"small"}
					className={cx("home-item", "home-comment-item")}
					title={
						<div className={cx("comment-item-title")}>
							<FileTextOutlined className={cx("comment-name-icon")} />
							<span className={cx("comment-name")}>{this.props.title}</span>
							<span className={cx("item-type")}>文章评论</span>
						</div>
					}
					type="inner"
				>
					{/* <span className={cx("home-item-icon")}>
						<EditOutlined />：
					</span>
					<div className={cx("home-item-content")}>
						<span className={cx("home-item-title")}>
							<p>{this.props.text}</p>
						</span>
						<span className={cx("home-item-time")}>
							{this.props.operating} {this.props.time}
						</span>
					</div> */}

					<Meta
						avatar={<Avatar 
							alt={"头像"}
							src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
						/>}
						title={
							<span className={cx("message-userName")}>{this.props.userName}</span>
						}
						description={
							<>
								<span className={cx("home-item-icon")}>
									<EditOutlined />：
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