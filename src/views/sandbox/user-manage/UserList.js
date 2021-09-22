import React, { Component } from 'react'
import imgUrl from '../../../image/resourse.png'
// import imgUrl from 'http://10.10.10.191:9082/img/_banner@2x.c52202d8.png'

const poList = [
    {
        id: 1,
        x: 3,
        y: 14,
        width: 106,
        height: 37,
        data: {
            text: "logo",
        },
    },
    {
        id: 2,
        x: 120,
        y: 12,
        width: 702,
        height: 42,
        data: {
            text: "输入框",
        },
    }
]
export default class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            copyList: []
        }
        this.imageCanvasRef = ref => this.imageCanvas = ref;
        this.image = new Image();
        this.image.src = imgUrl;
    }

    pushPage(currentIndex) {
        poList.forEach((e, index) => {
            if (index === currentIndex) {
                this.canvaCtx.beginPath();
                this.canvaCtx.strokeStyle = "green";
                this.canvaCtx.strokeRect(e.x, e.y, e.width, e.height);
            }
            else {
                this.canvaCtx.putImageData(this.state.copyList[index], e.x, e.y);
            }
        });
    }
    renderImageCanvas = () => {
        this.canvaCtx = this.imageCanvas.getContext('2d')
        const img_w = this.image.width;
        const img_h = this.image.height;
        this.imageCanvas.width = img_w;
        this.imageCanvas.height = img_h;

        //设置画布的背景
        var bg = this.canvaCtx.createPattern(this.image, "no-repeat");
        this.canvaCtx.fillStyle = bg;
        this.canvaCtx.fillRect(0, 0, img_w, img_h);

        //通过遍历将数据源的坐标在画布显示
        let copyList = [];
        poList.forEach((e) => {
            this.canvaCtx.beginPath();
            this.canvaCtx.fillStyle = "rgba(239,121,119,.2)";
            this.canvaCtx.fillRect(e.x, e.y, e.width, e.height);
            console.info();
            var imgData = this.canvaCtx.getImageData(e.x, e.y, e.width, e.height);
            copyList.push(imgData)
            this.setState({
                copyList: copyList
            })
        });
    }
    componentDidMount() {
        this.image.onload = () => this.renderImageCanvas()
    }

    render() {
        return (
            <div className="flex">
                <canvas id="mycanvas" ref={this.imageCanvasRef}></canvas>
                <div className="p_list">
                    {
                        poList.map((item, index) => {
                            return (<p key={index} onClick={this.pushPage.bind(this, index)}>{item.data.text}</p>)
                        })
                    }
                </div>
            </div>
        )
    }
}
