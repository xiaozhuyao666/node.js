/* 
    package.json
        scripts:
            -可以自定义一些命令
            -定义以后可以直接通过npm来执行这些命令
            -start 和 test 可以直接通过npm start 和 npm test执行
            -其他命令需要通过npm run xxx 执行
    npm镜像：
        -npm的仓库的服务器位于国外，有时候并不是那么的好使，为了解决这个问题，
        可以在npm中配置一个镜像服务器。
        -镜像的配置：
            ① 在系统中安装cnpm (不推荐使用)
                npm install -g cnpm --registry=https://registry.npmmirror.com
            ② 彻底修改仓库地址（推荐使用）
                npm set registry https://registry.npmmirror.com
                还原到国外仓库，其实就是删除配置的仓库
                    npm config delete registry
            ③ 查看当前所使用的仓库
                npm config get registry
*/