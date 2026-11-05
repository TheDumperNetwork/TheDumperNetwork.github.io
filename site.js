/* DSRO shared script: data, page chrome, starfield, and per-page behaviour */
var P=[
{k:'mercury',n:'Mercury',t:'The least visited rocky planet',c:'#9a8f86',c2:'#d8cfc6',gl:'rgba(200,185,170,.28)',u:.39,s:.5,d:'0.39 AU',y:'88 days',m:'0',v:'3 flyby passes, 1 orbiter',
a:['Mercury is the closest planet to the Sun and the smallest in the Solar System. It has almost no atmosphere, so its surface swings between extreme heat and deep cold.','Ice has been found in permanently shadowed craters near its poles. A planet this close to the Sun holding ice is one of the strangest facts we have.'],
q:'How did ice survive on the planet closest to the Sun?',r:'Mariner 10 flew past in 1974 and 1975. MESSENGER orbited from 2011 to 2015. BepiColombo, a European and Japanese mission, is the next.'},
{k:'venus',n:'Venus',t:'A day longer than its year',c:'#d9a85f',c2:'#f4dba8',gl:'rgba(230,180,100,.3)',u:.72,s:.95,d:'0.72 AU',y:'225 days',m:'0',v:'Many missions',
a:['Venus is close to Earth in size, yet its surface is hot enough to melt lead under a thick carbon dioxide atmosphere. It spins backwards, and one rotation takes longer than one orbit of the Sun.','Whether it once held oceans is still debated. The answer shapes how we judge which planets around other stars might be habitable.'],
q:'What turned our nearest neighbour into the world it is today?',r:'The Soviet Venera landers sent data from the surface in the 1970s and 80s. Magellan mapped it with radar in the 1990s. Far fewer missions have gone than to Mars.'},
{k:'earth',n:'Earth',t:'Our only reference',c:'#3b78c9',c2:'#9fd0ff',gl:'rgba(90,160,255,.35)',u:1,s:1,d:'1 AU',y:'365.25 days',m:'1',v:'Home',
a:['Earth is the one world we know hosts life, which makes it the reference for every judgement we make about other planets.','Studying other worlds is also a way of understanding our own: how climates change, how oceans form, and how fragile a stable planet can be.'],
q:'What makes a planet able to stay habitable for billions of years?',r:'Thousands of satellites watch it every day. It is the best studied planet we have, and still not fully understood.'},
{k:'mars',n:'Mars',t:'A drier world than it once was',c:'#c1552f',c2:'#f0a27a',gl:'rgba(220,100,60,.3)',u:1.52,s:.7,d:'1.52 AU',y:'687 days',m:'2',v:'Many missions',
a:['Mars once had liquid water on its surface. Dry river valleys and mineral deposits show that clearly. Today the planet is cold, dry and thinly covered by air.','The open question is what happened to that water, and whether anything lived there while it lasted.'],
q:'Where did the water go, and did anything live there before it vanished?',r:'Orbiters, landers and rovers have studied it for decades. It is the most explored planet after Earth, which makes its remaining gaps all the more specific.'},
{k:'jupiter',n:'Jupiter',t:'The planet with the ocean moons',c:'#c9a37b',c2:'#f2e0c8',gl:'rgba(210,170,130,.3)',u:5.2,s:2.6,d:'5.2 AU',y:'11.9 years',m:'More than 90',v:'Several flybys, 2 orbiters',
a:['Jupiter is larger than all the other planets combined. Its moons are small worlds of their own, and Europa is thought to hide a deep ocean of liquid water under its ice.','That ocean makes Europa one of the most interesting places in the Solar System to look for conditions that life could use.'],
q:'Is there an ocean under the ice of Europa, and what is in it?',r:'Galileo orbited from 1995 to 2003. Juno is orbiting now. Europa Clipper and the European JUICE mission are on their way to study the moons.'},
{k:'saturn',n:'Saturn',t:'Rings, and a leaking moon',c:'#d9c28a',c2:'#f6ebc4',gl:'rgba(230,210,150,.28)',u:9.5,s:2.2,d:'9.5 AU',y:'29.5 years',m:'More than 200',v:'3 flybys, 1 orbiter',
a:['Saturn is best known for its rings, but one of its moons may matter more. Enceladus shoots plumes of water vapour and ice into space from cracks near its south pole.','Cassini flew through those plumes and found salts and organic molecules. Whether that is a sign of anything alive is not known.'],
q:'What is the water leaking from Enceladus really carrying?',r:'Pioneer 11 and the two Voyagers flew past. Cassini orbited from 2004 to 2017. No mission has gone back.'},
{k:'uranus',n:'Uranus',t:'The planet on its side',c:'#7fd0d6',c2:'#d4f6f6',gl:'rgba(120,210,220,.3)',u:19.2,s:1.5,d:'19.2 AU',y:'84 years',m:'More than 25',v:'1 flyby',
a:['Uranus is tipped over by about 98 degrees, so it rolls around the Sun like a ball. Nobody is certain what knocked it over, or why it gives off so little internal heat compared with its neighbours.','Uranus and Neptune are called ice giants, and they are the most common type of planet we find around other stars. We have studied one close up, once.'],
q:'Why do we know so little about a planet that is tipped on its side?',r:'Voyager 2 flew past in January 1986. It is still the only spacecraft to have visited. An orbiter is among the highest priorities proposed for the next decades.'},
{k:'neptune',n:'Neptune',t:'The windiest world',c:'#3f6df2',c2:'#8db0ff',gl:'rgba(63,109,242,.42)',u:30.1,s:1.45,d:'30.1 AU',y:'165 years',m:'About 16',v:'1 flyby',
a:['Neptune has some of the fastest winds measured in the Solar System, on a planet far too cold and distant to be driven by much sunlight. Why it is so violent is unresolved.','Its largest moon, Triton, orbits backwards, which strongly suggests it formed elsewhere, probably in the Kuiper Belt, and was captured. Voyager 2 saw plumes rising from its surface, so something is still active there.'],
q:'Is Triton a captured world, and what is happening beneath its surface?',r:'Voyager 2 flew past on 25 August 1989. No orbiter has ever studied Neptune or Triton.'}];

