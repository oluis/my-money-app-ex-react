import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {create, update, remove, init, showUpdate} from './usuariosActions'
import If from '../common/operador/if'

class UsuarioForm extends Component {

  render(){
    const {handleSubmit} = this.props
    return (
      <form role='formUser' onSubmit={init} className='form-horizontal' onSubmit={handleSubmit}>
        <div className='box box-default boxpaddingleft'>
        <h3 className="box-title">Cadastro de Usuário</h3>
        <div className='box-body'>
          <div className='row'>
            <Field name='name' component={labelAndInput}
              label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={false} />
          </div>
          <div className='row'>
          <Field name='email' component={labelAndInput}
            label='Login' cols='12 4' placeholder='Informe o nome' readOnly={false} />
          </div>
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-primary`}>
            Salvar
          </button>
          <button type='button' className='btn btn-default'
            onClick={() => this.props.showUpdate(this.props.user)}>Cancelar</button>
        </div>
        </div>
      </form>
    )
  }
}

UsuarioForm = reduxForm({form: 'usuarioForm', destroyOnUnmount: false})(UsuarioForm)
 const selector = formValueSelector('usuarioForm')
 const mapStateToProps = state => ({
   user : {
     name: selector(state, 'name'),
      _id: selector(state, '_id')
    }
 })
const mapDispatchToProps = dispatch => bindActionCreators({showUpdate}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UsuarioForm)
