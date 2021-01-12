import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: 1,
        fields: {
          name: "Михаил",
          phone: "75238889070",
          Email: "Mishaugl5@email.com",
        },
      },
      {
        id: 2,
        fields: {
          name: "Лада",
          phone: "82577166956",
          Email: "lada@email.com",
          Hobby: "programming",
        },
      },
      {
        id: 3,
        fields: {
          name: "Алекс",
          phone: "18434026721",
          work: "waiter"
        },
      },
    ],
  },

  getters: {
    contacts: state => state.contacts,
    contactById: state => id => state.contacts.find(contact => contact.id == id)
  },

  mutations: {
    deleteContact(state, id) {
      state.contacts = state.contacts.filter((contact) => contact.id !== id);
    },
    addContact(state, { name, phone }) {
      state.contacts.unshift({ id: Math.random(), fields: { name, phone } }) // Адекватный id должен возвращать сервер
    },
    addField(state, data) {
      let contact = state.contacts.find(contact => contact.id == data.id)
      Vue.set(contact.fields, data.title, data.value)
    },
    changeField(state, data) {
      let contact = state.contacts.find(contact => contact.id == data.contactId)
      contact.fields[data.key] = data.newValue
    },
    deleteField(state, data) {
      let contact = state.contacts.find(contact => contact.id == data.contactId)
      Vue.delete(contact.fields, data.key)
    },
    undoChanges(state, initialState) {
      let contact = state.contacts.find(contact => contact.id == initialState.id)
      Vue.set(contact.fields, initialState.key, initialState.value)
    }
  },

  actions: {
    deleteContact({ commit }, id) {
      commit('deleteContact', id)
    },
    addContact({ commit }, data) {
      commit('addContact', data)
    },
    addField({ commit }, data) {
      commit('addField', data)
    },
    changeField({ commit }, data) {
      commit('changeField', data)
    },
    deleteField({ commit }, data) {
      commit('deleteField', data)
    },
    undoChanges({ commit }, initialState) {
      if (initialState.key && initialState.value) {
        commit('undoChanges', initialState)
      }
    }
  },
})
