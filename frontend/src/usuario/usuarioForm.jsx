import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import {create, update, remove, init, editUser} from './usuariosActions'
import If from '../common/operador/if'

class UsuarioForm extends Component {

  render(){
    console.log('visible '+ this.props.modeEdit);
    var visible = !this.props.modeEdit;
    return (
      <If test={visible}>
      <form role='formUser' onSubmit={init}>
        <div className='box-body'>
          <Field name='nome' component={labelAndInput}
            label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={false} />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default'
            onClick={() => this.props.editUser(this.props.modeEdit)}>Cancelar</button>
        </div>
      </form>
</If>
    )
  }
}

UsuarioForm = reduxForm({form: 'usuarioForm', destroyOnUnmount: false})(UsuarioForm)
// const selector = formValueSelector('usuarioForm')
 const mapStateToProps = state => ({
   modeEdit : state.usuario.modeEdit
 })
const mapDispatchToProps = dispatch => bindActionCreators({editUser}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UsuarioForm)
