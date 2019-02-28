abstract class IBlurayPlayer{ //...or interface for every class
    public abstract on():void
    public abstract off():void
    public abstract play():void
}

//...or interface for every class
// interface IBlurayPlayer{ //public, private, or abstract cannot appear here
//     on():void
//     off():void
//     play():void
// }

class BlurayPlayer implements IBlurayPlayer{
    on():void {
        console.log('turn on bluray');
    }
    off():void {
        console.log('turn off bluray');
    }
    play():void {
        console.log('play bluray');
    }
}
class Amplifier{
    on():void {
        console.log('turn on amp');
    }
    off():void {
        console.log('turn off amp');
    }
    setSource(source: string):void {
        console.log('the amp source is ' + source);
    }
    setVolume(volume: number):void {
        console.log('the amp vol is ' + volume);
    }
}
class Lights{
    dim():void {
        console.log('dim the lights');
    }
    unDim():void {
        console.log('unDim the lights');
    }
}
class TV{
    on():void {
        console.log("turn on TV");
    }
    off():void {
        console.log("turn off TV");
    }
}
class PopMaker{
    on():void {
        console.log('turn on pop maker');
    }
    off():void {
        console.log('turn off pop maker')
    }
    pop():void {
        console.log('pop some corn');
    }
}

class HomeTheaterFacade{
    private bluray: BlurayPlayer
    private amp: Amplifier
    private lights: Lights
    private tv: TV 
    private popMaker: PopMaker
    constructor(_bluray: BlurayPlayer, _amp: Amplifier, _lights: Lights, _tv: TV, _popMaker: PopMaker){
        this.bluray = _bluray
        this.amp = _amp
        this.lights = _lights
        this.tv = _tv
        this.popMaker = _popMaker
    }
    public startWatchingMovie(){
        this.tv.on()
        this.bluray.on()
        this.bluray.play()
        this.amp.on()
        this.amp.setSource('bluray')
        this.amp.setVolume(11)
        this.popMaker.on()
        this.popMaker.pop()
        this.lights.dim()
    }
    public stopWatchingMovie(){
        this.tv.off()
        this.bluray.off()
        this.amp.off()
        this.popMaker.off()
        this.lights.unDim()
    }
}
export const facadeWatchMovie = ():void =>{
    console.log('Running watchMonieFacade')
    let tv = new TV
    let bluray = new BlurayPlayer
    let amp = new Amplifier
    let popMaker = new PopMaker
    let lights = new Lights

    let homeTheater = new HomeTheaterFacade(bluray, amp, lights, tv, popMaker)
    homeTheater.startWatchingMovie()
    console.log('--------------------');
    homeTheater.stopWatchingMovie()
}