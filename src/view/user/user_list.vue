<template>
  <div>
    <el-space wrap :size="space">
      <el-input v-model="input" placeholder="请输入关键词" clearable/>
      <el-button type="primary" icon="Search">搜索</el-button>
    </el-space>
    <el-divider/>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="Id" label="ID" width="50"/>
      <el-table-column prop="UId" align="center" label="UId" width="100"/>
      <el-table-column prop="Username" align="center" label="用户名" width="150"/>
      <el-table-column prop="Password" align="center" label="密码"/>
      <el-table-column prop="Token" align="center" label="Token"/>
      <el-table-column prop="OrgName" align="center" label="组织名称" width="100"/>
      <el-table-column prop="Department" align="center" label="部门名称" width="100"/>
      <el-table-column prop="RoleName"  align="center" label="角色名称" width="100"/>
      <el-table-column prop="BirthDay" align="center" label="生日" width="100" :show-overflow-tooltip="true">
        <template #default="scope">
          <div>{{ getDateFormat(scope.row.BirthDay) }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="Political" align="center" label="政治面貌" width="100"/>
      <el-table-column prop="Phone" align="center" label="手机号" width="100"/>
      <el-table-column prop="OfficeAddr" align="center" label="办公地点" width="100"/>
      <el-table-column prop="Email" align="center" label="邮件"/>
      <el-table-column prop="QQ" align="center" label="QQ"/>
      <el-table-column prop="Wechat" align="center" label="微信"/>
      <el-table-column label="创建时间" align="center" width="100" :show-overflow-tooltip="true">
        <template #default="scope">
          <div>{{ getDateFormat(scope.row.CreateTime) }}</div>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" align="center" width="100" :show-overflow-tooltip="true">
        <template #default="scope">
          <div>{{ getDateFormat(scope.row.UpdateTime) }}</div>
        </template>
      </el-table-column>
      <el-table-column fixed="right" align="center" label="操作" width="200">
        <template #default="scope">
          <el-button link type="primary" size="small" @click="handleClick(1, scope.row.Id)">编辑</el-button>
          <el-button link type="success" size="small" @click="handleClick(2, scope.row.Id)">查看</el-button>
          <el-button link type="danger" size="small" @click="handleClick(3, scope.row.Id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import service from "@/common/request";
import {dateFormat} from "@/common/utils";
import {UserService} from "@/view/user/user_service";

export default {
  name: "user_list",
  data() {
    return {
      input: '',
      tableData: [],
      space: 10
    }
  },
  mounted() {
      this.getUserByPageDto()
  },
  methods: {
    getUserByPageDto(){
      UserService.getUserByPageDto({}).then((res) => {
        this.tableData = res.data.res.data
      }).catch((err) => {
        // 
      })
    },
    getDateFormat(params) {
      return dateFormat(params)
    },
    handleClick(type, id) {
      if (type === 1) {
        this.$router.push("/user/edit/" + id)
      } else if (type === 2) {
        this.$router.push("/user/display/" + id)
      } else if (type === 3) {
        // 删除

      }
    }
  }
}
</script>

<style scoped>

</style>