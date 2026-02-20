.DEFAULT_GOAL: watch

watch_web:
	cd web; npm run dev;
.PHONY:watch_web

build_web:
	cd web; npm run build;
.PHONY:watch_web