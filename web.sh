echo "Build web";
cd web;
pm2 stop ./ecosystem.config.cjs;
npm install;
npm run build;
pm2 start ./ecosystem.config.cjs;
echo "Rebuild web application done.";