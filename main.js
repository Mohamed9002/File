/*var count=-1;
while(count<=1000)
{document.getElementById('h5').innerHTML+='cert'+ count +'<br>';
  ++count
} */
/*
var count=1;
while(count<=1000){document.getElementById('h5').innerHTML +='dodo' + count +"<br>";
++count;}

for(var count=1; count<=10; ++count)
{
  document.getElementById('hhh').innerHTML+='pop' +count +'<br>'
  ++count
}*/
/*
var h5='welcome'
var hh=document.getElementById(h5);
  
  'hane', 
  'alu', 
  'mona', 
'noha';
  )
  console.log(Free)
  
var frend  =['Hassan', 'hoba', 'noma', 'reda']
document.getElementById('h5').innerHTML='well';

conif sole.log(frend);
document.style.h5.backgroundColor='red';



function text ();{ alert('alex')} 
text();
function pure(){

return 
'<h2> Welcome you master</h2>'
var fuct=document.getElementById(pure());
---------------------------------------------

ال/* clas و ال objects*
---------------------------------------------
*/
/*هكذا تم صنع كلاس يجب أن يحتوي ال class علي constructor{بداخله الأوامر كا alert مثلا } 
ثم استدعاء عن طريق ال object
تكتب كالتالي 
خارج class كالتالي 
var App_broject هو اسم الفار = new معني new انشاء او استدعي واحدة جديده App اسم الكلاس الذي تريد استدعائه (); ملحوظة يجب أن يبدأ اسم ال class بحرف كبير كابيتال 
*/
/*---------------------------------------------
مثال 
---------------------------------------------


alert('weeee');
class Ape {
   constructor(){
     alert('welcomemohamed')
     
   } 
  
}
var App_broject= new Ape();
*/
/*--------------------------------------------
                     event
                     ال event هيا المسؤولة عن اغلب تفاعل الموقع ك  معناها عند الضغط onClick و onload
                     ولها ثلاث طرق لكتابتها 
----------------------------------------------
1-
الأيدي Pasكمثال 
ثم.onclick ثم =function ثم اسم ال function() ثم {} بداخلها الأوامر المراد تنفيذها مثل alert
وهاذا نموزج

---------------------------------------------
              نموذج عملي            
---------------------------------------------
Pas.onclick=function ali (){alert('welcomemohamed');}
--------------------------------------------
                        الطريقة الثانية 
--------------------------------------------
 نكتب document.getElementById('id'.addEventListener(الوظيفة, ()=>{الأوامر كمثال alert('WELCOMEMOHAMED');}) ;
 ملحوظة اخر ثلاث اقوس هنا الأول لإغلاق ال alert
 الثاني لاغلاق ال القوس المعقوف
 القوس الا سر لاغلاق قوس الأوامر الخاص ب (الأوامر, (=>))

---------------------------------------------
                  نموذج عملي          
---------------------------------------------
document.getElementById('Pas').addEventListener('click', ()=>{alert('ali');});;


/*------------------------------------------
                      العنصر 2من event
                      وهو معناه عند انتهاء تحميل الموقع أو الرابط 
                             ويكتب كالتي 
onload=()=>{الأوامر المراد تنفيذها كا 

alert ('welcomemohamed');}

---------------------------------------------
طريقة تخزين البيانات عبر الذاكرة المحلية 
              localStorage
---------------------------------------------
لتخزين امر كالتالي 
   var trav =23
   localStorage.getItem(اسم ال var وهيا ال key,قيمة الفر وهي اسمه أيضا اي value);
   هذه أول طريقة 
                        ويتم استدعاء ها هكذا 
alert (localStorage.getItem(اسم الفار trav));
لاكن يجب تخزينها اولا عن طريق 
localStorage.setItem('key',value)
هذه الطريقة الأولي

---------------------------------------------
                     مثال عملي
---------------------------------------------
var travil = 1200;
localStorage.setItem('travil',travil)
localStorage.setItem(travil,travil);
alert(localStorage.getItem(travil));
---------------------------------------------
               removeItem لحذف الأوامر 
  -------------------------------------------
                    مثال عملي 
---------------------------------------------
var travil = 120;
localStorage.setItem(travil, travil);
localStorage.removeItem("travil",travil)
alert(localStorage.getItem(travil));
---------------------------------------------
                    مسئلة لتوضيح الشرح 
---------------------------------------------
var travil =prompt('ادخل اسمك ');
localStorage.setItem('log',travil),
localStorage.getItem('log', travil), 
document.getElementById('pop').innerHTML=travil;

var travil = prompt('اسمك');
sessionStorage.setItem('vat',travil);
document.getElementById('pop').innerHTML=travil;

button.onclick=function ali(travil){
  
  sessionstorage.removeItem(travil);
}
start.onclick=()=>{
     alert('welcomemohamed ');
   }
   
---------------------------------------------
            هو المسؤول عن البروتوكول location
---------------------------------------------
 
 --------------------------------------------
 لعرض نوع االبروتكول ان كان http او https او غيره
 نكتب 
 location.protocol داخل alert بداخل console جوجل مطور يجب أن يكون داخل وضع المطورين ليعمل 
 --------------------------------------------
                location.href
              alert داخل console مطورين جوجل 
              وهي لعرض الرابط  تكتب داخل 
 --------------------------------------------
                 location.host 
 تكتب داخل alert داخل console بداخل وضع مطورين جوجل كروم 
 --------------------------------------------
                  location.hostname
                  أيضا لعرض الدومين وكتبتها مثل
                  location.host تماما 
 --------------------------------------------
 
                location.pathname
   لعرض مكان تخزين السرفر في اي موقع ويكتب داخل وضع المطورين أيضا مثل جميع ال location ولاكن جميع الل location تكتب داخل ال alert بدون علامة تقويس"" 
 --------------------------------------------
                  location.reload  
   لاعادة تحميل الصفحة مثل زر إعادة التحميل الذي نشاهده في متصفح جوجل كروم 
   الطريقة كالتالي
 --------------------------------------------
var reload =document.getElementById('reload');
reload.onclick=()=>{
  
  location.reload();} 
  ------------------------------------------
                location.assign
                لتحويل المستخدم الي رابط 
                مثال
---------------------------------------------

onload=()=>{
  location.assign =(https://www.google.com/);

  
} لاكن سوف يخسر المستخدم جميع البيانات الذي ادخلها في الصفحه السابقة 
---------------------------------------------
.          location. replace 
وهي لتحويل المستخدم الي رابط مثل location.assin تمام 

 لاكن سوف يخسر المستخدم جميع البيانات الذي ادخلها في الصفحه السابقة 
 --------------------------------------------
 
.                 document.title
لتعذغيير.titrle ال html عبر جافا سكربت 
تكتب كالتالي
.      var travil = document.title;
document.title='الاسم '
 
 --------------------------------------------
              ondblclick
              مثل on clik تماما ولاكن يجب أن تضغط مرتين ضغط مزدوج
 -------------------------------------------
                 on.copy عند نسخ المستخدم لنص معين يعرض الأمر الذي تم تحديده ك alert 
                 تكتبه بداخل الأمر بصفحة ال html
 لاكن يجب ان يتم انشاء function اولا 
 --------------------------------------------
              مثال 
 
 في صفحة html
 <p oncopy='copy()'>welcome </p>
 function copy() {
   
   alert('تم النسخ')
   
    }
---------------------------------------------

key.onclick=function(){
  
  location.replace('Core.html');
  
}
---------------------------------------------
تعديل رساله الخطأ الذي تظهر عبر required في ال html 
اولا نحدد الأيدي الخاص بغنصر ال html
ثم نخزنهعبر 
document.getElementById 
ثم الأيدي.setCustomValidity('رسابة الخطأ ')
ملحوظة يجب أن يكون ال input ال button ضمن from
---------------------------------------------
.              مسئلة عمليه 

var input=document.getElementById('inputemail');
inputemail.setCustomValidity('خطا')
---------------------------------------------
*//*
inputemail.setCustomValidity('يرجي ملئ هاذا  الحقل أيضا ووضع علامة @');




*//*
-------------------------------------------
               bota()
               هو نوع من ال metdيستخدم لتشفير البيانات يكتب كالتالي 


وعنصر 
atob يستخدم في فك التشفير
-------------------------------------------

var but ='coder Shiyar ';
var encode_text = bota(but);
alert(encode_text);
-------------------------------------------
.          Window سلسلة 
---------------------------------------------
اول واحد
window.open('الرابط')
لتحويل الروابط مثل onreplace تماما ولكنه ب
---------------------------------------------
.                مثال عملي
---------------------------------------------

key.onclick = function() {window.open('https://www.google.com/')
}
inputpass.setCustomValidity('ادخل الباسورد ')
---------------------------------------------
.             window.top.close();
يتم استخدامها بجانب onreplac
.                window.open
لمنع فتحهم في نافذة جديده وتستخدم عن طريق وضعها قبل العنصر 
---------------------------------------------
.                 window.stop
وتستخدم لإيقاف تحميل الموقع كمثال إيقافه قبل انتهاء التحميل 
---------------------------------------------
.               window.print(تسيبها فاضيه );
تستخدم للفتح الطابعة الخاصة بالهاتف وطباعة المستندات ;
---------------------------------------------
.                 مثال عملي
---------------------------------------------
var input = document.getElementById('input');
input.onclick = function(){
  
  window.print();} 

---------------------------------------------
                window.prompt('الرساله ');
                تستخدم لعرض input منبثق مثل alert ولاكن نصي تمكن المستخدم من إدخال بيانات 
---------------------------------------------
                مثال عملي
---------------------------------------------
input.onclick = function(){
  var Username = window.prompt('ادخل الايميل ');
  var Password = window.prompt('ادخل الباسورد ')
  
  if (Username==='admin'&& Password==='root') { alert('تم تسجيل الدخول بنجاح ')
    
  } else {
    alert('تحقق من البيانات ')
    
  }
} 
---------------------------------------------
          window.confirm
          تستعمل لعرض خيارين إلغاء وموافق كمثال هل أنت موافق عن مغادرة الموقع 
---------------------------------------------
                    مثال عملي
---------------------------------------------
input.onclick = function() {

  var confirm1 = window.confirm('هل انت متأكد من انك تريد مغادرة الموقع ');

  if (confirm1 == true) {

    window.open('https://www.google.com/');

  } else {
    alert('no')
  }

}
---------------------------------------------
            settimeoutيستخدم العنصر لتنفيذ أوامر بعد وقت معين يكتب كالتالي تصنع function وبها الأوامر سما تستدعيها ب 
            settimeout(اسم ال function, الوقت الثانية تستوي ١٠٠٠ مثل سكيتشوير )
لاكنه يكرر الأمر لمرة واحدة 
---------------------------------------------
                   مثال عملي.  
---------------------------------------------
function al() {
  alert('test')

}
setTimeout(al, 3000);
---------------------------------------------
            setInterval 
            مثل setTimeouتماما لاكنه ينفذ الأوامر باستمرار
---------------------------------------------


clearIntravil
---------------------------------------------
                سلسلة histore
                history.back('')
                للذهاب للصفحة السابقة
---------------------------------------------
          history.forward();

---------------------------------------------

                  اكواد عرض التاريخ 
                  

---------------------------------------------
var date = new Date();
var time = document.getElementById("time");
time.innerHTML = date.getDay().toLocaleString('ar-IQ');

// Method	Description
// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.

// getUTCDate()	Same as getDate(), but returns the UTC date
// getUTCDay()	Same as getDay(), but returns the UTC day
// getUTCFullYear()	Same as getFullYear(), but returns the UTC year
// getUTCHours()	Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	Same as getMonth(), but returns the UTC month
// getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds
---------------------------------------------
            screen.window
            تستخدم لمعرفة غرض الشاشه 

              مثال عملي
---------------------------------------------
alert(screen.width);
screen.width
---------------------------------------------
          screen.height
          لقياس طول الشاشة 
          
---------------------------------------------
                مثال عملي
---------------------------------------------
alert(screen.height);
screen.width
---------------------------------------------
            parseInt لتحويل قيمة نصية string
            الي قيمة رقمية number
---------------------------------------------
                  مثال عملي
---------------------------------------------
var micro = 10;
ali = '10 '
alert(micro + parseInt(ali))

---------------------------------------------
            json من أهم أوامر جافا سكربت 
            ويستخدم لاسال البيانات عبر المتصفح والخدم الخاص لموقعك 
            الأمر كالتالي 
---------------------------------------------

                مثال عملي 
                
---------------------------------------------
var micro = 10;
ali = '10 '
alert(micro + parseInt(ali));
ملحوظة يجب استخدام ال ""فقط 
ولا يمكن استخدام '' عبر الأمر json
---------------------------------------------

---------------------------------------------

key.onclick = function() {
  window.top.close();
  window.open('https://www.google.com/')
}
*/

/*input.onclick = function () {
  
  var confirm1 = window.confirm('هل انت متأكد من انك تريد مغادرة الموقع ');
  
  if (confirm1==true) {

window.open('https://www.google.com/');
/*
  } else {
    alert('no')
  }}
function al(){
  alert('test') 
  
}
etInterval(al,3000);
back.onclick=function (){
  alert('welcomemohamed ')
  
}

alert
stop.onclick=function(){
  
  history.forward();
  
}


alert('screen.width');
input.onclick = function() {

    var confirm1 = window.confirm('هل انت متأكد من انك تريد مغادرة الموقع ');

    if (confirm1 == true) {

      window.open('https://www.google.com/');
      
        } else { alert('no')
*/
/*
var micro =10;
    ali ='10 '
    alert(micro+ parseInt(ali));
    
    var json ={ "noha":"codyer Shiyar", "solA":"android "} 
    alert(json.noha);
    
    */
    
    
key.onclick = function(){
  
  var confirm1=window.confirm('هل انت متأكد من انك تريد مغادرة الموقع ');
if (confirm1==true) {
location.replace('https://www.google.com/'); 
} else {
  alert('نشكرك على عدم مغادرة الموقع ')
}
  
  
} 
