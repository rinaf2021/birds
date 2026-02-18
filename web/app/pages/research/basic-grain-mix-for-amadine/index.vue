<script setup lang="ts">
/**
 * @todo почему не передопределяется ui у шапки
 */
import type { BreadcrumbItem, ChangelogVersionProps, UserProps } from '@nuxt/ui';

const title: Ref<string> = ref('Исследование: базовая зерновая смесь для амадин и астрильдов');
const description: Ref<string> = ref('Исследование направлёно на выявлёние процентного соотношения, а также видов зерновых компонентов для закрытия базовых потребностей в микроэлементах организма амадин и астрильдов');

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/upload/research/basic-grain-mix-for-amadine.jpg'
})

const uiProp = ref({
	headline: 'mb-2.5 text-sm font-semibold text-primary gap-1.5'
});

const breadcrumbs: Ref<BreadcrumbItem[]> = ref([
	{
		label: 'Главная',
		to: '/'
	},
	{
		label: 'Исследования',
		to: '/research/'
	},
	{
		label: title,
		to: '/research/basic-grain-mix-for-amadine/'
	}
])

const tabs = ref([
	// {
	// 	label: 'Данные',
	// 	slot: 'research'
	// },
	{
		label: 'Процесс',
		slot: 'process'
	},
	{
		label: 'Результат',
		slot: 'result',
		disabled: true
	}
])

const isSlideOpen: Ref<"Y" | "N"> = ref('N');

const slideTitle: Ref<string> = ref('N');

const slideContent: Ref<string> = ref('N');

const slideDescription: Ref<string> = ref('N');

const items: Ref<ChangelogVersionProps[]> = ref([
	{
		date: 'Feb 18, 2026',
		title: 'Базовый состав',
		description: `Анализ состава типовых кормов для амадин и астрильдов, выявлёние общих компонентов и их пропорции
#### Итог

Выявлённая базовая пропорция: просо желтое 1.5, просо красное 1, просо черное 1, просо белое 1, канарееченое семя 1.25, пайза 1, могар 1, лён 0.75, нуг абиссинский 0.08`,
		content: `Был рассмотрен состав следующих зерновых кормов:
- список зерновых культур, найденный на сайте <a href="https://www.mybirds.ru/forums/topic/13221-kormlenie-amadin/" target="_blank">mybirds.ru</a>
- Rio для экзотических птиц
- состав зерновой смеси для амадин питомника <a href="https://www.ozon.ru/product/zernosmes-dlya-amadinov-i-astrildov-5-kg-meshok-korm-dlya-ptits-1786921974/" target="_blank">Мир птиц</a>, которую я покупаю для своих пернатиков
- Padovan Grandmix Esotici
- Fiory для экзотических птиц

Состав взят из общедоступных источников, таких как упаковки и описание состава на маркетплейсах.

::card-group

::card
---
title: Перечень с сайта mybirds.ru
---
просо белое, просо желтое, просо красное, просо черное (меньше), чумиза, могар, канареечное семя, льяное семя (мало), пайза, нуг абиссинский, рапс (поедается неохотно), чищенный овес

**Дополнительно:**
одуванчик, подорожник, пастушья сумка, плевел пастбищный, полевица белая, овсяница луговая, тимофеевка, ежа сборная, мятлик луговой
::

::card
---
title: Rio для экзотических птиц
---
паникум желтый, просо желтое, канареечное семя, пайза, просо белое, просо красное, паникум красный, просо черное, нуг абиссинский, семя льна, овсянка, кунжут, водоросли, клюконат кальция
::

::card
---
title: Зерносмесь для амадин и астрильдов
---
просо разных цветов, пайза, чумиза, могар, лён, конопля, канареечник, разнотравье, рапс
::

::card
---
title: Padovan Grandmix Esotici
---
могар (37.5%), желтое просо (37.5%), красное просо (3.5%), канареечное семя 9%, масличный нуг (2%), льняное семя (1%), измельченные ракушки (4%), хлебопродукты (3%), ананас (0.5%), банан (0.5%), абрикос (0.5%), витамин A 6000 ME, витамин D3 705 ME, витамин E 10 мг, йод 1.5 мг, марганец 50 мг, цинк 40мг, пишевые красители
::

::card
---
title: Fiory для экзотических птиц
---
просо обыкновенное, просо желтое, просо белое, просо красное, канареечник, гранулы (пекарные продукты, гранулы и зерновые продукты, мед 10%, масла, экстракт юкки Шидигера, красители и антиоксиданты, одобренные ЕС), лён, абиссинский  нуг, перилла
::

::

Корм Fiory и Padovan как-то совсем напугали составом, поэтому их приоритеты понижены, в то время как перечень с сайта mybirds.ru вызывает наибольшее доверие, поэтому он первый в списке.

#### Анализируя списки выше выявляем общее для всех:
просо желтое, просо белое, просо красное, просо черное, канареечное семя

#### И встречающиеся в большинстве смесей:
пайза, могар, лён, нуг абиссинский

### Итог

Взяв существующую смесь и разложив ее на составляющие я получила следующие объемы:
- просо желтое: 18 ед
- просо красное: 12 ед
- просо черное: 12 ед
- просо белое: неизвестно, поэтому берем 12 ед
- канареечное семя: 15 ед
- пайза: 12 ед
- могар: 15 ед
- лён: 9 ед
- нуг абиссинский: неизвестно, но в корме Rio его мало, поэтому берем 1 ед

#### Пропорция смеси:
- просо желтое: 1.5
- просо красное: 1
- просо черное: 1
- просо белое: 1
- канарееченое семя: 1.25
- пайза: 1
- могар: 1
- лён: 0.75
- нуг абиссинский: 0.08

Сказано - сделано) Закупаем и тестируем


`,
		authors: [
			{
				name: 'Екатерина Ф.',
				avatar: {
					src: '/upload/users/user_1.jpg'
				},
				size: '3xl' as UserProps['size']
			}
		]
	}
])

