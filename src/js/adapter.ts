/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Adapter //Adapter pattern allows you to keep the original class the same Iphone and Android
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
interface IIPhone{
    useLighting(): void
}
interface IAndroid{
    useMicroUSB(): void
}


class IPhone implements IIPhone{ 
    useLighting(): void | string{
        console.log('I use lightning port');
    }
}
class Android implements IAndroid{
    useMicroUSB(): void{
        console.log('I use microUSB port');
    }
}
class MicroUSBToLightingAdapter implements IAndroid{
    iphone: IPhone
    constructor(_iphone: IPhone){
        this.iphone = _iphone;
        
    }
    public useMicroUSB(): void {
        console.log('I have a MicroUSB and want to adapt it to the Lighting port');
        let myVar = this.iphone.useLighting();
        
    }
}
//class MicroUSBToLightningAdapter implements IAndroid{ ...
export const adaptMicroUSB = ():void => {
    console.log('Running adapter:');
    let iphone = new IPhone()
    let lightningToMicroUSBAdapter = new MicroUSBToLightingAdapter(iphone);
    lightningToMicroUSBAdapter.useMicroUSB()
}