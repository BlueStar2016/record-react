// 默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现，这个hook类似shouldComponentUpdate
// PureComponent 要依靠 class 才能使用。而 React.memo() 可以和 functional component 一起使用
import React from 'react'

function CompC({count}) {
    return (
        <div>
            从父组件传过来的数字：{count}
        </div>
    )
}
// function areEqual(prevProps, nextProps) {
//     if(prevProps.count === nextProps.count){
//         return true
//     }else {
//         return false
//     }
// }
// export default React.memo(CompC,areEqual);//根据传入的props参数才进行是否重新渲染
export default React.memo(CompC);//当父组件重新渲染的时候，与父组件无关联的CompC不会重新渲染

