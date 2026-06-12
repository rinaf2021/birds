import { videos } from "~~/shared/videos";

export default defineEventHandler((event) => {

	return {
		success: true,
		data: {
			meta: {
				title: '',
				description: '',
				keywords: ''
			},
			items: videos
		}
	}
})