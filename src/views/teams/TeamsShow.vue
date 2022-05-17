<script setup lang="ts">
import TeamsEdit from "@/components/teams/TeamsEdit.vue";
import TeamsOptions from "@/components/teams/TeamsOptions.vue";
import TeamsManageUsers from "@/components/teams/TeamsManageUsers.vue";
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}teams/${this.$route.params.team_pk}`);
  },
};
</script>

<template>
  <FormLayout title="User Profile" v-if="store.props.team">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TeamsEdit :team="store.props.team" :permissions="store.props.permissions" />
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TeamsOptions :team="store.props.team" :permissions="store.props.permissions" :options="store.props.options"/>
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TeamsManageUsers :team="store.props.team" :availableRoles="store.props.availableRoles" :userPermissions="store.props.userPermissions"/>
    </div>
  </FormLayout>
</template>
