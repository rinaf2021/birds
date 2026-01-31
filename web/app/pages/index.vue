<script setup lang="ts">

const title = 'По птице в каждый дом'
const description = ''

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/android-chrome-512x512.png'
})
</script>

<template>
  <u-page-section
    headline="Проект в разработке"
    title="BIRDS SPACE"
  >
    <template #description>
      <!--img
        src="/images/maintenance.png"
        title="Серый астрильд - генерация рисунка с фото"
        alt="Серый астрильд - генерация рисунка с фото"
        class="max-h-80 m-auto mb-6"
      /-->
      Основная цель проекта есть объединение любителей пернатого царства для обмена опытом содержания, лечения, ухода и разведения подопечных
    </template>
  </u-page-section>
  <u-separator :ui="{ border: 'border-primary/30' }"></u-separator>
  <u-page-section
    title="Для любителей"
    description="Сервисы, которые доступны для всех посетителей проекта"
    :features="[
      {
        title: 'О птицах',
        description: 'Узнать подробно о виде птицы, который вам интересен',
        icon: 'ooui:logo-wikipedia',
        ui: {
          leading: 'bg-accented/50 p-2 rounded-md border border-muted border-dashed'
        }
      },
      {
        title: 'Здоровье',
        description: 'Найдете информацию о лечении по симптомам, а также инфорацию по профилактике здоровья',
        icon: 'streamline-ultimate:medical-hospital-1',
        ui: {
          leading: 'bg-accented/50 p-2 rounded-md border border-muted border-dashed'
        }
      },
      {
        title: 'Выбрать себе хвост',
        description: 'Найдите себе подходящего пернатого среди предложений заводчиков',
        icon: 'emojione-monotone:bird',
        ui: {
          leading: 'bg-accented/50 p-2 rounded-md border border-muted border-dashed'
        }
      }
    ]"
    :ui="{
      title: 'text-left @container relative flex',
      description: 'text-left'
    }"
    class="relative overflow-hidden"
  ></u-page-section>
  <u-page-section
    title="Для заводчиков"
    description="Сервисы, которые доступны для заводчиков на проекте"
    :features="[
      {
        title: 'Питомцы',
        description: 'Расскажите по своих подопечных, добавьте картинки и видео',
        icon: 'ph:bird-fill',
        ui: {
          leading: 'bg-accented/50 p-2 rounded-md border border-muted border-dashed'
        }
      },
      {
        title: 'Кладки и родословная',
        description: 'Контроль за развитием птенцов со стадии яйца',
        icon: 'game-icons:nest-birds',
        ui: {
          leading: 'bg-accented/50 p-2 rounded-md border border-muted border-dashed'
        }
      },
      {
        title: 'Мониторинг здоровья',
        description: 'Отслеживание профилактических процедур, ведение лечения, контроль общего состояния',
        icon: 'pajamas:status-health',
        ui: {
          leading: 'bg-accented/50 p-2 rounded-md border border-muted border-dashed'
        }
      }
    ]"
    :ui="{
      title: 'text-left @container relative flex',
      description: 'text-left'
    }"
    class="relative overflow-hidden"
  ></u-page-section>
</template>

<style lang="scss">
</style>