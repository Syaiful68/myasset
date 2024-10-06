<script setup>
import { ref } from 'vue';
import appbar from '@/components/partials/app.vue';
import AssetModal from '@/components/modals/AssetModal.vue';

const invisibleModals = ref(false);

function showModals() {
  invisibleModals.value = true;
}
function closeModals() {
  invisibleModals.value = false;
}
</script>
<template>
  <appbar title="Home" pages="/Home" />
  <div class="page-body">
    <div class="container-xl">
      <div class="mb-3">
        <button type="button" @click="showModals" class="btn btn-primary">Add</button>
      </div>
      <div class="row row-deck row-cards">
        <div class="col-sm-6 col-lg-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="subheader">Sales</div>
                <div class="ms-auto lh-1">
                  <div class="dropdown">
                    <a class="dropdown-toggle text-secondary" href="#" data-bs-toggle="dropdown" aria-haspopup="true"
                      aria-expanded="false">Last 7 days</a>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item active" href="#">Last 7 days</a>
                      <a class="dropdown-item" href="#">Last 30 days</a>
                      <a class="dropdown-item" href="#">Last 3 months</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <AssetModal v-show="invisibleModals" @close="closeModals" />
</template>