#!/root/nginx/env sh

# cd blog

git pull 

npm run build

rm -rf /www/project/blog

mv .vitepress/dist /www/project/blog