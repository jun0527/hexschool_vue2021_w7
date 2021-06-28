<template>
  <div class="py-4">
    <h2 class="text-center">填寫購買人資料</h2>
    <Form class="containerForm py-2" v-slot="{errors}" @submit="submitData">
      <div class="formGroup mb-3">
        <label for="email" class="form-label">email</label>
        <Field type="email" name="email" id="email"
        class="form-control" :class="{'is-invalid':errors['email']}"
          rules="required|email" v-model.trim="user.email"></Field>
        <Error-Message name="email" class="invalid-feedback"></Error-Message>
      </div>
      <div class="formGroup mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <Field type="text" name="收件人姓名" id="name"
        class="form-control" :class="{'is-invalid':errors['收件人姓名']}"
          rules="required" v-model.trim="user.name"></Field>
        <Error-Message name="收件人姓名" class="invalid-feedback"></Error-Message>
      </div>
      <div class="formGroup mb-3">
        <label for="tel" class="form-label">收件人手機號碼</label>
        <Field type="tel" name="收件人手機號碼" id="tel"
        class="form-control" :class="{'is-invalid':errors['收件人手機號碼']}"
          :rules="isPhone" v-model.trim="user.tel"></Field>
        <Error-Message name="收件人手機號碼" class="invalid-feedback"></Error-Message>
      </div>
      <div class="formGroup mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field type="text" name="收件人地址" id="address"
        class="form-control" :class="{'is-invalid':errors['收件人地址']}"
          rules="required" v-model.trim="user.address"></Field>
        <Error-Message name="收件人地址" class="invalid-feedback"></Error-Message>
      </div>
      <div class="formGroup mb-3">
        <label for="message" class="form-label">備註</label>
        <Field type="text" name="備註" id="message"
        class="form-control" as="textarea" v-model.trim="message"></Field>
      </div>
      <div class="fromGroup d-flex justify-content-center">
        <button type="submit" class="btn btn-primary">送出資料</button>
      </div>
    </Form>
  </div>
  <submitModal ref="submitModal" :user="user" :message="message"></submitModal>
</template>

<script>
import submitModal from '@/components/SubmitModal.vue';

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        tel: '',
        address: '',
      },
      message: '',
    };
  },
  components: {
    submitModal,
  },
  methods: {
    isPhone(value) {
      if (!value) {
        return '收件人手機號碼 為必填';
      }
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '收件人手機號碼 須為正確的手機號碼';
    },
    submitData() {
      this.$refs.submitModal.openModal();
    },
  },
};
</script>
