
class MyPromise{
    status: 'pending'| 'fulfilled'| 'rejected' = 'pending'
    resolve: Function
    reject: Function
    res = null
    error = null
    resolveCallbacks = []
    rejectCallbacks = []
    constructor(implement){

        const resolve = (res)=>{
            if(this.status == 'pending'){
                this.status = 'fulfilled'
                this.res = res
                this.resolveCallbacks.forEach(fn=>fn())
            }
        }
        const reject = (err)=>{
            if(this.status == 'pending'){
                this.status = 'rejected'
                this.error = err
                this.rejectCallbacks.forEach(fn=>fn())
            }
        }
        try {
            implement(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilled, onRejected?){
        if (this.status === "fulfilled") {
            onFulfilled(this.res);
        }
        if (this.status === "rejected") {
            onRejected(this.error);
        }
        if (this.status === "pending") {
            this.resolveCallbacks.push(() => onFulfilled(this.res));
            this.rejectCallbacks.push(() => onRejected(this.error));
        }
    }
}