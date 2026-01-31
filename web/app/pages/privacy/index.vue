<script setup lang="ts">

const title = 'Политика конфиденциальности'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/android-chrome-512x512.png'
})

const policyContent = usePrivacy();
</script>

<template>
    <u-page-header
		title="Политика конфиденциальности"
	></u-page-header>
	<u-page-body>
		<m-d-c
			:value="policyContent"
			tag="div"
		></m-d-c>
	</u-page-body>
</template>

<style scoped lang="scss">
</style>