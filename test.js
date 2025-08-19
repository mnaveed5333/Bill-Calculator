const menu = [
  { name: "Pizza", price: 700 },
  { name: "Burger", price: 200 }, 
  { name: "Samosa", price: 50 },
  { name: "Cake", price: 500 }, 
  { name: "Shawarma", price: 220 }, 
  { name: "Pasta", price: 850 },
  { name: "Sting", price: 80 }, 
  { name: "Coke", price: 220 }, 
  { name: "Pepsi", price: 170 },
  { name: "Fanta", price: 140 }, 
  { name: "Apple Juice", price: 260 }, 
  { name: "Mango Juice", price: 250 }
];

let total = 0;
['foodmenu','drinksmenu'].forEach(menuId=>{
    document.getElementById(menuId).addEventListener('change',function(){
        const index=this.value;
        const item=menu[index];
        total+=item.price;
        let li=document.createElement('li');
        li.textContent=` 1 qty of ${item.name} = ${item.price}`;
        li.id='lis';
        let list=document.getElementById('list');
        list.appendChild(li);
    })})

document.getElementById('calculate').addEventListener('click', () => {
  document.getElementById('bill').textContent = `Your Bill is: Rs.${total}`;
});