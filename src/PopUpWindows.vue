<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal-content">
      <button class="modal-close" @click="close">X</button>
    <slot name="header"></slot>
      <slot name="body"></slot>
 
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpWindows',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {

  background: rgb(223, 221, 221);
  padding: 20px;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
}

</style>