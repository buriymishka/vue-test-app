<template>
  <div class="add">
    <h2 class="add__title">Добавить контакт</h2>
    <form @submit.prevent="addContact" class="add__wrapper">
      <div class="add__fields">
        <div class="add__fields-wrapper">
          <label for="name" class="add__label">Имя</label>
          <input id="name" class="add__field" type="text" v-model="name" required />
        </div>
        <div class="add__fields-wrapper">
          <label for="phone" class="add__label">Номер</label>
          <input id="phone" class="add__field" type="text" v-model="phone" required />
        </div>
      </div>
      <button class="btn add__confirm" type="sunmit">&#10004;</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    phone: "",
  }),
  methods: {
    addContact() {
      this.name = this.name.trim()
      this.phone = this.phone.trim()
      if (this.name && this.phone) {
        this.$emit("addContact", { name: this.name, phone: this.phone });
        this.name = "";
        this.phone = "";
      }
    },
  },
};
</script>

<style scoped>
.add {
  border-top: 1px solid #7a7a7a;
  border-bottom: 1px solid #7a7a7a;
}

.add__title {
  text-align: center;
}

.add__wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.add__fields {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.add__fields-wrapper {
  margin: 10px 15px 10px 0;
}

.add__label {
  display: block;
}

.add__confirm:hover {
  color: #00ff00;
}
</style>
