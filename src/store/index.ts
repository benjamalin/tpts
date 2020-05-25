import Vue from 'vue'
import Vuex from 'vuex'
import {Fruits} from "@/store/modules/truits";

Vue.use(Vuex);
const store = new Vuex.Store({});
export const fruitsStore =new Fruits({store, name : "fruits"});
