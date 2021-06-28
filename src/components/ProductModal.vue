<template>
  <div ref="modal" class="modal fade" tabindex="-1">
    <div class="modal-dialog productModal">
      <div class="modal-content">
        <Form v-slot={errors} @submit="postProduct(modal)" :key="clearForm">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">商品建立</h5>
            <button type="button" class="btn-close btn-close-white" @click="closeModal"></button>
          </div>
          <div class="modal-body row">
            <div class="col-6">
                <div class="formGroup mb-3">
                  <label for="title" class="form-label">商品名稱</label>
                  <Field type="text" class="form-control"
                  :class="{'is-invalid': errors['商品名稱']}" id="title"
                  name="商品名稱" placeholder="請輸入商品名稱"
                  rules="required" v-model="tempData.title"></Field>
                  <ErrorMessage name="商品名稱" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="formGroup mb-3">
                  <label for="category" class="form-label">商品分類</label>
                  <Field id="category" class="form-control"
                  :class="{'is-invalid': errors['商品分類']}"
                  name="商品分類" rules="required" as="select"
                  v-model="tempData.category">
                    <option value="" selected disabled>請選擇分類</option>
                    <option value="蛋糕">蛋糕</option>
                    <option value="餅乾">餅乾</option>
                    <option value="泡芙">泡芙</option>
                    <option value="其他">其他</option>
                  </Field>
                  <ErrorMessage name="商品分類" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="formGroup mb-3">
                  <label for="imageUrl" class="form-label">商品圖片</label>
                  <button type="button"
                  class="btn btn-primary isUploadImageBtn"
                  @click="changeIsUploadImg"
                  v-if="!isUploadImg">上傳圖片
                  </button>
                  <div class="d-flex justify-content-between" v-else>
                    <Field type="file" name="file" class="upImage"
                    id="upImage" @change="getFile"></Field>
                    <div class="btnArea">
                      <button type="button" class="btn btn-primary btn-sm mb-1 me-2"
                      :disabled="!imgFiles" @click="uploadImg">上傳圖片</button>
                      <button type="button" class="btn btn-secondary btn-sm mb-1"
                      @click="changeIsUploadImg">取消</button>
                    </div>
                  </div>
                  <Field type="url" id="imageUrl" class="form-control"
                  :class="{'is-invalid': errors['圖片網址']}" name="圖片網址"
                  placeholder="請輸入圖片網址或上傳圖片" :rules="isUrl"
                  :disabled="isUploadImg" v-model="tempData.imageUrl"></Field>
                  <ErrorMessage name="圖片網址" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="formGroup mb-3">
                  <label for="description" class="form-label">商品描述</label>
                  <Field type="text" class="form-control"
                  :class="{'is-invalid': errors['商品描述']}" id="description" name="商品描述"
                  placeholder="請輸入商品描述" as="textarea" rules="required"
                  v-model="tempData.description"></Field>
                  <ErrorMessage name="商品描述" class="invalid-feedback"></ErrorMessage>
                </div>
                <div class="priceArea mb-3">
                  <div class="formGroup">
                    <label for="origin_price" class="form-label">原價</label>
                    <Field type="number" class="form-control"
                  :class="{'is-invalid': errors['原價']}"
                  id="origin_price" name="原價" placeholder="請輸入原價"
                  rules="required" v-model.number="tempData.origin_price"></Field>
                  <ErrorMessage name="原價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="formGroup">
                    <label for="price" class="form-label">售價</label>
                    <Field type="number" class="form-control"
                  :class="{'is-invalid': errors['售價']}" id="price" name="售價"
                  placeholder="請輸入售價" :rules="priceRule"
                  v-model.number="tempData.price"></Field>
                  <ErrorMessage name="售價" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="formGroup">
                    <label for="unit" class="form-label">單位</label>
                    <Field type="text" class="form-control"
                  :class="{'is-invalid': errors['單位']}" id="unit"
                  name="單位" placeholder="請輸入單位(如：個)" rules="required"
                  v-model="tempData.unit"></Field>
                  <ErrorMessage name="單位" class="invalid-feedback"></ErrorMessage>
                  </div>
                </div>
                <div class="formGroup mb-3" v-if="modal === 'addProduct'">
                  <input type="checkbox" id="is_enabled" name="is_enabled"
                  @change="isEnabled">
                  <label for="is_enabled">是否啟用</label>
                </div>
            </div>
            <div class="col-6">
              <div class="px-2">
                <h2 class="text-center">圖片預覽</h2>
                <div class="previewPicture">
                  <img class="w-100" :src="tempData.imageUrl" alt="圖片預覽">
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary"
            data-bs-dismiss="modal" @click="closeModal">取消</button>
            <button type="submit" class="btn btn-primary"
            v-if="modal === 'addProduct'">建立</button>
            <button type="submit" class="btn btn-primary" v-else>編輯</button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import swal from 'sweetalert';

