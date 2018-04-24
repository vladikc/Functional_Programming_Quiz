const workers = [
    { name: "Vlad", rate: 100.00, hours: 39 },
    { name: "Phill", rate: 99.00, hours: 61 },
    { name: "Sam", rate: 98.00, hours: 37 },
]

class Payroll {
    constructor(workers){
    this.workers = workers;
    this.names = this.getNames();
    this.time = this.getFullTime();
    

    }
    getNames(){
        var newNames = this.workers.map(function(res) {
            return res.name
        })
        return newNames.sort()
    }
    getFullTime() {
        return this.workers.filter(function (fil) {
            return ((fil.hours) > 60) ? 1 : 0
        })
    }
    getTotalLabor(){
        return this.total.reduce( (acc,curr,index)=> {
            return (index === this.total.length - 1) ? ((acc + curr)/(index+1)) : acc + curr
        },0)
    }
}

const payroll = new Payroll(workers)

console.log("Names ",payroll.names)
console.log("time ",payroll.time)
