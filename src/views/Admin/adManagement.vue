<template>
  <header-admin :title="title" />
  <user-manage :users="users"></user-manage>
</template>
<script>
import HeaderAdmin from "@/components/headerAdmin.vue";
import userManage from "@/components/userManageAdmin.vue";
import axios from "axios";
import { format } from "date-fns";

export default {
  components: { userManage, HeaderAdmin },
  data() {
    return {
      title: "Admin Account List",
      users: [],
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    async getAllUser() {
      try {
        const response = await axios.get("user/all?roleId=3");
        if (response.status === 200) {
          this.users = response.data;
          for (let i = 0; i < this.users.length; i++) {
            const date = new Date(this.users[i].creationDate);
            const dob = new Date(this.users[i].doB);
            this.users[i].creationDate = format(date, "dd/MM/yyyy");
            this.users[i].doB = format(dob, "dd/MM/yyyy");
          }
        }
        console.log(this.dob);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