const referenceGroup: Ref<PageLogosItem[]> = ref([
	{
		src:'/upload/users/user_1.jpg'
	},
	{
		src:'/upload/users/user_1.jpg'
	}
])

function onSlideClose() {
	isSlideOpen.value = 'N';
}

function onChangelogVersionClick(item: ChangelogVersionProps) {
	slideTitle.value = item.title ? item.title.toString() : 'N';
	slideDescription.value = item.description ? item.description.toString() : '';
	slideContent.value = item.content ? item.content.toString() : 'N';
	if(slideTitle.value !== 'N' && slideContent.value !== 'N') {
		isSlideOpen.value = 'Y';
	}
}

</script>

<template>
	<u-page-header
		title="Базовая зерновая смесь для амадин и астрильдов"
		:description="description"
		:ui="uiProp"
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
		<u-tabs
			:items="tabs"
			variant="link"
			class="w-full"
		>
			<template #research>

			</template>

			<template #process>
				<u-changelog-versions
					class="mt-10"
				>
					<u-changelog-version
						v-for="item in items"
						v-bind="item"
						@click="onChangelogVersionClick(item)"
					>
						<template #description>
							<m-d-c
								:value="item.description ? item.description.toString() : ''"
								tag="div"
							></m-d-c>
						</template>
					</u-changelog-version>
				</u-changelog-versions>
			</template>

			<template #result>

			</template>
		</u-tabs>
	</u-page-body>
	<u-slideover
		side="top"
		:title="slideTitle"
		:open="isSlideOpen === 'Y'"
		:close="{ onClick: () => onSlideClose()}"
	>
		<template #body>
			<m-d-c
				:value="slideContent"
				tag="div"
			></m-d-c>
		</template>
	</u-slideover>
</template>

<style scoped lang="scss">
</style>