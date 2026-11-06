(()=> {
const cats=window.JOJE_CATEGORIES||[], products=(window.JOJE_PRODUCTS||[]).filter(p=>p.active!==false), $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>'KSh '+Number(n||0).toLocaleString('en-KE');
function orderUrl(p){return 'https://wa.me/254795796951?text='+encodeURIComponent(`Hello JOJE'S COLLECTION, I am enquiring about ${p.name} — ${money(p.price)}. Please confirm whether it is currently available and advise on delivery.`)}
function productCard(p,kind=''){return `<article class="spot-card"><a class="spot-image" href="#products" data-category="${esc(p.category)}"><img src="${esc(p.image||'')}" alt="${esc(p.name)}" loading="lazy">${kind?'<span class="spot-badge '+kind+'">'+(kind==='offer'?'SPECIAL OFFER':'NEW ARRIVAL')+'</span>':''}</a><div class="spot-info"><small>${esc(p.category)}</small><h3>${esc(p.name)}</h3><strong>${money(p.price)}</strong><a class="spot-order" href="${orderUrl(p)}" target="_blank" rel="noopener">Enquire on WhatsApp ↗</a></div></article>`}
const categoryGallery = {
 'Male clothes': [
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80'
 ],
 'Female clothes': [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80'
 ],
 'Girls clothes': [
  'https://images.unsplash.com/photo-1519238263530-99c7b9b7f8a6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519238263530-99c7b9b7f8a6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80'
 ],
 'Boys clothes': [
  'https://images.unsplash.com/photo-1519238263530-99c7b9b7f8a6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519238263530-99c7b9b7f8a6?auto=format&fit=crop&w=900&q=80'
 ],
 'Shoes': [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80'
 ],
 'Utensils': [
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1598305726768-a537ed83e350?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1584990347449-a6fca2f1d2f0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1556911261-6bd341186b2f?auto=format&fit=crop&w=900&q=80'
 ],
 'Electronics': [
  'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1665885945839-74649e791586?auto=format&fit=crop&w=900&q=80'
 ],
 'Beddings': [
  'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80'
 ]
};
function rotatingCategory(category,index){
 const samples=categoryGallery[category]||[], root=document.createElement('article');
 root.className='category-tile';root.style.setProperty('--tile-index',index);
 const inquiry='https://wa.me/254795796951?text='+encodeURIComponent("Hello JOJE'S COLLECTION, please share the available products and prices in the "+category+" category and confirm current availability.");
 root.innerHTML='<div class="category-gallery"><img class="category-slide" alt=""></div><div class="category-caption"><div><h3>'+esc(category)+'</h3><p>Ask us for current products and availability</p></div><a href="'+inquiry+'" target="_blank" rel="noopener" aria-label="Ask about '+esc(category)+' on WhatsApp">↗</a></div>';
 const img=root.querySelector('.category-slide');let indexNow=0, attempts=0, timer=null;
 function showNext(){
  if(!samples.length){img.removeAttribute('src');return}
  attempts=0;
  const tryLoad=()=>{
   if(attempts>=samples.length){img.removeAttribute('src');img.alt=category+' photos are being updated';return}
   const src=samples[indexNow%samples.length];indexNow=(indexNow+1)%samples.length;attempts++;
   img.onerror=tryLoad;
   img.onload=()=>{img.alt=category+' collection photo';};
   img.src=src;
  };
  tryLoad();
 }
 showNext();
 if(samples.length>1){timer=setInterval(()=>{if(!document.hidden)showNext()},3500);window.addEventListener('pagehide',()=>clearInterval(timer),{once:true})}
 return root;
}
cats.forEach((c,i)=>{let o=document.createElement('option');o.value=c;o.textContent=c;$('filter').append(o);$('cats').append(rotatingCategory(c,i))});
function heroShowcase(){
 const el=$('hero-showcase');if(!el)return;
 const picks=[...products.filter(p=>p.isOffer===true||p.onOffer===true),...products.filter(p=>p.isNew===true||p.newArrival===true),...products].filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i).slice(0,8);
 if(!picks.length){el.innerHTML='<div class="hero-placeholder"><span>JOJE\'S</span><b>COLLECTION</b><small>YOUR STYLE, YOUR WAY</small></div>';return}
 let index=0;
 function draw(){const p=picks[index];const label=p.isOffer||p.onOffer?'SPECIAL OFFER':(p.isNew||p.newArrival?'NEW ARRIVAL':'FEATURED FIND');el.innerHTML=`<a class="hero-product-main" href="${orderUrl(p)}" target="_blank" rel="noopener"><img src="${esc(p.image||'')}" alt="${esc(p.name)}"><span class="hero-product-tag">${label}</span><span class="hero-product-caption"><small>${esc(p.category)}</small><strong>${esc(p.name)}</strong><b>${money(p.price)}</b></span></a><div class="hero-product-side"><span>CURATED FOR YOU</span><strong>Find something<br>you'll love.</strong><small>Ask about availability on WhatsApp ↗</small><div class="hero-dots">${picks.map((_,i)=>'<i class="'+(i===index?'active':'')+'"></i>').join('')}</div></div>`;}
 draw();if(picks.length>1)setInterval(()=>{if(!document.hidden){index=(index+1)%picks.length;draw()}},4200);
}
heroShowcase();
function featureRail(id,list,kind,emptyText){
 const el=$(id);if(!list.length){el.innerHTML=`<div class="feature-empty"><span>✦</span><p>${emptyText}</p></div>`;return}
 let index=0;function draw(){const visible=list.slice(index).concat(list.slice(0,index)).slice(0,Math.min(4,list.length));el.innerHTML=visible.map(p=>productCard(p,kind)).join('');index=(index+1)%list.length}
 draw();if(list.length>1){setInterval(()=>{if(!document.hidden)draw()},4600)}
}
featureRail('offers-track',products.filter(p=>p.isOffer===true||p.onOffer===true),'offer','Our special offers will appear here. Check back for great deals.');
featureRail('new-track',products.filter(p=>p.isNew===true||p.newArrival===true),'new','New products will appear here as soon as they arrive.');
function render(){const q=$('search').value.toLowerCase(),c=$('filter').value,list=products.filter(p=>(!c||p.category===c)&&(!q||[p.name,p.category,p.description].join(' ').toLowerCase().includes(q)));$('grid').innerHTML='';$('empty').hidden=!!list.length;list.forEach(p=>{let card=document.createElement('article');card.className='card';let img=document.createElement('img');img.src=p.image;img.alt=p.name;img.loading='lazy';let info=document.createElement('div');info.className='info';info.innerHTML=`<small>${esc(p.category)}</small><h3>${esc(p.name)}</h3><p>${esc(p.description||'Message us for details and availability.')}</p><div class="price">${money(p.price)}</div><a class="order" target="_blank" rel="noopener">Check availability on WhatsApp</a>`;info.querySelector('.order').href=orderUrl(p);card.append(img,info);$('grid').append(card)})}
$('search').oninput=render;$('filter').onchange=render;$('cats').addEventListener('click',e=>{const link=e.target.closest('[data-category]');if(link){e.preventDefault();$('filter').value=link.dataset.category;$('products').scrollIntoView({behavior:'smooth'});render()}});render();
})();