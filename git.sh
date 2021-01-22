###
 # @Description: 
 # @Version: 
 # @Autor: MrSong
 # @Date: 2020-07-21 16:14:50
 # @LastEditors: MrSong
 # @LastEditTime: 2020-08-07 17:16:29
### 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


git add .
git commit -m 'git'

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push

cd -
