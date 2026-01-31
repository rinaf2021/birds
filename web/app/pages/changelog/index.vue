<script setup lang="ts">
import type { UserProps } from '@nuxt/ui';

const title = 'История развития проекта'
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
		date: 'Jan 19, 2026',
		badge: 'v0.1.0',
		title: 'Начали',
		description: 'Проведены начальные работы над проектом',
		content: `- Создан репозиторий
- Настроен CI/CD
- Реализована заглушка для главной страницы
- Подключена Я.Метрика
- Подключен Я.Вебмастер
- Страница Политика конфиденциальности
- Подтверждение для разрешения использования персональных данных на проекте
- Сформирован план разработки MVC проекта
- Проект размещен на домене birds.rinaf.ru
		`,
		authors: [
			{
				name: 'Екатерина Ф.',
				avatar: {
					src: '/images/users/user_1.jpg'
				},
				size: '3xl' as UserProps['size']
			}
		]
	}
])

</script>

<template>
	<u-page-header
		title="Журнал изменений"
	></u-page-header>
	<u-page-body>
		<u-changelog-versions>
			<u-changelog-version
				v-for="item in items"
				v-bind="item"
			>
				<template #body>
					<m-d-c
						:value="item.content"
						tag="div"
					></m-d-c>
				</template>
			</u-changelog-version>
		</u-changelog-versions>
	</u-page-body>
</template>

<style scoped lang="scss">
</style>
