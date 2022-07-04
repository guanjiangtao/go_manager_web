<template>
  <el-icon>
    <Avatar v-if="propsName === 'Avatar'" />
    <Setting v-if="propsName === 'Setting'" />
    <User v-if="propsName === 'User'"/>
    <Postcard v-if="propsName === 'Postcard'" />
    <Operation v-if="propsName === 'Operation'" />
    <Notebook  v-if="propsName === 'Notebook'" />
    <Timer v-if="propsName === 'Timer'" />
    <House v-if="propsName === 'House'"  />
  </el-icon>
</template>

<script>
export default {
  name: "icons-render",
  props: ['propsName'],
}
</script>

<style scoped>

</style>