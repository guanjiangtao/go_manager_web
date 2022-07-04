<template>
  <div>
    <el-space wrap :size="space">
      <el-input v-model="input" placeholder="Please input"/>
      <el-button type="primary" icon="Search">搜索</el-button>
    </el-space>
    <el-divider />
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="id" label="ID" width="50"/>
      <el-table-column prop="UId" label="UId" width="100"/>
      <el-table-column prop="Username" label="用户名"/>
      <el-table-column prop="Password" label="密码"/>
      <el-table-column prop="Token" label="Token"/>
      <el-table-column prop="OrgName" label="组织名称"/>
      <el-table-column prop="Department" label="部门名称"/>
      <el-table-column prop="RoleName" label="角色名称"/>
      <el-table-column prop="BirthDay" label="生日"/>
      <el-table-column prop="Political" label="政治面貌"/>
      <el-table-column prop="Phone" label="手机号"/>
      <el-table-column prop="OfficeAddr" label="办公地点"/>
      <el-table-column prop="Email" label="邮件"/>
      <el-table-column prop="QQ" label="QQ"/>
      <el-table-column prop="Wechat" label="微信"/>
      <el-table-column prop="CreateTime" label="创建时间"/>
      <el-table-column prop="UpdateTime" label="修改时间"/>
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import request from "@/common/request";

export default {
  name: "user_list",
  data() {
    return {
      input: '',
      tableData: [
      ],
      space: 15
    }
  },
  mounted() {
    request.request("/v1/manager/getUserByPageDto","").then((res) => {
      this.tableData = res.data.res
    })
  }
}
</script>

<style scoped>

</style>