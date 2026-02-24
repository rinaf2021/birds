<script setup lang="ts">
import type { UserProps } from '@nuxt/ui';

const title = 'Видео'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/android-chrome-512x512.png'
})

const items = ref([
	{
		title: 'Итак, вопрос на миллион: кто целуется лучше?)',
		description: '',
		orientation: 'horizontal' as const,
		class: 'lg:col-span-3',
		user: {
			name: 'Серый астрильд',
			description: 'Estrilda Troglodytes',
			avatar: {
				src: '/upload/birds/estrilda_troglodytes.webp',
				alt: 'Estrilda Troglodytes'
			},
			size: '3xl' as UserProps['size'],
		},
		reverse: true,
		video: '<iframe src="https://vk.com/clip_ext.php?oid=-223368061&id=456239040" class="w-full h-[450px]" style="background-color: #fff" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
	},
	{
		title: 'Научился красиво уходить в заказ',
		description: '',
		orientation: 'horizontal' as const,
		class: 'lg:col-span-3',
		user: {
			name: 'Бриллиантовая горлица',
			description: 'Geopelia cuneata',
			avatar: {
				src: '/upload/birds/geopelia_cuneata.webp',
				alt: 'Geopelia cuneata'
			},
			size: '3xl' as UserProps['size'],
		},
		reverse: false,
		video: '<iframe src="https://vk.com/clip_ext.php?oid=-223368061&id=456239039" class="w-full h-[450px]" style="background-color: #fff" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>'
	}
])
</script>

<template>
	<u-page-header
		title="Видео"
	></u-page-header>
	<u-page-body>
		<u-page-grid>
			<u-page-card
				v-for="(item, index) in items"
				:key="index"
				v-bind="item"
			>
				<div v-html="item.video"></div>
				<template #footer>
					<u-user v-bind="item.user"></u-user>
				</template>
			</u-page-card>
		</u-page-grid>
	</u-page-body>
</template>

<style scoped lang="scss">
</style>