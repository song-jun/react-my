<!--
 * @Description: 
 * @Version: 
 * @Autor: MrSong
 * @Date: 2021-01-26 09:07:11
 * @LastEditors: MrSong
 * @LastEditTime: 2021-01-26 19:33:26
-->
## 初始密码路径

```ssh
C:\Windows\system32\config\systemprofile\AppData\Local\Jenkins\.jenkins\secrets\initialAdminPassword
```

## Additional Behaviours(配置git clone 本地目录)

- Check out to a sub-directory
仓库的本地子目录

## jenkins默认端口8080

## 设置外网穿透

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
```

## 钉钉机器人

- 自定义内容(md格式)

```md
- 改动分支: $GIT_BRANCH
- commit: $SCM_CHANGELOG
- hash值: $GIT_COMMIT
```