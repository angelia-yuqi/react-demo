/*
 * @Author: dupi
 * @Date: 2017-06-28 17:16:12
 * @Last Modified by: duxianwei
 * @Last Modified time: 2017-09-26 18:04:37
 */
import React, { Component } from 'react'
import echarts from 'echarts'
import {Tabs  } from 'antd';
import moment from 'moment';


// @connect(
//     (state, props) => ({
//         config: state.config,
//     })
// )
export default class EchartsLine extends Component {
    constructor(props) {
        super(props);
        this.state={
            key:1
        }
    }

    componentDidMount() {

      this.LineData(this.state.key);

    }
    onLineChange = (key) => {
        this.LineData(key);
        // this.setState({
        //     key:key
        // });
        // console.log(this.state.key)
    };
    LineData = (key)=>{
        console.log(key)
        const line = document.getElementById('line'+key);
        const myChart = echarts.init(line);
        const dateArray = []
        for(let i=0; i<=7; i++){
            dateArray.push(moment(new Date() - (7 - i) * 24 * 3600 * 1000).format('YYYY-MM-DD'))
        }
        const option = {
            title: {
                text: '最近7天用户访问量',
                left: '50%',
                show: false,
                textAlign: 'center'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                backgroundColor: 'rgba(255,255,255,1)',
                padding: [5, 10],
                textStyle: {
                    color: '#7588E4',
                },
                extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
            },
            legend: {
                right: 20,
                orient: 'vertical',
            },
            xAxis: {
                type: 'category',
                data: dateArray,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    interval: 'auto',
                    lineStyle: {
                        color: ['#D4DFF5']
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#609ee9'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 10
                    }
                }
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color: ['#D4DFF5']
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#609ee9'
                    }
                },
                axisLabel: {
                    margin: 0,
                    textStyle: {
                        fontSize: 8
                    }
                }
            },
            series: [{
                name: 'pv',
                type: 'line',
                smooth: true,
                showSymbol: false,
                symbol: 'circle',
                symbolSize: 6,
                data: ['1200', '1400', '808', '811', '626', '488', '1600'],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(216, 244, 247,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(216, 244, 247,1)'
                        }], false)
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#58c8da'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3
                    }
                }
            }]
        };
        myChart.setOption(option);
    };
    render() {
        const TabPane = Tabs.TabPane;
        return (
            <Tabs defaultActiveKey="1" onChange ={this.onLineChange}>
                <TabPane tab="浏览量(PV)" key="1"  forceRender={true}>
                   <div id="line1" style={{width:600,height:340}}> </div>
                </TabPane>
                <TabPane tab="访客数(UV)" key="2" forceRender={true}>
                    <div id="line2" style={{width:600,height:340}}> </div>
                </TabPane>
                <TabPane tab="用户注册数" key="3"  forceRender={true}>
                    <div id="line3" style={{width:600,height:340}}> </div>
                </TabPane>
            </Tabs>
        )
    }
}
