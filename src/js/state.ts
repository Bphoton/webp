/**State*/
interface IState{ //Actual UI Valid State
    order: Order
    cancelOrder():void
    verifyPayment():void
    shipOrder():void
}

export default class Order{
    //States and in-between States
    //Order >>(cancelState)>> paymentPendingState >>(cancelState)>> orderBeingPreparedState >> orderShippedState
    public paymentPendingState:IState
    public orderBeingPreparedState:IState
    public cancelOrderState:IState
    public orderShippedState:IState
    public currentState:IState = this.paymentPendingState

    constructor(){
        //all properties (states), recursively (this)
        this.paymentPendingState = new PaymentPendingState(this) //you can clg() the constructor name of these classes when getState()
        this.orderBeingPreparedState = new OrderBeingPreparedState(this)
        this.cancelOrderState = new CancelOrderState(this)
        this.orderShippedState = new OrderShippedState(this)
        this.setState(this.paymentPendingState) //init state

    }
    public setState(_state:IState){ //
        this.currentState = _state
    }
    public getState():IState{ 
        return this.currentState //select 3 options to choose from any of the 4 states
    }
}
class PaymentPendingState implements IState{
    order: Order;    
    constructor(_order:Order){
        this.order = _order
    }
    cancelOrder(): void {
        console.log('canceling unpaid order');
        this.order.setState(this.order.cancelOrderState)
    }
    verifyPayment(): void {
        console.log('payment verified, shipping soon');
        this.order.setState(this.order.orderBeingPreparedState)
    }
    shipOrder(): void {
        console.log('we cannot ship the order when payment is pending');
    }
}
class CancelOrderState implements IState{
    order: Order;    
    constructor(_order:Order){
        this.order = _order
    }
    cancelOrder(): void {
        console.log('cannot cancel order because there is nothing to cancel');
    }
    verifyPayment(): void {
        console.log('cannot verify payment because there is nothing to verify');
    }
    shipOrder(): void {
        console.log('connot ship order because there is nothing to ship')
    }

}
class OrderBeingPreparedState implements IState{
    order: Order;    
    constructor(_order:Order){
        this.order = _order
    }
    cancelOrder(): void {
        console.log('order is being canceled');
        this.order.setState(this.order.cancelOrderState)
    }
    verifyPayment(): void {
        console.log('already verified your payment');
    }
    shipOrder(): void {
        console.log('your order is being shipped now!');
        this.order.setState(this.order.orderShippedState)
    }

}
class OrderShippedState implements IState{
    order: Order;    
    constructor(_order:Order){
        this.order = _order
    }
    cancelOrder(): void {
        console.log('cannot cancel, already shipped');
    }
    verifyPayment(): void {
        console.log('cannot verify payment, already been verified');
    }
    shipOrder(): void {
        console.log('cannot ship order, already been shipped');
    }

}

export const stateProper = () => {
    console.log('Running state properState:')

    let order = new Order() // (1)
    //order.getState().cancelOrder() // (1.5) ::canceling unpaid order ::Current State: CancelOrderState
    //order.getState().shipOrder() //::we cannot ship the order when payment is pending ::Current State: PaymentPendingState
    order.getState().verifyPayment() // (2) ::payment verified, shipping soon ::Current State: OrderBeingPreparedState
    //order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::Current State: CancelOrderState
    //order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    //order.getState().order.currentState.verifyPayment() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().verifyPayment()                           // (Continue with the order)
    //order.getState().verifyPayment() //::payment verified, shipping soon ::already verified your payment ::Current State: OrderBeingPreparedState
    order.getState().shipOrder() // (3) ::payment verified, shipping soon ::your order is being shipped now! ::Current State: OrderShippedState
    //order.getState().cancelOrder() //::payment verified, shipping soon ::your order is being shipped now! ::cannot cancel, already shipped ::Current State: OrderShippedState

    // //can override state anytime
    // // order.setState(order.paymentPendingState)
    // // order.setState(order.orderBeingPreparedState)
    // // order.setState(order.cancelOrderState)
    // // order.setState(order.orderShippedState)
    // // order.getState().cancelOrder() //::cannot cancel, already shipped

    // console.log('Current State:', (<any>order.getState()).constructor.name); //::Order State: PaymentPendingState
    // //////////  same as  /////////////
    // //console.log('Current State:', (<IState|any|object|>order.getState()).constructor.name); //::Order State: PaymentPendingState
    // //console.log('Current State:', (order.getState()).constructor.name); //::Order State: PaymentPendingState
    // //console.log('Current State:', order.getState().constructor.name ) //::Order State: PaymentPendingState
}

