<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Form v-slot="{ errors }" @submit="onSubmit">
  {{ errors }}
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <Field id="email" name="email" type="email"
    class="form-control" :class="{ 'is-invalid': errors['email'] }"
    placeholder="請輸入 Email" rules="email|required" v-model="user.email"></Field>
    <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
  </div>
  <button class="btn me-2 btn-outline-primary" type="button" @click="validate">驗證</button>
  <button class="btn btn-primary" type="submit">Submit</button>
  </Form>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  created() {
    console.log(this);
  },
};
</script>
