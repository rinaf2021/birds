<script setup lang="ts">
const title = 'Исследования'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/android-chrome-512x512.png'
})

const items = [
	{
		title: 'Базовая зерновая смесь для амадин и астрильдов',
		description: 'Исследование направлено на выявление процентного соотношения зерновых компонентов для закрытия базовых потребностей в микроэлементах организма пернатых',
		class: 'lg:col-span-2',
		to: '/research/basic-grain-mix-for-amadine/',
		image: {
			path: '/upload/research/basic-grain-mix-for-amadine.jpg',
			width: 96,
			height: 96
		},
		orientation: 'horizontal' as const
	}
]
</script>

<template>
	<u-page-header
		title="Исследования"
	></u-page-header>
	<u-page-body>
		<u-page-grid>
			<u-page-card
				v-for="(item, index) in items"
				:key="index"
				v-bind="item"
			>
				<u-color-mode-image
					v-if="item.image"
					:light="item.image.path"
					:dark="item.image.path"
					:width="item.image.width"
					:height="item.image.height"
					:alt="item.title"
					loading="lazy"
					class="w-full"
				></u-color-mode-image>
			</u-page-card>
		</u-page-grid>
	</u-page-body>
</template>

<style scoped lang="scss">
</style>