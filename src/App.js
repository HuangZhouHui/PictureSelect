
import logo from './logo.svg';
import React, { Component,useState } from 'react';
import {Button, Checkbox, Col} from 'antd';
import './App.css';

const PictureSelect = (props) => {
  const {pictures, value, onChange} = props;
    return(
      <Checkbox.Group onChange={onChange} value = {value} >
        { pictures.map(item =>
          <div
               className='div_check' 
               key={item.id}>
            <Checkbox value={item.id} className='checkbox'></Checkbox>
            <div style={{
              height:'130px',
              overflow:'hidden',
              background:`url(${item.url}) no-repeat center`,
              backgroundSize: 'cover',
              width:'130px',
              margin: '0 auto',
            }}
             >
            </div>
            <p>
              {item.name}
            </p>
          </div>
        )}
    </Checkbox.Group>
)};


class Picture extends Component {
  constructor(props){
    super(props);
  }
  state ={
    allChecked:false,
    value:[],
  }
  setValue(value){
    console.log(value);
    this.setState({value:value,allChecked:value.length===3});//总数
  }
  handleCheckAll=(e)=> {
    const checked = e.target.checked;
    this.setState({ allChecked: checked });
    if(checked){
      this.setState({ value: ['1','2','3'] });//全部
    }else{
      this.setState({ value: [] });
    }
  }
  render(){
    const state = this.state;
    // const [value, setValue] = React.useState(['1']);
    const pictures = [
      {
        id: '1',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '2',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
      {
        id: '3',
        name: 'foo',
        url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
      },
    ]; 

    return (
      <div className="App">
        <div>
          <Checkbox
              onChange={this.handleCheckAll} 
              checked={this.state.allChecked}
          >
            已选中{this.state.value.length}个文件
          </Checkbox>
        </div>
        <PictureSelect pictures={pictures} value={state.value} onChange={(value) => this.setValue(value)} />
      </div>
    );
  }
}

export default Picture;
