<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';
import Cookies from 'js-cookie';

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'ru'
  }
})

const privacyCookieKey: Ref<string> = ref('privacy.accept');

const startYear: Ref<number> = ref(2026);

const openCookie: Ref<boolean> = ref(true);

const openPrivacy: Ref<boolean> = ref(false);

const policyContent = usePrivacy();

const currentYear = computed(
  () => new Date().getFullYear()
)

const yearString = computed(
  () => currentYear.value > startYear.value ? startYear.value.toString() + ' - ' + currentYear.value.toString() : currentYear.value.toString()
)

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Видео',
    to: '/video/'
  },
  {
    label: 'Исследования',
    to: '/research/'
  }
])

onMounted(() => {
  const cookieStatus = Cookies.get(privacyCookieKey.value);
  if(cookieStatus) {
    openCookie.value = !(cookieStatus === 'Y');
  }
})

function showPolicy() {
  openPrivacy.value = true;
}

function acceptCookie() {
  Cookies.set(privacyCookieKey.value, 'Y', {
    expires: 30
  });
  openCookie.value = false;
}
</script>

<template>
  <u-app>
    <u-header
      :ui="{
        title: 'items-center'
      }"
    >
      <u-navigation-menu
        :items="items"
      ></u-navigation-menu>

      <template #title>
        BIRDS <u-badge
          class="rounded-full"
          size="md"
          variant="subtle"
          @click.prevent="navigateTo('/changelog')"
        >v0.3.0</u-badge>
      </template>

      <template #body>
        <u-navigation-menu
          :items="items"
          orientation="vertical"
          class="-mx-2.5"
        ></u-navigation-menu>
      </template>
    </u-header>
    <u-main>
      <u-container>
        <nuxt-page></nuxt-page>
      </u-container>
    </u-main>
    <u-separator></u-separator>
    <u-footer>
      <template #left>
        <u-link
          to="/vendor"
          class="text-sm text-muted"
          :disabled="true"
        >
          Разработчик Екатерина Ф. © {{ yearString }}
        </u-link>
      </template>
      <template #right>
        <u-button
          color="neutral"
          variant="link"
          to="https://vkvideo.ru/@birds.space"
          target="_blank"
          :avatar="{
            src: '/images/vk_video.svg',
            class: 'rounded-none squircle'
          }"
          aria-label="Dzen"
        ></u-button>
        <!--u-button
          color="neutral"
          variant="link"
          to="https://rutube.ru/channel/13711100/"
          target="_blank"
          :avatar="{
            src: '/images/rutube.svg'
          }"
          aria-label="Rutube"
        ></u-button-->
        <u-button
          color="neutral"
          variant="link"
          to="https://github.com/rinaf2021/birds"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        ></u-button>
      </template>
    </u-footer>
    <u-drawer
      title="Прошу обратить внимание"
      direction="bottom"
      :open="openCookie"
      :handle="false"
      :dismissible="false"
      :ui="{
        content: 'h-1/3',
        overlay: 'bg-inverted/30'
      }"
    >
      <template #body>
        <p class="mb-3 text-sm">Оставаясь на сайте, Вы даете согласие на обработку файлов cookie, пользовательских данных, собираемых, в том числе с использованием сервиса Яндекс.Метрика, в целях обеспечения работы сайта, проведения статистических исследований и обзоров. Если вы не хотите, чтобы ваши данные обрабатывались, измените настройки браузера или покиньте сайт. <u-link
          color="neutral"
          target="_blank"
          aria-label="Политика конфиденциальности"
          @click="showPolicy"
        >Политика конфиденциальности</u-link></p>
      </template>
      <template #footer>
        <div class="drawer__footer">
          <u-button
            label="Принимаю"
            color="info"
            size="md"
            class="basis-3"
            @click="acceptCookie"
          ></u-button>
        </div>
      </template>
    </u-drawer>
    <u-modal
      fullscreen
      title="Политка конфиденциальности"
      v-model:open="openPrivacy"
    >
      <template #body>
        <m-d-c
          :value="policyContent"
          tag="div"
        ></m-d-c>
      </template>
    </u-modal>
  </u-app>
</template>
