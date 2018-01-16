 import React from  'react';
 import {Link} from 'react-router-dom';
 import { Row, Col, Card,Icon,Tabs  } from 'antd';
 import EchartsView from './echartsView'
 import EchartsLine from './line'
 import EchartsMap from './EchartsMap'
 import Picker from './datePicker'
 class App extends React.Component{
    render() {
        const TabPane = Tabs.TabPane;
        return(
            <div className="count-content">
                <Row>
                    {/*<Col span={24}> <Link to="/list">进入产品列表</Link> </Col>*/}
                    <Col span={8}>
                        <div className="cloud-box colorGreen">
                            <Card hoverable="true">
                                <div className="count-list">
                                    <Icon type="pie-chart" className="count-img"/>
                                    <span className="hrLine"> </span>
                                    <div className="count-right">
                                        <p>2000</p>
                                        <p>浏览量(PV)</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className="cloud-box colorYellow">
                            <Card hoverable="true">
                                <div className="count-list">
                                    <Icon type="bar-chart" className="count-img"/>
                                    <span className="hrLine"> </span>
                                    <div className="count-right">
                                        <p>3000</p>
                                        <p>访客数(UV)</p>
                                    </div>
                                </div>
                            </Card>
                        </div>

                    </Col>
                    <Col span={8}>
                        <div className="cloud-box colorBlue">
                            <Card hoverable="true">
                                <div className="count-list">
                                    <Icon type="dot-chart" className="count-img"/>
                                    <span className="hrLine"> </span>
                                    <div className="count-right">
                                        <p>4000</p>
                                        <p>用户注册数</p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={24}>
                        <Picker/>
                    </Col>
                    <Col span={10}>
                        <div className="cloud-box">
                            <Card hoverable="true">
                                <EchartsView/>
                            </Card>
                        </div>
                    </Col>
                    <Col span={14}>
                        <div className="cloud-box">
                            <Card hoverable="true">
                                <EchartsLine/>
                            </Card>
                        </div>
                    </Col>
                    <Col span={24}>
                        <div className="cloud-box">
                            <Card hoverable="true">
                                <EchartsMap />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );

    }
}
export  default App