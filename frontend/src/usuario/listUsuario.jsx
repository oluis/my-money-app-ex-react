import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import {reduxForm, Field, formValueSelector} from 'redux-form'

import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import Form from './usuarioForm'
//import Form from './billingCycleForm'
import If from '../common/operador/if'

import {create, update, remove, init, showUpdate} from './usuariosActions'

class ListUsuario extends Component {

  componentWillMount() {
    this.props.init()
  }

  renderRows() {
    const list = this.props.list || []
    return list.map(bc => (<tr key={bc._id}>
<If test={!bc.modeEdit}>
      <td>
        {bc._id}
      </td>
</If>
<If test={!bc.modeEdit}>
      <td>
        {bc.name}
      </td>
</If>
<If test={!bc.modeEdit}>
      <td>
        {'' + bc.email}
      </td>
</If>
<If test={!bc.modeEdit}>
        <td className='table-actions'>
          <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.remove(bc)}>
            <i className='fa fa-trash-o'></i>
          </button>
        </td>
</If>
      <If test={bc.modeEdit}>
        <td colSpan={4}>
          <Form/>
        </td>
      </If>
    </tr>))
  }

  render() {
    return (<div>
      <ContentHeader title='Usuários' small='Lista'/>{this.state}
      <Content>
        <div className='row'>
          <div className='col-md-12'>
            <div className="box box-solid">
              <div className="box-body">
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th style={{width: '10%'}}>Id</th>
                      <th style={{width: '20%'}}>Nome</th>
                      <th style={{width: '60%'}}>Login</th>
                      <th style={{width: '10%'}} className='table-actions'>Ações</th>
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
const selector = formValueSelector('usuarioForm')
const mapStateToProps = state => ({list: state.usuario.list})
const mapDispatchToProps = dispatch => bindActionCreators({
  create,
  update,
  remove,
  init,
  showUpdate
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ListUsuario)
