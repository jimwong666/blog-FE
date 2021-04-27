import React from 'react';
import { 
	Card
} from 'antd';
import {
	FileTextOutlined
} from '@ant-design/icons';
import styles from '../styles/index.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default class AeticleCards extends React.Component {
	render(){
		return(
			<a href={this.props.href} className={cx("link")}>
				<Card 
					hoverable={true} 
					size={"small"}
					className={cx("home-item")}
				>
					<span className={"home-item-icon"}>
						<FileTextOutlined />
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