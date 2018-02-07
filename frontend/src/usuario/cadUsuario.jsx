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

import {create, update, remove, init, editUser} from './usuariosActions'

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


    var visible = this.props.modeEdit;
    console.log(visible == false ? {display: 'none;'} : {});
    return list.map(bc => (<tr key={bc._id}>


        <td style={{display: visible ? 'block' : 'none' }}>{bc.name}</td>
        <If test={visible}>
        <td className='table-actions' style={visible == false ? {display: 'none;'} : {}}>

          <button className='btn btn-warning' onClick={() => this.props.editUser(this.props.modeEdit)}>
            <i className='fa fa-pencil'></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.props.remove(bc)}>
            <i className='fa fa-trash-o'></i>
          </button>

        </td>
        </If>
        <If test={!visible}>
          <td colSpan={2}>
            <Form />
          </td>
        </If>



    </tr>))
  }

  render() {
    return (<div>
      <ContentHeader title='Usuários' small='Cadastro'/>{this.state}
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
const selector = formValueSelector('usuarioForm')
const mapStateToProps = state => ({
  list: state.usuario.list,
  modeEdit : state.usuario.modeEdit
})
const mapDispatchToProps = dispatch => bindActionCreators({
  create,
  update,
  remove,
  init,
  editUser
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CadUsuario)
