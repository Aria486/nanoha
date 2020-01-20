## Linux commond

####In commond

1. 格式

   `ln [参数][源文件或目录][目标文件或目录]`

2. 功能

   ​        Linux文件系统中，有所谓的链接(link)，我们可以将其视为档案的别名，而链接又可分为两种 : 硬链接(hard link)与软链接(symbolic link)，硬链接的意思是一个档案可以有多个名称，而软链接的方式则是产生一个特殊的档案，该档案的内容是指向另一个档案的位置。硬链接是存在同一个文件系统中，而软链接却可以跨越不同的文件系统。

3. 参数

   必要参数

   ```
   -b 删除，覆盖以前建立的链接
   
   -d 允许超级用户制作目录的硬链接
   
   -f 强制执行
   
   -i 交互模式，文件存在则提示用户是否覆盖
   
   -n 把符号链接视为一般目录
   
   -s 软链接(符号链接)
   
   -v 显示详细的处理过程
   ```

   选择参数

   ```
   -S “-S<字尾备份字符串> ”或 “--suffix=<字尾备份字符串>”
   
   -V “-V<备份方式>”或“--version-control=<备份方式>”
   
   --help 显示帮助信息
   
   --version 显示版本信息
   ```

4. 实例

   `ln -s log2013.log link2013` **给文件创建软链接**

   ```shell
   [root@localhost test]# ll
   
   -rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
   
   [root@localhost test]# ln -s log2013.log link2013
   
   [root@localhost test]# ll
   
   lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
   
   -rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
   ```

   **说明：**

   为log2013.log文件创建软链接link2013，如果log2013.log丢失，link2013将失效

   `ln log2013.log ln2013`**给文件创建硬链接**

   ```shell
   [root@localhost test]# ll
   
   lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
   
   -rw-r--r-- 1 root bin      61 11-13 06:03 log2013.log
   
   [root@localhost test]# ln log2013.log ln2013
   
   [root@localhost test]# ll
   
   lrwxrwxrwx 1 root root     11 12-07 16:01 link2013 -> log2013.log
   
   -rw-r--r-- 2 root bin      61 11-13 06:03 ln2013
   
   -rw-r--r-- 2 root bin      61 11-13 06:03 log2013.log
   ```

   **说明：**

   为log2013.log创建硬链接ln2013，log2013.log与ln2013的各项属性相同

####  重启系统配置

```
source /etc/profile
```

####监听端口号

```
netstat -lanp | grep "****"
```

/home/mongodb-user/.nvm/versions/node/v10.17.0/lib/node_modules/

ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDrgA+CxdHMUR3eG9CPC5k5hrdAjz7nD6FKpAXi3e6a78mc9kVgdGWEZhnC/X7hietMeES6rDnAUAmSchTUxI2XvyG+aH/GxkwW8XysPGizdfgfuHAdSxabNQKkifuuRzI0SK4kutCCTsEYz6knZu3CEXLcWgJqBYy0/nqCDEVdZnqJw2wPUAalk9aB3LZtn1512AhNfum9dhEYlEjZqHqMZ24VpBqbbpFPSKmc54pJQ93tUVlvMr1nU08eSkGig//JgaWum4fKiNXbaTyHruoHxJZJ+qV4DLm2TQrJ+ZmmUbhLiDufAGjZpdWsbQHK2XGhj8q8KyFMR4vnKjMHFGOh root@ip-10-10-3-38.ap-northeast-1.compute.internal

strategy	11.982666015625GB

strategy_temp	0.05078125GB

strategy  strategy_temp cssr



sudo scp -r root@10.10.3.82:/opt/mongodb/backup /opt/mongodb/backup/

mongorestore -u da -p jcomdevdb --authenticationDatabase admin -d 3cf13466 /opt/mongodb/backup/backup/3cf13466

db.auth("da", "jcomdevdb")

```
db.addUser({user:'da',pwd:'admin',roles:["read"]})
```

db.addUser({user: "da", pwd: "jcomdevdb", role:["readWrite", "dbAdmin"]);