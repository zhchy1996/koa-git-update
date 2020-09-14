#!/bin/bash -e
set -e
echo -e "\033[32m pull start \033[0m" 
cd ~/code/hexo_blog && git pull
echo -e "\033[42;37m pull sucess \033[0m"

echo "Building Site";
echo -e "\033[32m build start \033[0m" 
npm run build
echo -e "\033[42;37m build success \033[0m"