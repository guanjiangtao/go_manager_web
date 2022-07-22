<template>
<div>
  <el-form :model="form" label-width="120px">
    <el-row>
      <el-col :span="12">
        <el-form-item label="ID">
          <el-input v-model="form.Id" disabled/>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="UId">
          <el-input v-model="form.UId" disabled/>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="用户名">
          <el-input v-model="form.Username" disabled/>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Email">
          <el-input v-model="form.Email"/>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <el-form-item label="手机">
          <el-input v-model="form.Phone"/>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="地址">
          <el-input v-model="form.OfficeAddr"/>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="密码">
        <el-input v-model="form.Password" :disabled="isCanModifyPwd" @click="changePassword"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" v-if="this.id !== ''">提交</el-button>
      <el-button type="primary" @click="onSubmit" v-else>提交</el-button>
      <el-button>取消</el-button>
      <el-button type="primary" @click="onSubmit">返回</el-button>
    </el-form-item>
  </el-form>
  <el-dialog v-model="modfiyAuthVisible" title="Shipping address">

  </el-dialog>
</div>

</template>
<script>
import {UserService} from "@/view/user/user_service";

export default {
  name: "user",
  data() {
    return {
      form: {},
      id: this.$route.params.id,
      isCanModifyPwd: true,
      modfiyAuthVisible: false
    }
  },
  created() {
    UserService.getUserById({id: this.id}).then((res) => {
      this.form = res.data.res.data;
    })
  },
  methods: {
    changePassword() {
      this.modfiyAuthVisible = true
      // this.isCanModifyPwd = false
      // ElMessage.success("授权成功！")
    }
  }
}
</script>

<style scoped>

</style>