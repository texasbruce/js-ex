const Range = function (start, end, step = 1){
    return (this instanceof Range) ?
        Object.assign(this, {start: start, end: end, step: step}) :
        new Range (start, end , step) ;
}

Range.prototype[Symbol.iterator] = function () {
    let [rangeObj, curr] = [this, this.start];
    return {
        next: function() {
            if (curr <= rangeObj.end) {
                let res = {value: curr, done: false};
                curr += rangeObj.step;
                return res;
            }
            else {
                return {done: true};
            }
        }
    }
}

Range.prototype.forEach = function (callback, thisArg) {
    return Array.from(this).forEach(callback, thisArg);
}

Range.prototype.map = function (callback, thisArg) {
    return Array.from(this).map(callback, thisArg);
}


module.exports = Range;

// Range(1,4).forEach(i=>console.log(i));
// console.log(new Range(1,11,3).map(i=>i*2));
// console.log([...Range(1,5)]);