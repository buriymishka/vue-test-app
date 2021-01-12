<template>
  <section class="contacts">
    <h1 class="contacts__title">Список контактов</h1>
    <ContactAdd @addContact="addContact" />
    <ul v-if="contacts.length" class="contacts__list">
      <ContactItem
        v-for="contact in contacts"
        :key="contact.id"
        :data="contact"
        @deleteContact="deleteContactHandler(contact.id)"
      />
    </ul>
    <h3 class="contacts__empty" v-else>В Вашем списке нет контактов</h3>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
import ContactItem from "@/components/ContactItem";
import ContactAdd from "@/components/ContactAdd";

export default {
  name: "Home",
  components: {
    ContactItem,
    ContactAdd,
  },
  computed: {
    ...mapGetters(['contacts'])
  },
  methods: {
    ...mapActions(['deleteContact', 'addContact']),
    deleteContactHandler(id) {
      if(confirm('Вы уверены, что хотите удалить контакт?')) {
        this.deleteContact(id)
      }
    }
  },
};
</script>

<style scoped>
.contacts {
  width: 900px;
  padding: 20px;
  box-shadow: 0 0 10px 2px #7a7a7a;
  border-radius: 5px;
}

.contacts__title {
  font-size: 36px;
  text-align: center;
}

.contacts__empty {
  text-align: center;
}

@media (max-width: 950px) {
  .contacts {
    width: 500px;
  }
}

@media (max-width: 600px) {
  .contacts {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    box-shadow: none;
  }
}
</style>