var Q=[
{w:'Neptune and Triton',q:P[7].q,a:'Triton orbits Neptune backwards, which strongly suggests it was captured. Voyager 2 saw plumes rising from its surface, so something is still active there.',f:'Visits so far: one flyby, in 1989.',l:'neptune'},
{w:'Uranus',q:P[6].q,a:'Uranus spins at about 98 degrees. Nobody is certain what knocked it over, or why it gives off so little internal heat.',f:'Visits so far: one flyby, Voyager 2, in January 1986.',l:'uranus'},
{w:'Venus',q:P[1].q,a:'Venus is close to Earth in size, yet its surface can melt lead. Whether it once held oceans is still debated, and the answer shapes how we judge habitability elsewhere.',f:'Far fewer missions than Mars, because its surface is so hostile.',l:'venus'},
{w:'Ceres',q:'Is there a reservoir of brine under the largest object in the asteroid belt?',a:'Ceres is a dwarf planet that sits between categories in most people\u2019s minds. NASA\u2019s Dawn data points to salty material that may have come from a liquid reservoir below the surface.',f:'Visits so far: one orbiter, Dawn, from 2015 to 2018.'},
{w:'K2-18b',q:'How do we tell a real biosignature from noise in the data?',a:'In 2023 and 2025, one team reported tentative signs of dimethyl sulfide in the atmosphere of K2-18b. Several independent reanalyses of the same James Webb Space Telescope data have not found statistically significant evidence for it.',f:'The honest answer today is that we do not yet know how to tell. That is the question.'}];