export const stateInterject = () => {
    console.log('Running interjectState')
    let order = new Order() // (1)
    //order.getState().cancelOrder() // (1.5) ::canceling unpaid order ::Current State: CancelOrderState
    //order.getState().shipOrder() //::we cannot ship the order when payment is pending ::Current State: PaymentPendingState
    order.getState().verifyPayment() // (2) ::payment verified, shipping soon ::Current State: OrderBeingPreparedState
    order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::Current State: CancelOrderState
    //order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    //order.getState().order.currentState.verifyPayment() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().verifyPayment()                           // (Continue with the order)
    //order.getState().verifyPayment() //::payment verified, shipping soon ::already verified your payment ::Current State: OrderBeingPreparedState
    //order.getState().shipOrder() // (3) ::payment verified, shipping soon ::your order is being shipped now! ::Current State: OrderShippedState
    //order.getState().cancelOrder() //::payment verified, shipping soon ::your order is being shipped now! ::cannot cancel, already shipped ::Current State: OrderShippedState
}
export const stateSkip = () => {
    console.log('Running skipState')
    let order = new Order() // (1)
    //order.getState().cancelOrder() // (1.5) ::canceling unpaid order ::Current State: CancelOrderState
    order.getState().shipOrder() //::we cannot ship the order when payment is pending ::Current State: PaymentPendingState
    //order.getState().verifyPayment() // (2) ::payment verified, shipping soon ::Current State: OrderBeingPreparedState
    //order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::Current State: CancelOrderState
    //order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    //order.getState().order.currentState.verifyPayment() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().verifyPayment()                           // (Continue with the order)
    //order.getState().verifyPayment() //::payment verified, shipping soon ::already verified your payment ::Current State: OrderBeingPreparedState
    //order.getState().shipOrder() // (3) ::payment verified, shipping soon ::your order is being shipped now! ::Current State: OrderShippedState
    //order.getState().cancelOrder() //::payment verified, shipping soon ::your order is being shipped now! ::cannot cancel, already shipped ::Current State: OrderShippedState
}
export const stateDuplicate = ():void => {
    console.log('Running duplicateState')
    let order = new Order() // (1)
    //order.getState().cancelOrder() // (1.5) ::canceling unpaid order ::Current State: CancelOrderState
    //order.getState().shipOrder() //::we cannot ship the order when payment is pending ::Current State: PaymentPendingState
    order.getState().verifyPayment() // (2) ::payment verified, shipping soon ::Current State: OrderBeingPreparedState
    order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::Current State: CancelOrderState
    order.getState().cancelOrder() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    //order.getState().order.currentState.verifyPayment() // (2.5) ::payment verified, shipping soon ::order is being canceled ::cannot cancel order because there is nothing to cancel ::Current State: CancelOrderState
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().order.setState(order.paymentPendingState) // (Override canceled order)
    // order.getState().verifyPayment()                           // (Continue with the order)
    //order.getState().verifyPayment() //::payment verified, shipping soon ::already verified your payment ::Current State: OrderBeingPreparedState
    //order.getState().shipOrder() // (3) ::payment verified, shipping soon ::your order is being shipped now! ::Current State: OrderShippedState
    //order.getState().cancelOrder() //::payment verified, shipping soon ::your order is being shipped now! ::cannot cancel, already shipped ::Current State: OrderShippedState
}

export const stateCustom = ():void =>{
    console.log('Running Custom State:');
    let order = new Order() 
    //order.getState().cancelOrder() 
    //order.getState().shipOrder()
    order.getState().verifyPayment() 
    //order.getState().cancelOrder() 
    //order.getState().cancelOrder() 
    //order.getState().verifyPayment()
    //order.getState().verifyPayment()
    order.getState().shipOrder() 
    //order.getState().cancelOrder() 
}