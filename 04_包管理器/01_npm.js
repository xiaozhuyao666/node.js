/* 
    dir 查看该项目所在的目录，以及目录下的文件及权限等信息
    package.json
        -package.json是包的描述文件
        -node中通过还文件对项目进行描述
        -每一个node项目必须有package.json
    json文件不能有注释。
    json：对象里面的属性名和属性值必须用双引号包裹，属性值：必须由小写字母和下划线组成。
    版本：一般三位：第一位数是大版本（能会造成不兼容之前的版本），第二位数是当前版本更新，
    在此大版本基础上更新（会兼容此大版本之前的版本），最后一位数是修复bug的补丁次数。
    main:   指定主文件
    由于在项目传输时要求尽量快速，如果项目中使用的包过多，会导致项目本身变得臃肿，不便传输，
    因此在package.json中添加依赖属性，值为包名和版本号，传项目时不用再传包，对方接收到项目直接输入npm -i便可以下载所有依赖的包
    命令：
        npm init 初始化项目，创建package.json文件（需要手动回答问题）
        npm init -y 初始化项目，创建package.json文件（所有值全部按默认值）
        npm install(可以简写成 i) 包名  将指定包下载到当前项目中
            install时发生了什么？
                ①将指定包下载到当前项目的node_modules目录下
                ②会在package.json添加json的dependencies（依赖）属性中添加一个新的属性
                    "lodash": "^4.17.21"  ^表示匹配4.xx.xx的最新版本
                    "lodash": "~4.17.21"  ~表示匹配4.17.xx的最新版本
                    "lodash": "*"  *表示匹配最新版本
                ③会自动添加package-lock.json文件
                    主要是用来记录当前项目的下包的结构和版本的，帮助加速npm下载的，不用动它
        npm install 会自动安装所有依赖
        指定安装的版本号
            npm install lodash@3.2.0
        安装大于3.2.0的lodash版本
            npm install lodash@"> 3.2.0"
        禁止安装的包出现在package.json的依赖中
                npm install lodash --no-save
            也可以通过-D或–save-dev，将其添加到开发依赖
                npm install lodash -D
        卸载安装的包
            npm uninstall 包名
        npm install 包名 -g  全局安装
            -全局安装是将包安装到计算机中
            -全局安装的通常都是一些工具
            
*/
/* 
    移入从npm下载的包时，不需要书写路径，直接写包名即可
*/
const _ = require("lodash");
console.log(_);