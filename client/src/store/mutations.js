// 直接更新 state的多个方法的对象

import {
  receive_address,
  receive_categorys,
  receive_shops
} from './mutations-types'

export default {
  [receive_address] (state, {address}) {
    state.address = address
  },

  [receive_categorys] (state, {categorys}) {
    state.categorys = categorys
  },

  [receive_shops] (state, {shops}) {
    state.shops = shops
  }
}