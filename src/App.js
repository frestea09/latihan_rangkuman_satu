import React from 'react'
import Header from './Component/Header'
import Content from './Component/Content'
import Mahasiswa from './Component/Mahasiswa'
import Bagus from './Component/Bagus'
import Form from './Component/Form'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      'nama': 'ilman teguh prasetya',
      'count': 0,
      'statusLogin':true,
      'inputNama':'',
      'listMahasiswa':[
        {
          id:'10112299',
          name:'ganteng banget',
        }
      ]
    }
    this.inscrementState = this.inscrementState.bind(this)
    this.callAlert = this.callAlert.bind(this)
    this.setLogout = this.setLogout.bind(this)
    this.setInputNama = this.setInputNama.bind(this)
    this.callBoom = this.callBoom.bind(this)
  }
  setInputNama(event){
      this.setState({
        'inputNama':event.target.value
      }
    )
  }
  setLogout(){
    this.setState(
      {
        'statusLogin':false,
      }
    )
  }
  inscrementState(){
    this.setState(
      {
        'count':this.state.count + 1
      }
    )
  }
  callAlert(){
    alert('Hello ini alert')
  }
  callBoom(){
    alert(this.state.inputNama)
  }
  componentDidMount(){
    console.log('ganteng')
  }
  render(){
    let message 
    const iniMahasiswa = this.state.listMahasiswa.map(item=><Mahasiswa key={item.id} dataItem={item}/>)
    if(this.state.statusLogin === true){
      message = 'hello pelanggan'
    }
    else{
      message = 'tamu'
    }
    return(
      <div>
          <h3>Latihan Rangkuman</h3>
          {iniMahasiswa}
          <Header dataHeader={'ini header'} dataState={this.state.nama} dataCount={this.state.count} tambah={this.inscrementState} methodAlert={this.callAlert}/>
          <Content dataContent = {'ini Content'} dataLogin={message} ubahStatus={this.setLogout} />
          <Bagus/>
          <Form dataInput={this.state.inputNama} setInputNama={this.setInputNama} callBoom={this.callBoom}/>
      </div>
    )
  }
}
export default App