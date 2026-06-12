<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui';
import { useVideoSpeciesLinks } from '~~/shared/videos';

const route = useRoute();

const species = route.params.species;

const { data: response, error } = await useFetch(`/api/video/${species}`);

if (error.value?.statusCode === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Страница не найдена',
    fatal: true // fatal: true обязателен, чтобы прервать рендеринг
  })
}

const speciesList = useVideoSpeciesLinks();

const title = computed(() => {
	if(response.value && response.value.data) {
		return response.value.data.meta.title;
	}
	return 'Видео';
})

const description = computed(() => {
	if(response.value && response.value.data) {
		return response.value.data.meta.description;
	}
	return '';
})

const image = computed(() => {
	if(response.value && response.value.data) {
		return response.value.data.meta.image;
	}
	return '';
})

const items = computed(() => {
	if(response.value && response.value.data) {
		return response.value.data.items;
	}
	return [];
})

const breadcrumbs: Ref<BreadcrumbItem[]> = ref([
	{
		label: 'Главная',
		to: '/'
	},
	{
		label: 'Видео',
		to: '/video/'
	},
	{
		label: title,
		to: `/video/${species}/`
	}
])

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: image
})

</script>

<template>
	<u-page-header
		:title="title"
	>
		<template #headline>
			<u-breadcrumb :items="breadcrumbs"></u-breadcrumb>
			<!--u-badge
				as="div"
				label="В процессе"
			></u-badge-->
		</template>
	</u-page-header>
	<u-page-body>
		<u-navigation-menu
			:items="speciesList"
			:ui="{
				list: 'flex-wrap gap-y-2',
				item: 'w-[160px]'
			}"
			orientation="horizontal"
		></u-navigation-menu>
		<u-page-grid>
			<u-page-card
				v-for="(item, index) in items"
				:key="index"
				v-bind="item"
				v-bind:reverse="(index % 2) === 0"
				class="lg:col-span-3"
				orientation="horizontal"
			>
				<iframe :src="item.video" class="w-full h-[450px]" style="background-color: #fff" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
				<template #description>
					<m-d-c
						tag="dev"
						:value="item.description"
					></m-d-c>
				</template>
				<template #footer>
					<u-user v-bind="item.user"></u-user>
				</template>
			</u-page-card>
		</u-page-grid>
	</u-page-body>
</template>

<style scoped lang="scss">
</style>