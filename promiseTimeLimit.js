
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise(async (resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t)
            try {
                const res = await fn(...args)
                resolve(res)
            }
            catch (err) {
                reject(err)
            }
        })
    }
};


// QUESTION
// const limited = timeLimit((t) => {
//     new Promise(
//         res => setTimeout(res, t))
// }, 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
