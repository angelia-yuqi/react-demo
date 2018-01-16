import  Mock from 'mockjs';

// Mock.setup({timeout:'1200-2600'});

Mock.mock('/data', {
    data: {
        'list|10':[
            {
                'id|+1': 1,
                'key|+1': 1,
                'name|1':['一叶子','相宜本草','纸巾','牙膏','白菜','毛巾','洗发水'],
                'type|1':['护肤品','生活用品','食品'],
                'number|100-1000':1,
                'payout|1-100':1
            }
        ]
    }
});