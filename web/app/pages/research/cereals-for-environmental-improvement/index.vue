<script setup lang="ts">
/**
 * @todo почему не передопределяется ui у шапки
 */
import type { BreadcrumbItem, ChangelogVersionProps, UserProps } from '@nuxt/ui';

const title: Ref<string> = ref('Исследование: злаки для обустройства окружения');
const description: Ref<string> = ref('Исследование направлено на выявление доступных для использования злаковых в вольерах  пертаных обитателей');

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/upload/research/cereals-for-environmental-improvement.webp'
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
		to: '/research/cereals-for-environmental-improvement/'
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
		date: 'Feb 28, 2026',
		title: 'Список злаков',
		description: `Анализ доступных для выращивания злаков в условиях квартир

#### Итог

Список злаков: Ковыль тончайший "Хвостик пони", Хакенохлоя Олл Голд, Хакенохлоя Beni kaze, Мискантус Зебринус`,
		content: `
Приоритетом для меня являлись злаки, которые могут образовывать густые  стенки или плотные пучки, т.к искала я злаки, в первую очередь, для серых астрильдов: они строят гнезда на земле, как раз в зарослях всякой травы.

Полазив по интернету я обнаружала, что на балконе вполне себе хорошо чувствуют себя многие злаки, но детали их содержания выяснить не удалось, а именно: как частно поливать, в каком грунте содержать, как быстро растут и т.д.

Основное, что удалось узнать это:
- грунт им нужен с хорошей водопроходимостью, чтобы вода не задерживалась у корней (кроме Хакенохлоя и Мискантус Зебринус - она любит жить в влажном грунте)
- полив должен быть обильный, но не частый
- в подкормке не нуждаются, но можно давать универсальные удобрения для газонов
- очень любят свет, его им надо много
- большинство злаков неядовиты и безопасны для животных и людей, а в некоторых случаях представляют собой хороший кормовой резерв
- высота злаков в стесненных условиях, как правило, меньше, чем на улице

### Итог

В качестве первых подопытных были выбраны следующие злаки:
- Ковыль тончайший "Хвостик пони": он неприхотлив, вырастает высоким (до 50 см), образует густую живую стенку (его рекомендуют использовать как живую изгородь), хорошо переносит засуху. Держать его рекомендуют в неглубоком горшке, что тоже плюс, т.к на рынке много низких горшков, но с большой площадью - можно засадить все саженцами, а какую то часть грунта оставить открытым и для астрильдов это, возможно, покажется интересным.
- Хакенохлоя (Олл Голд, Bezi kaze): отлично чувствует себя в горшке с автополивом (да, для ленивых), по высоте не особо высокий (до 30см), но за счет того, что его побеги начинают изгибаться и спадать вниз, образуя плотную стенку из листьев, становится понятно, что данный злак вполне себе подходит на роль "укрытия", где мои серые астрильды могут спокойно прятаться. Также, злак крайне привлекателен внешне и имеет несколько расцветок: мне понравились зеленый и желтый.
- Мискантус Зеринус: по условиям содержания и по внешнему виду похож на Ковыль, но является более "декоративным" - информацию о том, как его содержать в квартире было больше всего: горшок с автополивом, любит свет. Собственно, как и Хакенохлоя.

Покупаем, пробуем)
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