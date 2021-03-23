const args = process.argv;
function sumNum(args) {
    var sum = 0
    for (i = 0; i < args.length; i++) {

        sum = sum + parseInt(args[i])
    }
    return sum
}
console.log(sumNum(args.slice(2,args.length)))