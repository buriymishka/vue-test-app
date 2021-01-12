<template>
  <div class="add">
    <h4 class="add__title">Добавить поле</h4>
    <form @submit.prevent="addField" class="add__wrapper">
      <div class="add__fields">
        <div class="add__fields-wrapper">
          <label for="title" class="add__label">Поле</label>
          <input id="title" class="add__field" type="text" v-model="title" required />
        </div>
        <div class="add__fields-wrapper">
          <label for="value" class="add__label">Значение</label>
          <input id="value" class="add__field" type="text" v-model="value" required />
        </div>
      </div>
      <button class="btn add__confirm" type="submit">&#10004;</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "",
    value: "",
  }),
  methods: {
    addField() {
      this.title = this.title.trim()
      this.value = this.value.trim()
      if (this.title && this.value) {
        this.$emit("addField", { title: this.title, value: this.value });
        this.title = "";
        this.value = "";
      }
    },
  },
};
</script>

<style scoped>

.add__title {
  text-align: center;
  margin-bottom: 0;
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
