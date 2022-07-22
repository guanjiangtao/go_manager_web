<template>
<!--  <el-tabs-->
<!--      v-model="editableTabsValue"-->
<!--      type="card"-->
<!--      class="demo-tabs"-->
<!--      closable-->
<!--      @tab-remove="removeTab"-->
<!--  >-->
<!--    <el-tab-pane-->
<!--        v-for="item in editableTabs"-->
<!--        :key="item.name"-->
<!--        :label="item.title"-->
<!--        :name="item.name"-->
<!--    >-->
<!--      {{ item.content }}-->
<!--    </el-tab-pane>-->
<!--  </el-tabs>-->
  <el-card class="box-card">
    <router-view />
  </el-card>
</template>

<script>
export default {
  name: "card"
}
</script>

<style scoped>

</style>