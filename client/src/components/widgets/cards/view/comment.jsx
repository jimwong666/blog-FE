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

export default class CommentCards extends React.Component {
	render(){
		return(
			<a href={this.props.href} className={cx("link")}>
				<Card 
					hoverable={true}
					size={"small"}
					className={cx("home-item", "home-comment-item")}
					title={
						<>
							<FileTextOutlined />
							<span className={cx("comment-name")}>{this.props.title}</span>
							<span className={cx("item-type")}>文章评论</span>
						</>
					}
					type="inner"
				>
					<span className={"home-item-icon"}>
						<EditOutlined />
					</span>
					<div className={"home-item-content"}>
						<span className={"home-item-title"}>
							<p>{this.props.text}</p>
						</span>
						<span className={"home-item-time"}>
							{this.props.operating} {this.props.time}
						</span>
					</div>
				</Card>
			</a>
		)
	}
}