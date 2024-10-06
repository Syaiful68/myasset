<template>
    <div class="modal" id="exampleModal" tabindex="-1">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Asset</h5>
                    <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label class="from-label">SN</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="from-label">Tag</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="from-label">Item</label>
                        <input type="text" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="from-label">Location</label>
                        <select class="form-control">
                            <option value="">Choise</option>
                            <option value="">Balige</option>
                            <option value="">Tarutung</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="from-label">PIC</label>
                        <input type="text" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn me-auto" @click="close">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.modal {
    display: block;
}
</style>