<!--
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-26 09:07:11
 * @LastEditors: MrSong
 * @LastEditTime: 2021-02-02 14:47:27
-->
## 初始密码路径

```ssh
C:\Windows\system32\config\systemprofile\AppData\Local\Jenkins\.jenkins\secrets\initialAdminPassword
```

## Additional Behaviours(配置git clone 本地目录)

- Check out to a sub-directory
仓库的本地子目录

```sh
D:\Program Files\java\github
```

## jenkins默认端口8080

## 设置内网穿透

```sh
ngrok http 8080
```

## Add Changelog Information to Environment配置

- Entry Format

```sh
%3$s(at %4$s via %1$s)\n
```

- Date Format

```sh
yyyy-MM-dd HH:mm:ss
```

## 构建

- Execute shell(命令)

```sh
node -v
npm -v
cnpm -v
yarn -v
pm2 -v

echo 当前分支：$GIT_BRANCH

echo 当前用户：$GIT_COMMITTER_NAME

echo 当前tag：$BUILD_TAG

echo jenkins工作路径：$WORKSPACE

echo SCM_CHANGELOG $SCM_CHANGELOG

#%3$s 为 git commit message

 

if [ ! -n "$SCM_CHANGELOG" ] ;then

    echo "没有commit记录 请注意 发送邮件通知运维"

else

    echo "SCM_CHANGELOG  如下 $SCM_CHANGELOG"

fi
# 进入目标文件夹
cd D:/"Program Files"/java/gitee
# 安装依赖
cnpm i
# 项目打包
npm run build
# 进入dist文件夹
cd dist
# 删除上次打包生成的压缩文件
rm -rf test.tar.gz
# 把生成的项目打包成test方便传输到远程服务器
tar -zcvf test.tar.gz *
# 复制目标文件到指定文件夹
scp test.tar.gz C:/Windows/System32/config/systemprofile/AppData/Local/Jenkins/.jenkins/workspace/gitee
cd ../
```

## Shell

```sh
C:\Program Files\Git\bin\bash.exe
```

## git

```sh
https://github.com/song-jun/react-my.git
```

## 钉钉机器人

- 自定义内容(md格式)

```md
api:https://oapi.dingtalk.com/robot/send?access_token=731376a2a91173362f850f629ad8ff386793cb593526f6cc92fe24674d200a31
name:小懒
- 改动分支：$GIT_BRANCH
- hash值：$GIT_COMMIT
----------------------------------  
- commit：$SCM_CHANGELOG
```

## path

```sh
echo $PATH
```

```sh
/c/Users/28909/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/bin:/mingw64/bin:/usr/bin:/c/Users/28909/bin:/c/Program Files (x86)/Common Files/Oracle/Java/javapath:/c/Program Files (x86)/NetSarang/Xshell 6:/c/Program Files (x86)/NetSarang/Xftp 6:/c/Windows/system32:/c/Windows:/c/Windows/System32/Wbem:/c/Windows/System32/WindowsPowerShell/v1.0:/c/Windows/System32/OpenSSH:/c/Program Files/Intel/WiFi/bin:/c/Program Files/Common Files/Intel/WirelessCommon:/c/Program Files (x86)/NVIDIA Corporation/PhysX/Common:/c/Program Files/NVIDIA Corporation/NVIDIA NvDLISR:/c/Users/28909/AppData/Local/Programs/Python/Python38-32:/c/Program Files/dotnet:/c/Program Files/nodejs:/cmd:/c/Users/28909/AppData/Local/Programs/Python/Python38-32/Scripts:/c/Users/28909/AppData/Local/Programs/Python/Python38-32:/c/Users/28909/AppData/Local/Microsoft/WindowsApps:/d/Microsoft VS Code/bin:/d/phpstudy_pro/Extensions/MySQL5.7.26/bin:/c/Windows/system32:/c/Users/28909/AppData/Local/GitHubDesktop/bi
```

## publish over ssh配置

```sh
cd /www/wwwroot/api.songjun520.cn #进入远程服务器目录
mkdir dist #创建文件夹
tar -zxvf test.tar.gz -C dist/ #解压test文件到dist文件夹
rm -rf test.tar.gz #删除文件
```

Name：对应Publish Over SSH中的私有配置SSH Server Name

Transfer Set

Source files：需要上传的文件（相对于工作区的路径。可以填写多个，默认用,分隔, **/* 表示这个job的工作目录下所有的文件和目录。）

Remove prefix 该操作是针对上面的source files目录，会移除匹配的目录。通常留空

Remote directory：远程服务器目录（比如我这里的test，那么加上  公共配置(系统配置)->私有配置->Remote Directory   最后就是  /xcdata/test/）

## cnpm not found

- 处理方法

```sh
echo $PATH
```

复制PATH,在全局设置里面增加系统Path，粘贴即可,然后重启jenkins

## jenkins cmd重启方法

```sh
net start jenkins
net stop jenkins
```