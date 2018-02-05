import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
//import Form from './billingCycleForm'

import {create, update, remove, init} from './usuariosActions'

class CadUsuario extends Component {

  componentWillMount() {
    this.props.init()
  }

  renderRows() {
    const list = this.props.list || [
      {
        name: 'teste'
      }
    ]
    console.log(list);
    return list.map(bc => (<tr key={bc._id}>
      <td>{bc.name}</td>
      <td className='table-actions'>
        <button className='btn btn-warning' onClick={() => this.props.remove(bc)}>
          <i className='fa fa-pencil'></i>
        </button>
        <button className='btn btn-danger' onClick={() => this.props.remove(bc)}>
          <i className='fa fa-trash-o'></i>
        </button>
      </td>
    </tr>))
  }

  render() {
    return (<div>
      <ContentHeader title='Usuários' small='Cadastro'/>
      <Content>
        <div className='row'>
          <div className='col-md-12'>
            <div className="box box-solid">
              <div className="box-body">
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th className='table-actions'>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.renderRows()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </div>)
  }
}
const mapStateToProps = state => ({list: state.usuario.list})
const mapDispatchToProps = dispatch => bindActionCreators({
  create,
  update,
  remove,
  init
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadUsuario)
