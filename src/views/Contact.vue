<template>
  <section class="contact">
    <div class="contact__top">
      <h2 class="contact__title">{{ contact.fields.name }}</h2>
      <p class="contact__phone">{{ contact.fields.phone }}</p>
      <router-link :to="{ name: 'Home' }" class="btn contact__prev">
        &larr;
      </router-link>
      <button type="button" @click="undo" class="btn contact__undo">
        &#8634;
      </button>
    </div>
    <div class="contact__bottom">
      <ul class="contact__field-list">
        <ContactField
          v-for="(value, name) in contact.fields"
          @fieldChange="onFieldChange($event, name)"
          @deleteField="onDeleteField(name)"
          :key="name"
          :fieldName="name"
          :fieldValue="value"
        />
      </ul>
      <ContactAddField @addField="onAddField" :contactId="`${contact.id}`" />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import ContactField from "@/components/ContactField";
import ContactAddField from "@/components/ContactAddField";

export default {
  name: "Contact",
  components: {
    ContactField,
    ContactAddField,
  },
  data() {
    return {
      lastChange: null,
      id: this.$route.params.id,
    };
  },
  computed: {
    contact() {
      return this.$store.getters["contactById"](this.id);
    },
  },
  methods: {
    ...mapActions(["undoChanges", "addField", "changeField", "deleteField"]),
    undo() {
      this.undoChanges({ ...this.lastChange, id: this.id });
      this.lastChange = null;
    },
    onAddField(data) {
      this.addField({ ...data, id: this.id });
    },
    editLastChange(data) {
      this.lastChange = data;
    },
    onFieldChange(newValue, key) {
      this.editLastChange({ key, value: this.contact.fields[key] });
      this.changeField({ newValue, key, contactId: this.id });
    },
    onDeleteField(key) {
      if (confirm("Вы уверены?")) {
        this.editLastChange({ key, value: this.contact.fields[key] });
        this.deleteField({ key, contactId: this.id });
      }
    },
  },
};
</script>

<style scoped>
.contact {
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  box-shadow: 0 0 10px 2px #a7a7a7;
  border-radius: 5px;
}

.contact__title {
  margin-top: 60px;
  text-align: center;
}

.contact__phone {
  text-align: center;
}

.contact__top {
  margin: auto;
}

.contact__prev {
  position: absolute;
  left: 20px;
  top: 20px;
}

.contact__undo {
  position: absolute;
  right: 20px;
  top: 20px;
}

@media (max-width: 550px) {
  .contact {
    padding: 0;
  }

  .contact__field-list {
    padding: 5px;
  }
}
</style>