/* Sky calendar. Add events here. Date format: YYYY-MM-DD. Tags are used by the filters. */
var EV=[
{d:'2026-11-16',t:'Mars and Jupiter pass about one degree apart',n:'Low in the morning sky, close to the star Regulus.',g:['Mars','Jupiter']},
{d:'2026-11-17',t:'Leonid meteor shower peaks',n:'Peak around 17 to 18 November. Best after midnight, away from city lights.',g:['Meteor showers']},
{d:'2026-11-25',t:'Uranus at opposition',n:'Around 25 to 26 November. Closest and brightest of the year, but still needs binoculars or a telescope.',g:['Uranus','Oppositions']},
{d:'2026-12-13',t:'Geminid meteor shower peaks',n:'Night of 13 to 14 December. One of the strongest showers of the year.',g:['Meteor showers']},
{d:'2026-12-26',t:'The Moon lines up with Jupiter, Regulus and Mars',n:'From 26 to 28 December, in an arc across the sky.',g:['Moon','Mars','Jupiter']},
{d:'2027-01-03',t:'Quadrantid meteor shower peaks',n:'Night of 3 to 4 January. A short, sharp peak.',g:['Meteor showers']},
{d:'2027-02-11',t:'Jupiter at opposition',n:'Visible all night and at its brightest of the year.',g:['Jupiter','Oppositions']},
{d:'2027-02-19',t:'Mars at opposition',n:'The first Mars opposition since January 2025.',g:['Mars','Oppositions']}];

var B=document.body,PG=B.dataset.page,$=function(s){return document.querySelector(s)};
var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
var MON=['January','February','March','April','May','June','July','August','September','October','November','December'];
function planet(k){for(var i=0;i<P.length;i++)if(P[i].k===k)return i;return 0}
function dot(p){return'--c:'+p.c+';--c2:'+p.c2+';--gl:'+p.gl}
function evHTML(list){
 var now=new Date(),td=Date.UTC(now.getFullYear(),now.getMonth(),now.getDate()),h='',f=1;
 list.forEach(function(e){var p=e.d.split('-'),n=Math.round((Date.UTC(+p[0],p[1]-1,+p[2])-td)/864e5);if(n<0)return;
  h+='<div class="ev'+(f?' nx':'')+'"><time>'+(+p[2])+' '+MON[p[1]-1]+' '+p[0]+'</time><div><h3>'+e.t+'</h3><p>'+e.n+'</p></div><span class="in">'+(f?'Next, ':'')+(n?n===1?'tomorrow':'in '+n+' days':'today')+'</span></div>';f=0});
 return h||'<p class="note">Nothing upcoming for this filter. More events are being added.</p>'}

/* Chrome: nav, footer, progress bar, starfield */
(function(){
 var nav=[['index.html','Home'],['solar-system.html','Solar System'],['index.html#worlds','Worlds'],['calendar.html','Sky Calendar'],['index.html#research','Research'],['index.html#contact','Contact']],h='';
 nav.forEach(function(n){h+='<a href="'+n[0]+'"'+((PG==='system'&&n[1]==='Solar System')||(PG==='cal'&&n[1]==='Sky Calendar')||(PG==='home'&&n[1]==='Home')?' class="on"':'')+'>'+n[1]+'</a>'});
 B.insertAdjacentHTML('afterbegin','<div id="bar"></div><canvas id="stars" aria-hidden="true"></canvas><header><a class="mark" href="index.html">DSRO</a><nav>'+h+'</nav></header>');
 if(PG!=='system')B.insertAdjacentHTML('beforeend','<footer><span>Dumper Space Research Organisation</span><span>An independent research organisation.</span></footer>');
 var c=$('#stars'),x=c.getContext('2d'),W,H,S=[],t=0,sy=0;
 function size(){W=c.width=innerWidth;H=c.height=innerHeight;S=[];for(var i=0,n=Math.round(W*H/5000);i<n;i++)S.push({x:Math.random()*W,y:Math.random()*H,z:Math.random()*.9+.1,s:Math.random()*6.28})}
 function draw(){x.clearRect(0,0,W,H);for(var i=0;i<S.length;i++){var s=S[i],y=((s.y-sy*s.z*.35)%H+H)%H;
  x.fillStyle='rgba(220,230,255,'+(.2+.55*s.z*(.65+.35*Math.sin(t+s.s)))+')';x.beginPath();x.arc(s.x,y,s.z*1.3,0,6.283);x.fill()}
  t+=.015;if(!still)requestAnimationFrame(draw)}
 addEventListener('resize',function(){size();if(still)draw()});
 addEventListener('scroll',function(){var d=document.documentElement;sy=d.scrollTop;$('#bar').style.width=sy/Math.max(1,d.scrollHeight-d.clientHeight)*100+'%';if(still)draw()},{passive:true});
 size();draw();
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
 window.reveal=function(){document.querySelectorAll('.rv:not(.in)').forEach(function(el){io.observe(el)})};
})();

