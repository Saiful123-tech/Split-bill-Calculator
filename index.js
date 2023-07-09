let rupeeIndian = Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});

document.querySelector('.bill-amount').addEventListener('change',function(){
    let bill=parseInt(this.value);
    let tip=parseInt((document.querySelector('#tip-input').value));
    let split = parseInt(document.querySelector('#split-input').value);
    TipCalculation(bill,tip,split);
})

document.querySelector('#tip-input').addEventListener('change',function(){
    let tip=parseInt(this.value);
    let bill=parseInt(document.querySelector('.bill-amount').value);
    let split = parseInt(document.querySelector('#split-input').value);
    TipCalculation(bill,tip,split);
})

document.querySelector('#split-input').addEventListener('change',function(){
    let split =  parseInt(this.value);
    let bill=parseInt(document.querySelector('.bill-amount').value);
    let tip=parseInt((document.querySelector('#tip-input').value));
    TipCalculation(bill,tip,split);
})
function TipCalculation(bill,tip,split){
    document.querySelector('#tip-percentage').innerHTML = tip + '%';
    let tiptotal = (tip / 100) * bill;
    document.querySelector('.tip-total').innerHTML = rupeeIndian.format(tiptotal);
    document.querySelector('#split-value').innerHTML = split;
    document.querySelector('#total-per-person').innerHTML = rupeeIndian.format((bill+tiptotal)/split);
    document.querySelector('#bill-per-person').innerHTML = rupeeIndian.format(bill/split);
    document.querySelector('#tip-per-person').innerHTML = rupeeIndian.format(tiptotal/split);
}