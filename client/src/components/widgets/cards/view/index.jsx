import React from 'react';
import ArticleCards from './article';
import CommentCards from './comment';
import MessageCards from './message';

const operating = ["发表于", "编辑于", "删除于"];

export default class Cards extends React.Component {
	render(){
		const _props = Object.assign({},
				{...this.props},
				{operating: operating[this.props.operating]}
			);

		switch(this.props.type){
			case "article":
				return <ArticleCards {..._props} />
				break;
			case "comment":
				return <CommentCards {..._props} />
				break;
			case "message":
				return <MessageCards {..._props} />
				break;
			default:
				return <ArticleCards {..._props} />
		}
	}
}