<template>
    <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen modal-dialog-scrollable">
    <div class="modal-content" :style="modalBackground">
      <div class="modal-header border-0">
        <router-link to="/">
          <h1 class="modal-title fs-5 fw-900 text-dark" style="letter-spacing: -1px" :id="modalLabel">m.</h1>
        </router-link>
        <button type="button" class="btn-close" :data-bs-dismiss="modalDismiss" aria-label="Close"></button>
      </div>
      <div class="modal-body"> 
            <slot></slot>
            <!-- <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button> -->
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
      </div> -->
    </div>
  </div>
</div>
</template>

<script setup>
defineProps({
  modalId: { type: String  },
  modalDismiss: { type: String  },
  modalLabel: { type: String },
  modalTitle: { type: String },
  modalBackground: { type: String }
})

</script>

<style lang="scss" scoped>

</style>