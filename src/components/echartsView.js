/*
 * @Author: dupi
 * @Date: 2017-06-28 17:16:12
 * @Last Modified by: duxianwei
 * @Last Modified time: 2017-09-26 18:04:37
 */
import React, { Component } from 'react'
import { Tabs  } from 'antd';
import echarts from 'echarts'


// @connect(
//     (state, props) => ({
//         config: state.config,
//     })
// )
export default class EchartsView extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const sample = document.getElementById('sample');
        const myChart = echarts.init(sample);
        const option = {
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option)
    }
    render() {
        return (
           <div id="sample" style={{width:400,height:400}}> </div>
        )
    }
}
