
import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: '//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png'
    },{
        id: 2,
        title: '国际新闻',
        imgUrl: '//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png'
    }],
    articleList: [
    {
        id: 1,
        title: '2020如果你还想做自媒体，这些坑我建议你一定不要踩！',
        desc: '1.内容定位 如果你在准备做自媒体的时候，没有想好自己要做的内容，而是东做一个西做一个，没有专注某一领域的内容，最终的结果就是浪费了很多时间和精力，但是收获效果却不佳，最终以失败告场',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/6171276-3304c2681c7b7995.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 2,
        title: '夫妻长期两地分居，女人能坚持多久?',
        desc: '人到中年，生活的压力往往很大，为了谋生，许多夫妻不得不长期两地分居。在不同的地方为了自己、父母，孩子而打拼。',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
        id: 3,
        title: '快节奏，慢生活!',
        desc: '看到5年前一个周末的文字，突然发现现在字怎么写的还不如从前!快节奏慢，今天在家体验了一次慢生活。以往每到周末都会和朋友约上去登山去远足去锻炼，这一次选择了在家。',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/18466186-0bc1c5d3b6a19f99.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }],
    recommendList:[{
        id: 1,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id: 2,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
    },{
        id: 3,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
    },{
        id: 4,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    }]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
} 