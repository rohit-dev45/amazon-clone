export function updateCart(cart,id,quantity){
 if(!Number.isInteger(quantity)||quantity<0||quantity>99) return cart;
 const next={...cart}; if(quantity===0) delete next[id]; else next[id]=quantity; return next;
}
export function total(cart,products){return products.reduce((sum,p)=>sum+p.price*(cart[p.id]||0),0);}
