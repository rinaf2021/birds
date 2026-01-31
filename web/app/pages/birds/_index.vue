<script setup lang="ts">
import type { isJSDocAugmentsTag } from 'typescript';

const title = 'Wiki'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/android-chrome-512x512.png'
})

const items = ref([]);

/*
const items = ref([
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Серый астрильд'
    },
    class:'sm:order-1 xl:order-1 lg:row-span-2 rounded-none'
  },
  {
    class:'xl:order-2 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const,
    gallery: [

    ]
  },
  {
    title: 'Серый астрильд (Estrilda troglodytes)',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'xl:order-3 sm:order-2 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Оранжевощекий астрильд'
    },
    class:'sm:order-4 xl:order-5 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-6 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Оранжевощекий астрильд (Estrilda troglodytes)',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-3 xl:order-4 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Кольчатый астрильд'
    },
    class:'sm:order-5 xl:order-7 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-9 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Кольчатый астрильд (Estrilda troglodytes)',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-6 xl:order-8 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Японская амадина'
    },
    class:'sm:order-8 xl:order-12 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-11 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Японская амадина',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-7 xl:order-10 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Красногорлая амадина'
    },
    class:'sm:order-8 xl:order-13 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-14 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Красногорлая амадина',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-9 xl:order-15 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Серый астрильд'
    },
    class:'sm:order-11 xl:order-17 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-18 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Карминоволобая амадина',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-10 xl:order-16 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Серый астрильд'
    },
    class:'sm:order-12 xl:order-19 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-21 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Бриллиантовая горлица',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-13 xl:order-20 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  },
  {
    image: {
      //path: '/images/birds/estrilda_troglodytes.jpg',
      path: '/images/maintenance.png',
      title: 'Серый астрильд'
    },
    class:'sm:order-15 xl:order-24 lg:row-span-2 rounded-none'
  },
  {
    title: 'галерея',
    class:'xl:order-23 hidden lg:col-span-2 lg:row-span-2 xl:block rounded-none',
    orientation: 'vertical' as const
  },
  {
    title: 'Дрозд рябинник',
    description: 'Птица семейства вьюрковых ткачиков отряда воробьинообразных',
    class:'sm:order-14 xl:order-22 lg:col-span-2 xl:col-span-3 lg:row-span-2 rounded-none',
    orientation: 'vertical' as const
  }
]);
*/
</script>

<template>
  <u-page-section
		title="Уход"
	>
		<u-page-grid
			class="xl:grid-cols-6 pb-16 sm:pb-24 lg:pb-32"
		>
			<u-page-card
				v-for="(item, key) in items"
				:key="key"
				:title="item.title"
				:description="item.description"
				:orientation="item.orientation"
				:class="item.class"
			>
				<template v-if="item.image">
					<img
						:src="item.image.path"
						:title="item.image.title"
						:alt="item.image.title"
					/>
				</template>
			</u-page-card>
		</u-page-grid>
	</u-page-section>
</template>

<style lang="scss">
.maintenance {
  &__image {
    margin: auto auto;
  }
}
</style>