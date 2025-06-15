<style>
.tabContent > ul{
  list-style:none;
  margin:0 auto;
  display:flex;
  flex-direction: column;
  line-height:20px;
  gap:5px;
}
.tabContent >ul>li{
  margin:0 auto;
  padding:clamp(6px,12px,24px);
  border-radius:24px;
  border:1px dashed white;
  font:4em;
}

</style>

<br>
# Ishaant's blogs

<div class="tab">
  <button class="tabLinks" id="techB" onclick='openBlog(event, "tech")'>Tech blogs</button>
  <button class="tabLinks" onclick="openBlog(event, 'general')" id="genB" >General blogs</button>
  <button class="tabLinks" onclick="openBlog(event, 'music')" id="musB">Music Blogs</button>
</div>

<div id="tech" class="tabContent" markdown="1"><br>
 
- [DIY ESP32 Weather Dashboard](/esp32Api/)  
- [Python Password Generator](/pyPassGenerator/)  
- [DIY Python Jarvis](/pyJarvis/)    
- [5 Ways to make your website look Cooler](/howToMakeWebsiteBeautiful/)
- [Simplest DIY distortion and overdrive pedal- Skydrive](/skyDrive/)

</div>

<div id="general" class="tabContent" markdown="1">
<br>
 
- [About the creator of this website, Ishaant Nandu](/aboutMe/)  
- [Descriptive writing on Nemināth Temple in Girnar](/neminathTempleDesc/)  
- [Ishaant's old Makecode Arcade games](/oldGames/)  
- [Chess facts that you probably didn't know](/chessFacts/)
</div>

<div id="music" class="tabContent" markdown="1">
<br>

- [Ishaant's compositions](/compositions/)
- [Cool clean Strat tones](/stratTones/)

</div>

<script defer>
function openBlog(evt,blogName) {
  console.log(evt);
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
 
  document.getElementById(blogName).style.display = "block";
}
openBlog('', 'general');


</script>
