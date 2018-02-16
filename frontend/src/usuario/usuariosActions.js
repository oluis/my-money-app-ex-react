import axios from 'axios';
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {selectTab, showTabs} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
  const request = axios.get(`${BASE_URL}/usuarios`)
  return {
    type: 'USUARIOS_FETCHED',
    payload: request
  }
}

export function showUpdate(user){
  return [
    initialize('usuarioForm', user), {
      type: 'EDIT_USER',
      payload: user
    }
  ]
}

export function showDelete(billingCycle){
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ]
}

export function init(){
  return [
    showTabs('tabList','tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('usuariosForm', INITIAL_VALUES)
  ]
}

function submit(values, method){
  return dispatch => {
    const id = values._id ? values._id : ''
    axios[method](`${BASE_URL}/usuarios/${id}`,values)
    .then(resp => {
      toastr.success('Sucesso', 'Operação realizada com sucesso.')
      dispatch(init())
    })
    .catch(e => {
      e.response.data.errors.forEach(error => toastr.error('Erro', error))
    })
  }
}

export function create(values){
  return submit(values, 'post');
}

export function update(values){
  return submit(values, 'put');
}

export function remove(values){
  return submit(values, 'delete');
}

export function cancel(values){
  console.log(values)
}