export default {
  data() {
    return {
      productModal: {},
      modal: '',
      tempData: {
        title: '',
        category: '',
        imageUrl: '',
        description: '',
        origin_price: '',
        price: '',
        unit: '',
        is_enabled: 0,
      },
      isUploadImg: false,
      imgFiles: '',
      clearForm: false,
      editId: '',
    };
  },
  methods: {
    openModal() {
      this.productModal.show();
      this.clearForm = false;
    },
    closeModal() {
      this.productModal.hide();
      this.clearForm = true;
      this.clearData();
    },
    clearData() {
      this.tempData.title = '';
      this.tempData.category = '';
      this.tempData.imageUrl = '';
      this.tempData.description = '';
      this.tempData.origin_price = '';
      this.tempData.price = '';
      this.tempData.unit = '';
      this.tempData.is_enabled = 0;
      this.editId = '';
    },
    isUrl(value) {
      const url = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
      if (!this.tempData.imageUrl) {
        return '圖片網址 為必填欄位';
      }
      if (!url.test(value)) {
        return '圖片網址 格式不正確';
      }
      return true;
    },
    priceRule(value) {
      if (!value) {
        return '售價 為必填欄位';
      }
      if (value > this.tempData.origin_price) {
        return '售價 必須小於或等於原價';
      }
      return true;
    },
    changeIsUploadImg() {
      this.imgFiles = '';
      this.isUploadImg = !this.isUploadImg;
    },
    getFile(e) {
      this.imgFiles = e.target.files;
    },
    uploadImg() {
      const formData = new FormData();
      formData.append('file-to-upload', this.imgFiles[0]);
      const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempData.imageUrl = res.data.imageUrl;
            this.changeIsUploadImg();
            swal('圖片上傳成功！');
          } else {
            swal('圖片上傳失敗！');
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    isEnabled() {
      if (this.tempData.is_enabled === 0) {
        this.tempData.is_enabled = 1;
      } else {
        this.tempData.is_enabled = 0;
      }
    },
    postProduct(modal) {
      if (modal === 'addProduct') {
        const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product`;
        this.$http.post(url, { data: this.tempData })
          .then((res) => {
            if (res.data.success) {
              swal('商品建立成功！');
              this.closeModal();
              this.$emit('getProducts');
            } else {
              swal('商品建立失敗！');
            }
          })
          .catch((err) => {
            console.dir(err);
          });
      } else {
        const url = `${process.env.VUE_APP_URL}api/${process.env.VUE_APP_PATH}/admin/product/${this.editId}`;
        this.$http.put(url, { data: this.tempData })
          .then((res) => {
            if (res.data.success) {
              swal('商品修改成功！');
              this.closeModal();
              this.$emit('getProducts');
            } else {
              swal('商品修改失敗！');
            }
          })
          .catch((err) => {
            console.dir(err);
          });
      }
    },
  },
  mounted() {
    this.productModal = new Modal(this.$refs.modal, { backdrop: 'static', keyboard: false });
  },
};
</script>
