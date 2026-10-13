(function(){
var page=document.body.dataset.page||'';
var links=[['index.html','الرئيسية','home'],['about.html','مقرراتي الدراسية','courses'],['exam.html','الجدول الدراسي','schedule'],['library.html','المكتبة','library'],['support.html','الدعم الأكاديمي','support']];
var nav=links.map(function(l){return '<li class="nav-item"><a class="nav-link'+(l[2]===page?' active':'')+'" href="'+l[0]+'">'+l[1]+'</a></li>'}).join('');
var h=document.getElementById('site-header');
if(h)h.innerHTML='<nav class="site-nav navbar navbar-expand-lg"><div class="container"><a class="brand" href="index.html">المنبر</a><button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"><i class="bi bi-list text-white fs-2"></i></button><div class="collapse navbar-collapse" id="mainNav"><ul class="navbar-nav me-3">'+nav+'</ul><div class="user-box me-auto"><i class="bi bi-bell-fill"></i><img class="avatar" src="./profile.png" alt=""><i class="bi bi-chevron-down"></i></div></div></div></nav>';
var f=document.getElementById('site-footer');
if(f)f.innerHTML='<footer class="site-footer"><div class="container"><div class="row align-items-center gy-3"><div class="col-md-4 text-md-end"><a class="brand" href="index.html">المنبر</a></div><div class="col-md-5"><div class="row"><div class="col-6"><a href="index.html">الرئيسية</a><br><a href="library.html">المكتبة</a></div><div class="col-6"><a href="about.html">مقرراتي الدراسية</a><br><a href="support.html">الدعم الأكاديمي</a></div></div></div><div class="col-md-3"><div class="social justify-content-md-start"><a href="#"><i class="bi bi-telegram"></i></a><a href="#"><i class="bi bi-youtube"></i></a><a href="#"><i class="bi bi-instagram"></i></a><a href="#"><i class="bi bi-facebook"></i></a></div></div></div><small>جميع الحقوق محفوظة للأكاديمية المنبر 2024</small></div></footer>';
var s=document.getElementById('side');
if(s){
var head='<span class="chip">التفسير</span><span class="sub">التعريف بعلم التفسير</span>';
if(s.dataset.type==='journey'){
var st=[['المحاضرة الأولى','التعريف بعلم التفسير',1],['الاختبار الاسبوعي الاول','على المحاضرة الاولى',1,1],['المحاضرة الثانية','نشأة علم التفسير',1],['الاختبار الاسبوعي الثاني','على المحاضرة الثانية',0],['المحاضرة الثالثة','نشأة علم التفسير',0],['الاختبار الاسبوعي الثالث','على المحاضرة الثالثة',0],['المحاضرة الرابعة','نشأة علم التفسير',0],['الاختبار الاسبوعي الرابع','على المحاضرة الرابعة',0],['الاختبار النهائي','على جميع ما تم دراسته سابقا',0]];
s.innerHTML=head+'<h6>رحلتك التعليمية</h6>'+st.map(function(x){return '<div class="step'+(x[3]?' active':'')+'"><i class="bi bi-check-circle-fill '+(x[2]?'done':'todo')+'"></i><div><b>'+x[0]+'</b><span>'+x[1]+'</span></div></div>'}).join('');
}else{
var m=[['المنهج الدراسي','#'],['درجات المقررات','#'],['مدرسو المقرر','instructors.html'],['معلومات عن المنهج','about.html']];
s.innerHTML=head+'<div class="menu">'+m.map(function(x){return '<a href="'+x[1]+'" class="'+(s.dataset.active===x[1]?'active':'')+'">'+x[0]+'</a>'}).join('')+'</div>';
}}
var stars=document.querySelectorAll('.stars i');
stars.forEach(function(el,i){el.addEventListener('click',function(){stars.forEach(function(o,j){o.classList.toggle('on',j<=i)})})});
document.querySelectorAll('form').forEach(function(fm){fm.addEventListener('submit',function(e){e.preventDefault();fm.reset();stars.forEach(function(o){o.classList.remove('on')});var b=fm.querySelector('button[type=submit]');if(b){var t=b.textContent;b.textContent='تم الإرسال';setTimeout(function(){b.textContent=t},2000)}})});
var ex=document.getElementById('startExam');
if(ex)ex.addEventListener('click',function(){var r=document.getElementById('attempts');var n=parseInt(r.textContent,10);if(n>0)r.textContent=n-1;if(n-1<=0){ex.disabled=true}});
})();
