import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import classNames from "classnames/bind";
import styles from "../styles/index.scss";
const cx = classNames.bind(styles);
import {asyncFetchPreData, asyncFetchPreData2} from '../actions'

const mapStateToProps = (state) => ({
    preData: state.getIn(['workReducer', 'preData']),
    preData2: state.getIn(['workReducer', 'preData2'])
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        asyncFetchPreData,
        // asyncFetchPreData2
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Work extends React.Component{

    componentDidMount(){
        this.props.asyncFetchPreData();
        // this.props.asyncFetchPreData2();
    }

    render(){
        const {preData, preData2} = this.props;
        console.log(preData.toJS());
        console.log("---------------------");
        // console.log(preData2.toJS());
        return(
            <ul>
                {
                    preData.get('data') && preData.getIn(['data', 'data'])?.map(item=>{
                        return <li key={item.get('id')}>
                            <span>{item.get('name')}</span>
                            <img src={item.get('imgUrl')} />
                        </li>
                    })
                }
            </ul>
        )
    }
}

