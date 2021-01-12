<template>
  <div class="field">
    <div class="field__wrapper">
      <span class="field__name">{{ fieldName }}</span>
      <input
        class="field__input"
        @blur="onBlur($event.target.value)"
        :value="fieldValue"
        placeholder="Значение"
      />
    </div>
    <div class="field__buttons">
      <button type="button" @click="undo" class="btn contact__undo">
        &#8634;
      </button>
      <button
        @click="deleteField"
        v-if="fieldName !== 'phone' && fieldName !== 'name'"
        type="button"
        class="btn field__delete"
      >
        &times;
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["fieldName", "fieldValue"],
  data() {
    return {
      initialState: this.fieldValue,
    };
  },
  methods: {
    onBlur(newValue) {
      newValue = newValue.trim()
      if (newValue) {
        this.$emit("fieldChange", newValue);
      }
    },
    undo() {
      if (confirm("Вы уверены?")) {
        this.$emit("fieldChange", this.initialState);
      }
    },
    deleteField() {
      this.$emit("deleteField");
    },
  },
};
</script>

<style scoped>
.field {
  display: flex;
  justify-content: space-between;
}

.field__name {
  font-weight: bold;
}

.field__wrapper {
  margin: 15px 0;
}

.field__input {
  margin: 5px;
}

.field__delete:hover {
  color: #ff0000;
}
</style>

