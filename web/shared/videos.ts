import { amadinaFasciata, amadinaFasciataTags, estrildaMelpoda, estrildaMelpodaTags, estrildaTroglodytes, estrildaTroglodytesTags, geopeliaCuneata, geopeliaCuneataTags, stizopteraBichenovii, stizopteraBichenoviiTags, uraeginthusBengalus, uraeginthusBengalusTags } from "~~/shared/species";

export function useVideoSpeciesLinks() {
	const arLinks = [];
	const existLinks = [];
	for(let i = 0; i < videos.length; i++) {
		const item = videos[i];
		const speciesId = item?.user.id as string;
		if(item && (existLinks.indexOf(speciesId) < 0)) {
			arLinks.push({
				label: item.user.name,
				to: `/video/${item.user.id}/`,
				avatar: {
					src: item.user.avatar.src,
					alt: item.user.avatar.alt,
					size: '3xl' as const
				}
			});
			existLinks.push(speciesId);
		}
	}
	return arLinks;
}

export const videos = [
	{
		title: 'Птенцы, самцы красногорлой амадины',
		description: `Только посмотрите на зачатки красных полосок на горле - похоже, у нас  2 мальчика)))

${amadinaFasciataTags}`,
		user: amadinaFasciata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvisvvakfz23kele7y?autoplay=0&mute=0'
	},
	{
		title: 'Птенцы красногорлой амадины',
		description: `Так, ну у нас 4-ре хвостика) Ура!

${amadinaFasciataTags}`,
		user: amadinaFasciata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplv53vzph73mhfoyd6u?autoplay=0&mute=0'
	},
	{
		title: 'Малыш красногорлой амадины, 1.5 недели)',
		description: `${amadinaFasciataTags}`,
		user: amadinaFasciata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvgh37cdksht5lakv3?autoplay=0&mute=0'
	},
	{
		title: 'Бриллиантовая горлица - 25 дней',
		description: `Мамочка пошла отдыхать на месяц и теперь все дети на отцовских плечах!

${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvsz4ucmirinzowjph?autoplay=0&mute=0'
	},
	{
		title: 'Когда ты не только крут, но и умен',
		description: `${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvt22dkt4pr2ljrwba?autoplay=0&mute=0'
	},
	{
		title: 'Слеток бриллиантовой горлицы',
		description: `А кто тут у нас крутышка?)))

С вылетом!

${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvbxv2t7yhvp6f5tsg?autoplay=0&mute=0'
	},
	{
		title: 'Птенцы бриллиантовой горлицы - 9 дней',
		description: `9 и 8 дней)

Растем как на дрожжах)

${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplv6qewzinh2kehj73e?autoplay=0&mute=0'
	},
	{
		title: 'Птенец красногорлой амадины',
		description: `Вот такой малышок красногорлых амадин, прямиком из Африки (по нему видно). Ему неделька

Одно кольцо профукал, поэтому номер 2, хоть и вылупился первым)

${amadinaFasciataTags}`,
		user: amadinaFasciata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvyuwxssvwd2ibd3pp?autoplay=0&mute=0'
	},
	{
		title: 'Красноухий астрильд оказался мальчиком',
		description: `А помните я вам показывала видео с самочкой красноухого астрильда? Так вот - она мальчик)))

Единственный вид гендерной неопределенности, который мне понятен

${uraeginthusBengalusTags}`,
		user: uraeginthusBengalus,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvma42xbzl7mbud34z?autoplay=0&mute=0'
	},
	{
		title: 'Кормление птенцов бриллиантовой горлицы',
		description: `${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplv4ywvceoysbfvjbkt?autoplay=0&mute=0'
	},
	{
		title: 'Песня кольчатого астрильда',
		description: `Только приехал, а уже девчонкам песни напевает)

${stizopteraBichenoviiTags}`,
		user: stizopteraBichenovii,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplv7ogyydzkdqkd2uup?autoplay=0&mute=0'
	},
	{
		title: 'Бриллиантовая горлица - счастливая мама',
		description: `${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvkmojik2uidzjgt3y?autoplay=0&mute=0'
	},
	{
		title: 'Красногорлый амадин - воришка',
		description: `С одной стороны - красть нехорошо. С другой - что не сделаешь ради благополучия будущих детей!

${amadinaFasciataTags}`,
		user: amadinaFasciata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvkrvgp6kgke5hlhp7?autoplay=0&mute=0'
	},
	{
		title: 'Бриллиантовые горлицы - смена караула',
		description: `Бриллиатовые горлицы - крайне ответственные родители и за высиживание яиц отвечают оба родителя. Самочка сидит на них всю ночь, а самец - весь день. При этом ночью самец садится рядом с гнездом, чтобы контролировать окружающую обстановку.

На видео показано как родители сменяют друг друга)

${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvwsn2rs3l7pcltdzc?autoplay=0&mute=0'
	},
	{
		title: 'Песня самца оранжевощекого астрильда',
		description: `Шикарная песня самца оранжевощекого астрильда - удивительно интересная для данного рода пернатых)

${estrildaMelpodaTags}`,
		user: estrildaMelpoda,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvp4o7g7izp6gz6l6s?autoplay=0&mute=0'
	},
	{
		title: 'Парочка оранжевощеких астрильдов',
		description: `Романтик пошел не по плану)

${estrildaMelpodaTags}`,
		user: estrildaMelpoda,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvuub5d444wusd2l2o?autoplay=0&mute=0'
	},
	{
		title: 'Самочка красноухого астрильда',
		description: `Есть небольшая склонность к разрушениям

${uraeginthusBengalusTags}`,
		user: uraeginthusBengalus,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvquf3nnv3vwicugq5?autoplay=0&mute=0'
	},
	{
		title: 'Женская дружба - Красногорлая амадина',
		description: `Я всегда считала, что самые стайные ребята среди амадин - это японские. Но как только я завела вторую самочку красногорлой мое мнение резко изменилось)

Они постоянно вместе, даже гнездо выбирают одно на двоих) очень интересно, как они будут себя вести, когда парней к ним посажу - узнаем, насколько сильна женская дружба😁

${amadinaFasciataTags}`,
		user: amadinaFasciata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvspuxqzwlueuubtd6?autoplay=0&mute=0'
	},
	{
		title: `Итак, вопрос на миллион: кто целуется лучше?)`,
		description: `${estrildaTroglodytesTags}`,
		user: estrildaTroglodytes,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvr5klun4wfrwsixsq?autoplay=0&mute=0'
	},
	{
		title: `Научился красиво уходить в заказ`,
		description: `${geopeliaCuneataTags}`,
		user: geopeliaCuneata,
		video: 'https://runtime.video.cloud.yandex.net/player/video/vplvet2gunsjacqq7gpv?autoplay=0&mute=0'
	}
];