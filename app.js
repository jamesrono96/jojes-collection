(()=> {
const cats=window.JOJE_CATEGORIES||[], products=(window.JOJE_PRODUCTS||[]).filter(p=>p.active!==false), $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money=n=>'KSh '+Number(n||0).toLocaleString('en-KE');
function orderUrl(p){return 'https://wa.me/254795796951?text='+encodeURIComponent(`Hello JOJE'S COLLECTION, I would like to order ${p.name} — ${money(p.price)}. Please confirm availability and delivery.`)}
function productCard(p,kind=''){return `<article class="spot-card"><a class="spot-image" href="#products" data-category="${esc(p.category)}"><img src="${esc(p.image||'')}" alt="${esc(p.name)}" loading="lazy">${kind?'<span class="spot-badge '+kind+'">'+(kind==='offer'?'SPECIAL OFFER':'NEW ARRIVAL')+'</span>':''}</a><div class="spot-info"><small>${esc(p.category)}</small><h3>${esc(p.name)}</h3><strong>${money(p.price)}</strong><a class="spot-order" href="${orderUrl(p)}" target="_blank" rel="noopener">Order on WhatsApp ↗</a></div></article>`}
function rotatingCategory(category,index){
 const items=products.filter(p=>p.category===category), root=document.createElement('article');root.className='category-tile';root.style.setProperty('--tile-index',index);
 if(!items.length){root.innerHTML=`<div class="category-visual empty-visual"><span class="category-symbol">${esc(category.slice(0,1))}</span><span class="category-count">COMING SOON</span></div><div class="category-caption"><h3>${esc(category)}</h3><a href="#products">Explore category →</a></div>`;return root}
 let current=0;root.innerHTML='<div class="category-visual"></div><div class="category-caption"></div>';
 const visual=root.querySelector('.category-visual'),caption=root.querySelector('.category-caption');
 function show(){const p=items[current];visual.innerHTML=`<img src="${esc(p.image)}" alt="${esc(p.name)}" loading="lazy"><span class="category-count">${current+1} / ${items.length} PICKS</span>`;caption.innerHTML=`<div><h3>${esc(category)}</h3><p>${esc(p.name)}</p><strong>${money(p.price)}</strong></div><a href="${orderUrl(p)}" target="_blank" rel="noopener" aria-label="Order ${esc(p.name)} on WhatsApp">↗</a>`;current=(current+1)%items.length}
 show();if(items.length>1){let timer=setInterval(()=>{if(!document.hidden)show()},3600);window.addEventListener('pagehide',()=>clearInterval(timer),{once:true})}
 return root;
}
cats.forEach((c,i)=>{let o=document.createElement('option');o.value=c;o.textContent=c;$('filter').append(o);$('cats').append(rotatingCategory(c,i))});
function heroShowcase(){
 const el=$('hero-showcase');if(!el)return;
 const picks=[...products.filter(p=>p.isOffer===true||p.onOffer===true),...products.filter(p=>p.isNew===true||p.newArrival===true),...products].filter((p,i,a)=>a.findIndex(x=>x.id===p.id)===i).slice(0,8);
 if(!picks.length){el.innerHTML='<div class="hero-placeholder"><span>JOJE\'S</span><b>COLLECTION</b><small>YOUR STYLE, YOUR WAY</small></div>';return}
 let index=0;
 function draw(){const p=picks[index];const label=p.isOffer||p.onOffer?'SPECIAL OFFER':(p.isNew||p.newArrival?'NEW ARRIVAL':'FEATURED FIND');el.innerHTML=`<a class="hero-product-main" href="${orderUrl(p)}" target="_blank" rel="noopener"><img src="${esc(p.image||'')}" alt="${esc(p.name)}"><span class="hero-product-tag">${label}</span><span class="hero-product-caption"><small>${esc(p.category)}</small><strong>${esc(p.name)}</strong><b>${money(p.price)}</b></span></a><div class="hero-product-side"><span>CURATED FOR YOU</span><strong>Find something<br>you'll love.</strong><small>Tap to enquire on WhatsApp ↗</small><div class="hero-dots">${picks.map((_,i)=>'<i class="'+(i===index?'active':'')+'"></i>').join('')}</div></div>`;}
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
function render(){const q=$('search').value.toLowerCase(),c=$('filter').value,list=products.filter(p=>(!c||p.category===c)&&(!q||[p.name,p.category,p.description].join(' ').toLowerCase().includes(q)));$('grid').innerHTML='';$('empty').hidden=!!list.length;list.forEach(p=>{let card=document.createElement('article');card.className='card';let img=document.createElement('img');img.src=p.image;img.alt=p.name;img.loading='lazy';let info=document.createElement('div');info.className='info';info.innerHTML=`<small>${esc(p.category)}</small><h3>${esc(p.name)}</h3><p>${esc(p.description||'Message us for details and availability.')}</p><div class="price">${money(p.price)}</div><a class="order" target="_blank" rel="noopener">Order on WhatsApp</a>`;info.querySelector('.order').href=orderUrl(p);card.append(img,info);$('grid').append(card)})}
$('search').oninput=render;$('filter').onchange=render;$('cats').addEventListener('click',e=>{const link=e.target.closest('[data-category]');if(link){e.preventDefault();$('filter').value=link.dataset.category;$('products').scrollIntoView({behavior:'smooth'});render()}});render();
})();