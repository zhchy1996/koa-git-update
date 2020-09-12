#!/bin/bash
echo "Pulling latest from Git"
cd ~/code/hexo_blog && git pull

echo "Building Site";
npm run build
echo "Jekyll Site Built";