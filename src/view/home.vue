<template>
  <el-container class="home-container">
    <el-header class="home-header">GoManager后台管理系统</el-header>
    <el-container>
      <el-aside class="home-aside">
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-menu-item :index="`${item.id}`" :key="item.id" v-for="item in MenuConfig">
            <el-icon>
              <icons-render :props-name="item.icon"/>
            </el-icon>
            <el-button @click="changeRouter(item.path)" link>{{ item.name }}</el-button>
            <!--            <router-link :to="item.path" ></router-link>-->
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import IconsRender from "@/components/icons-render";
import MenuConfig from "@/config/menu";

export default {
  name: 'home',
  components: {IconsRender},
  data() {
    return {
      MenuConfig: MenuConfig
    }
  },
  methods: {
    changeRouter(val) {
      this.$router.push(val)
    }
  }
}
</script>

<style scoped>
.home-header {
  background-color: #545c64;
  color: aliceblue;
  line-height: 60px;
}

.home-aside, /deep/ .el-menu {
  text-align: center;
  width: 12%;
  height: 100%;
}

/deep/ .el-menu {
  text-align: center;
  width: 100%;
  height: 100%;
}

.home-container {
  height: 100%;
}
</style>