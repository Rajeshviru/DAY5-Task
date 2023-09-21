// calculate the uber price.

class Uber{
    constructor(distance,rate,waitingtime,Ac){
        this.distance=distance;
        this.rate=rate;
        this.waitingtime=waitingtime;
        this.Ac=Ac;
    }
    getDetails(){
        return `The distance of the ride is ${this.distance}km with the rate of ${this.rate}rs waiting time ${this.waitingtime}ms and Ac rate ${this.Ac}rs`
    }
    getPrice(){
        let price=(this.distance*this.rate)+(this.waitingtime)+(this.distance*this.Ac)
        
        return price
    }
    setDistance(distanceee){
        this.distance=distanceee
    }
}
const uber=new Uber(100,35,20,2)
uber.setDistance(40)
console.log(uber.getDetails())
console.log(uber.getPrice())