import React,{useContext} from 'react'
import AppContext from '../context';

export default function CompB() {
    const { name } = useContext(AppContext);
    return (
        <p>我是组件B,拿到设置的名字为{name}</p>
    )
}