/* HOME */
if(PG==='home'){
 $('#days').textContent=Math.floor((Date.now()-Date.UTC(1989,7,25))/864e5).toLocaleString('en-US');
 var qh='';Q.forEach(function(q){qh+='<details><summary><span class="w">'+q.w+'</span><span class="q">'+q.q+'</span><span class="plus"></span></summary><div class="body"><div><p>'+q.a+'</p><p class="fact">'+q.f+(q.l?' <a href="planet.html?p='+q.l+'">Read the full page.</a>':'')+'</p></div></div></details>'});
 $('#qs').innerHTML=qh;
 var wh='';P.forEach(function(p){wh+='<a href="planet.html?p='+p.k+'" class="rv"><span class="dot" style="'+dot(p)+'"></span><h3>'+p.n+'</h3><em>'+p.t+'</em><p>'+p.q+'</p></a>'});
 $('#wl').innerHTML=wh;
 $('#nx').innerHTML=evHTML(EV.slice(0,3));
 var hp=$('#hp'),ht=$('#ht');
 if(!still)addEventListener('scroll',function(){var s=scrollY;if(s<innerHeight*1.2){hp.style.transform='translateY('+s*.25+'px) scale('+(1+s/2400)+')';ht.style.opacity=Math.max(0,1-s/(innerHeight*.7));ht.style.transform='translateY('+s*-.12+'px)'}},{passive:true});
}
/* PLANET */
if(PG==='planet'){
 var i=planet(new URLSearchParams(location.search).get('p')),p=P[i],pv=P[(i+7)%8],nx=P[(i+1)%8];
 document.title=p.n+' | Dumper Space Research Organisation';
 var o=$('#orb');o.style.cssText=dot(p);
 var im=new Image();im.alt=p.n;im.onload=function(){o.appendChild(im);$('#cr').textContent='Image: NASA'};im.src='images/'+p.k+'.jpg';
 $('#pn').textContent=p.n;$('#pt').textContent=p.t;
 $('#st').innerHTML=[['Distance from Sun',p.d],['One year',p.y],['Moons',p.m],['Spacecraft visits',p.v]].map(function(r){return'<div><b>'+r[1]+'</b><span>'+r[0]+'</span></div>'}).join('');
 $('#ab').innerHTML=p.a.map(function(t){return'<p>'+t+'</p>'}).join('');
 $('#pq').textContent=p.q;$('#pr').textContent=p.r;
 $('#nav').innerHTML='<a href="planet.html?p='+pv.k+'">\u2190 '+pv.n+'</a><a href="planet.html?p='+nx.k+'">'+nx.n+' \u2192</a>';
}
/* CALENDAR */
if(PG==='cal'){
 var tags=['All'];EV.forEach(function(e){e.g.forEach(function(g){if(tags.indexOf(g)<0)tags.push(g)})});
 var ch=$('#ch'),cl=$('#cl');
 function show(g){cl.innerHTML=evHTML(g==='All'?EV:EV.filter(function(e){return e.g.indexOf(g)>-1}));
  [].forEach.call(ch.children,function(b){b.classList.toggle('on',b.textContent===g)})}
 tags.forEach(function(g){var b=document.createElement('button');b.textContent=g;b.onclick=function(){show(g)};ch.appendChild(b)});
 show('All');
}
/* 3D SOLAR SYSTEM (not to scale) */
if(PG==='system'){
 var V=$('#view'),R=new THREE.WebGLRenderer({antialias:true,alpha:true}),sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(48,1,.1,1000);
 R.setPixelRatio(Math.min(devicePixelRatio,2));V.appendChild(R.domElement);
 var sun=new THREE.Mesh(new THREE.SphereGeometry(3.4,48,48),new THREE.MeshBasicMaterial({color:0xffd9a0}));sc.add(sun);
 sc.add(new THREE.PointLight(0xfff2dd,1.6,0,0),new THREE.AmbientLight(0x6070a0,.45));
 var M=[],L=[];
 P.forEach(function(p,j){var r=9+j*6.2,m=new THREE.Mesh(new THREE.SphereGeometry(.55+p.s*.32,32,32),new THREE.MeshStandardMaterial({color:p.c,roughness:.9}));
  var ring=new THREE.Mesh(new THREE.RingGeometry(r-.04,r+.04,160),new THREE.MeshBasicMaterial({color:0x3a4a7a,transparent:true,opacity:.45,side:2}));ring.rotation.x=-Math.PI/2;sc.add(ring,m);
  if(p.k==='saturn'){var sr=new THREE.Mesh(new THREE.RingGeometry(1.6,2.6,64),new THREE.MeshBasicMaterial({color:0xd9c28a,transparent:true,opacity:.6,side:2}));sr.rotation.x=-1.25;m.add(sr)}
  var a=document.createElement('a');a.className='lbl';a.href='planet.html?p='+p.k;a.textContent=p.n;document.body.appendChild(a);
  M.push({m:m,r:r,sp:.5/Math.pow(j+1,1.15),o:j*1.1});L.push(a)});
 var th=.6,ph=1.05,di=62,tt=0,dr=0,lx,ly;
 function fit(){R.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}
 addEventListener('resize',fit);fit();
 V.onpointerdown=function(e){dr=1;lx=e.clientX;ly=e.clientY};
 addEventListener('pointerup',function(){dr=0});
 addEventListener('pointermove',function(e){if(!dr)return;th-=(e.clientX-lx)*.006;ph=Math.max(.15,Math.min(2.2,ph-(e.clientY-ly)*.006));lx=e.clientX;ly=e.clientY});
 V.addEventListener('wheel',function(e){di=Math.max(18,Math.min(120,di+e.deltaY*.04));e.preventDefault()},{passive:false});
 $('#zi').onclick=function(){di=Math.max(18,di-8)};$('#zo').onclick=function(){di=Math.min(120,di+8)};
 (function loop(){
  tt+=still?0:.01;if(!dr&&!still)th+=.0008;
  cam.position.set(di*Math.sin(ph)*Math.sin(th),di*Math.cos(ph),di*Math.sin(ph)*Math.cos(th));cam.lookAt(0,0,0);
  M.forEach(function(o,j){var a=o.o+tt*o.sp*6;o.m.position.set(Math.cos(a)*o.r,0,Math.sin(a)*o.r);o.m.rotation.y+=.01;
   var v=o.m.position.clone().project(cam),l=L[j];l.style.transform='translate('+((v.x*.5+.5)*innerWidth+10)+'px,'+((-v.y*.5+.5)*innerHeight-10)+'px)';l.style.display=v.z>1?'none':'block'});
  R.render(sc,cam);requestAnimationFrame(loop)})();
}
if(window.reveal)reveal();
