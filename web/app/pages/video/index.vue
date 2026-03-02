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
		title: 'Женская дружба - Красногорлая амадина',
		description: `Я всегда считала, что самые стайные ребята среди амадин - это японские. Но как только я завела вторую самочку красногорлой мое мнение резко изменилось)

Они постоянно вместе, даже гнездо выбирают одно на двоих) очень интересно, как они будут себя вести, когда парней к ним посажу - узнаем, насколько сильна женская дружба😁

#красногорлаяамадина #amadinafasciata`,
		orientation: 'horizontal' as const,
		class: 'lg:col-span-3',
		user: {
			name: 'Красногорлая амадина',
			description: 'Amadina Fasciata',
			avatar: {
				src: '/upload/birds/amadina_fasciata.webp',
				alt: 'Amadina Fasciata'
			},
			size: '3xl' as UserProps['size'],
		},
		reverse: true,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvspuxqzwlueuubtd6?autoplay=0&mute=0'
	},
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
		reverse: false,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvr5klun4wfrwsixsq?autoplay=0&mute=0'
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
		reverse: true,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvet2gunsjacqq7gpv?autoplay=0&mute=0'
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