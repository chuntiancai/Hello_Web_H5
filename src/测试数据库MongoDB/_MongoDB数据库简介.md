
## MongoDB的安装介绍：
    1、直接去mongoDB的官网下载mongoDB软件，然后在W3school查看mongoDB的安装教程，配置环境等等，需要结合百度最新的安装方式。
    2、mongoDB Compass是一个可视化软件，是mongoDB官方提供的，可以以可视化界面的形式操作数据库。
    3、下载安装mongoDB软件后，去配置mongoDB命令的环境变量，以及数据库路径等等，在 ~/.zshrc文件中配置环境变量，路径用mongoDB的linux命令来配置。
    4、启动mongodb服务后，就可以通过js的第三方库mongoose来连接数据数据库了。
    5、导入本地数据库到mongodb中：
        mongoimport -d 目标数据库名称 -c 目标集合名称 --file 要导入的数据文件(例如json文件)
            例如：mongoexport -d TestDBName -c users --file TestFileName.json
            安装mongodb时，并没有携带安装这些工具，因此需要手动安装mongoimport。去官网下载安装。

## mongoDB Compass软件的使用
    1、还是要启动mongoDB的服务，通过mongod --dbpath /usr/local/mongodata/data --logpath /usr/local/mongodata/log/mongo.log --fork 命令。
        你也可以通过创建conf文件的形式，快速启动mongoDB的服务，其实就是把命令的参数放到conf文件中。
        mongod --config /usr/local/mongodata/mongod.conf
        mongod.conf文件的配置：
            # network interfaces
            net:
              bindIp: 127.0.0.1 # 绑定到本地回环地址
              port: 27017

            # storage
            storage:
              dbPath: /usr/local/mongodata/data # 使用/data/db作为数据存储路径

            # systemLog options
            systemLog:
              destination: file
              path: /usr/local/mongodata/log/mongo.log # 指定日志文件路径
              logAppend: true	#追加的方式输入文件中


    2、然后在界面上链接到mongodb服务上，默认端口是27017
    3、左侧栏有三个默认的仓库：admin、local、config。你也可以自己创建仓库

## Mongoose第三方包
    使用Node.js操作MongoDB数据库需要依赖Node.js第三方包mongoose
    使用npm install mongoose命令下载

## MongoDB的常用命令
    1、启动mongodb服务：
        mongod --dbpath /usr/local/mongodata/data --logpath /usr/local/mongodata/log/mongo.log --fork 
            mac没有权限在根目录下创建默认的数据路径文件(window可以，默认/data/db)，所以需要指定路径。
            --dbpath：指定MongoDB数据目录的路径。记得给文件读写的权限。
            --logpath：指定MongoDB日志文件的路径。
            --logappend(以追加的方式打开文件)
            --fork：以后台进程方式运行MongoDB服务器。

    2、配置MongoDB配置文件。算了，好像是还要进到bin目录执行./mongod mongodb.conf命令，具体也不清楚配置文件是怎么起作用的。
        在自定义目录(即data文件)下创建etc/mongod.conf文件，用linux的touch命令创建。然后在配置文件中填写配置信息：
            #mongodb config file 配置文件
            dbpath=/usr/local/mongodata/data
            logpath=/usr/local/mongodata/log
            logappend = true 
            port = 27017 
            fork = true 
            auth = true

    

## linux命令
    grep命令： 用于在文本文件中查找指定的字符串，并输出匹配到的行。一般结合管道|来使用。
    kill 进程ID： 杀掉指定进程。
    ps [options]： 用于查看当前正在运行的进程列表，-a：显示所有进程。-u user：显示指定用户的进程。-x：显示没有控制终端的进程。
                                            -e：显示所有进程，等同于-A选项。-f：以全格式输出进程信息。
        ps命令输出信息的意思：
            USER：进程所属的用户。
            PID：进程ID。
            %CPU：进程占用CPU的百分比。
            %MEM：进程占用内存的百分比。
            VSZ：虚拟内存大小（单位为KB）。
            RSS：实际物理内存大小（单位为KB）。
            TTY：终端类型，通常为pts/0或tty1等。
            STAT：进程状态，例如S表示休眠状态、R表示运行状态、Z表示僵尸状态等。
            START：进程启动时间。
            TIME：进程累计CPU占用时间。
            COMMAND：进程所对应的命令。

    lsof [options] 用于查看当前系统中打开的文件和网络连接(端口)情况。可以列出所有进程打开的文件、目录、管道等信息，以及网络连接的相关信息。
        lsof命令的输出信息：
            COMMAND：进程名。
            PID：进程ID。
            USER：进程所属的用户。
            FD：文件描述符，通常为“IPv4”或“IPv6”。
            TYPE：网络连接类型，通常为“TCP”或“UDP”。
            DEVICE：设备名称。
            SIZE/OFF：数据传输量或偏移量。
            NODE：节点号，通常为IP地址和端口号的组合。
            NAME：进程所打开的网络连接。


