<template>
  <div class="my-table-wrapper">
    <el-table
      ref="multipleTable"
      :data="dataAry"
      tooltip-effect="dark"
      style="width: 100%"

      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55"
        class="title-item"
        border>
      </el-table-column>
      <el-table-column
        label="批次ID"
        width="120"
        class="title-item">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="俱乐部ID"
        width="120"
        class="title-item">
      </el-table-column>
      <el-table-column
        prop="address"
        label="昵称"
        class="title-item"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([dataAry[1], dataAry[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    props: {
      dataAry: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  .title-item
    border-right: 1px solid #e2e6ec
</style>
