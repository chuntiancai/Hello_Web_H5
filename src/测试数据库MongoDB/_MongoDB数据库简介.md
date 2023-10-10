
## Mongoose第三方包
    使用Node.js操作MongoDB数据库需要依赖Node.js第三方包mongoose
    使用npm install mongoose命令下载

## MongoDB的常用命令
    1、启动mongodb服务：
        mongod --dbpath /usr/local/mongodata/data --logpath /usr/local/mongodata/log/mongo.log --fork 
            mac没有权限在根目录下创建默认的数据路径文件(window可以，默认/data/db)，所以需要指定路径。
            --dbpath：指定MongoDB数据目录的路径。
            --logpath：指定MongoDB日志文件的路径。
            --fork：以后台进程方式运行MongoDB服务器。
    2、配置MongoDB配置文件。
        在自定义目录下传家
    

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


