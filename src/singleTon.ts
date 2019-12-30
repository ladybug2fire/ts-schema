

/**
 * 懒汉模式
 * 单例模式的目的: 确保只有一个类的实例出现, 并提供一个全局访问的方法。
 * 组成:
    - 私有构造方法, 确保用户无法通过new来创建实例
    - 静态私有成员变量singleton存储唯一的实例
    - 静态公有方法getInstance(): 静态实例的存在性并实例化
 */

let count: number = 1;
class singleTon{
    private static instance: object;
    private name: string;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new singleTon();
        }
        return this.instance;
    }

    constructor() {
        this.name = "hello" + count++
    }

    say(){
        console.log(this.name)
    }
}

const hello = new singleTon()
const hello2 = singleTon.getInstance()
const hello3 = singleTon.getInstance()
console.log(hello, hello2, hello3)

/**
 * 饿汉模式
 */
class singleTon2{
    private static instance = new singleTon2();

    constructor(){

    }

    public static getInstance(){
        return singleTon2.instance;
    }
}

const world = new singleTon()
const world2 = singleTon.getInstance()
const world3 = singleTon.getInstance()
console.log(world, world2, world3)