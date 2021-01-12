<template>
  <li class="contact">
    <router-link
      :to="{ name: 'Contact', params: { id: data.id } }"
      class="contact__link"
    >
      <div class="contact__info">
        <h2 class="contact__name">{{ data.fields.name }}</h2>
        <p class="contact__number">{{ data.fields.phone }}</p>
      </div>
      <button
        @click.prevent="deleteContact(data.id)"
        type="button"
        class="btn contact__delete"
      >
        &times;
      </button>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    deleteContact(id) {
      this.$emit('deleteContact', id)
    }
  }
};
</script>

<style scoped>
.contact__link {
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 0 15px;
  border-radius: 20px;
  transition: box-shadow 0.25s ease;
}

.contact__link:hover {
  box-shadow: 0 0 10px 1px #7a7a7a;
}

.contact__name {
  margin-right: 20px;
}

.contact__delete:hover {
  color: #ff0000
}
</style>
