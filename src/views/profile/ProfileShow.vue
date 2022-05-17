<script setup lang="ts">
import ProfileInformation from "@/components/profile/ProfileInformation.vue";
import ProfilePassword from "@/components/profile/ProfilePassword.vue";
import ProfileTwoFactorAuthentication from "@/components/profile/ProfileTwoFactorAuthentication.vue";
import ProfileSessions from "@/components/profile/ProfileSessions.vue";
import ProfileDelete from "@/components/profile/ProfileDelete.vue";
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}user/profile`);
  },
};
</script>

<template>
  <FormLayout title="User Profile">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ProfileInformation />
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ProfilePassword />
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ProfileTwoFactorAuthentication />
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ProfileSessions />
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ProfileDelete />
    </div>
  </FormLayout>
</template>
