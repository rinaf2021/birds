import { videos } from "~~/shared/videos";

export default defineEventHandler((event) => {

	const species = getRouterParam(event, 'species');

	const items = [];

	let currentSpecies = null;

	for(let i = 0; i < videos.length; i++) {
		const video = videos[i];
		if(video && video.user.id === species) {
			items.push(video);
			currentSpecies = video.user;
		}
	}

	if(!currentSpecies) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Страница не найдена', // Краткий статус ответа
      message: `Даннный вид отсутствует на сайте` // Подробное сообщение
    })
  }

	return {
		success: true,
		data: {
			meta: {
				title: `Видео: ${currentSpecies.name}`,
				description: '',
				keywords: '',
				image: currentSpecies.avatar.src
			},
			items: items
		}
	}
})