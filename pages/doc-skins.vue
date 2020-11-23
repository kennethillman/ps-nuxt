<template>
  <div>


    <div class="ps-hero ps-docs">
       <div class="hero-body">
          <h1 class="hero-header doc-header"><i>Purspot</i> Skins 1.0</h1>
          <div class="doc-row">
            <div class="doc-col -text">
              Skins, med några enkla steg kan nu Purspots kunder få en egen profile. 
              Lösningen håller nere antal moment som krävs för att göra ett skin så det blir enkel och smidigt men det medför också att vi inte kan göra några undantag. 
              Det är endast detta nedan som går att profilera i ett skin i version 1.0.  
            </div>
   
            <div class="doc-col -usp">
                <div class="ps-usp">
                   <div class="ups-body">
                      <ul>
                         <li>
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                               Proffsig profilering
                            </div>
                         </li>
                         <li>
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                               Smidig implementering
                            </div>
                         </li>
          
                      </ul>
                   </div>
                </div>
            </div>
  
          </div>
         
       </div>
    </div>


<!-- HOW -->


     <div class="ps-hero ps-docs">
       <div class="hero-body">
          <h1 class="hero-header doc-header -small">Hur gör man ett skin?</h1>
          <div class="doc-row -center ">
            <div class="doc-col -text ">
              För att göra ett skins krävs några få moment. I Purspot sales "Redigera handlare" lägger man till en stilren logo, ev. en bakgrundsbild, samt val av mode och tre färger. 
              Längst ned på sidan "Redigera handlare" finns en text box där ett JSON object (se nedan) skall klistras in, detta object styr Skinnet. Om man inte klistar in ett JSON object för handlaren automatisk Purspots färger. 
            </div>
          </div>
          <div class="doc-row">
  
            <div class="doc-col -code"><pre>{
   "bgImageOverlay":null,
   "bgImageUrl": null,
   "styling":{
      "skin":{
         "mode":"light",
         "vars":{
            "colors":{
               "skin":"#ffffff",
               "link":"#99bd48",
               "btnText":"#ffffff"
            }
         }
      }
   }
}</pre></div>
            <div class="doc-col -usp">
                <div class="ps-usp">
                   <div class="ups-body">
                      <ul>
                         <li>
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                              Logotyp 
                            </div>
                         </li>
                       <!--   <li><br></li> -->
                          <li>
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                              Bakgrundsbild 
                            </div>
                         </li>
                          <li>
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                              Mode 
                            </div>
                         </li>
                          <li>
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                              Färger 
                            </div>
                         </li>
                         
                         
                         
                      </ul>
                   </div>
                </div>
            </div>
          </div>
         
       </div>
    </div>


<!-- LOGOS -->

    <div class="ps-hero ps-docs">
       <div class="hero-body">
          <h1 class="hero-header doc-header -small">Logotyper</h1>
          <div class="doc-row  ">
            <div class="doc-col -text ">
              Det är alltid knepigt när man hanterar många olika grafiska profiler i en och samma applikation, precis som Purspot gör.
              De kan snabbt bli väldigt spretigt och rörigt, det gäller att eleminera allt som går för att hålla allt så stilrent och enkelt som möjligt.
              Detta är stommen i ett mycket proffisigare utseende generallt i hela Purspots applikation.  <br><br>
            </div>
          </div>
          <div class="doc-row">
            <div class="doc-col -text">
              <div class="-logos">
                <figure><img src="~/assets/logos/bkb.png"></figure>
                <figure class="-olearys"><img src="~/assets/logos/olearys.png"></figure>
                <figure><img src="~/assets/logos/ikki.jpg"></figure>
              </div>
            </div>
   
            <div class="doc-col -usp">
                <div class="ps-usp">
                   <div class="ups-body">
                      <ul>
                        <li>
                            <div class="text -text-green">
                              JA
                            </div>
                         </li>
                         <li class="-text-green">
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                              Stilren
                            </div>
                         </li>
                         <li class="-text-green">
                            <figure>
                               <svg-icon name="checkbox" />
                            </figure>
                            <div class="text">
                              Enkel
                            </div>
                         </li>


                         
                      </ul>
                   </div>
                </div>
            </div>
  
          </div>

          <div class="doc-row">
            <div class="doc-col -text">
              <div class="-logos">
                <figure><img src="https://purspotdev.blob.core.windows.net/files/0ea08255-02ea-4f6c-85d0-09536bb70ec9"></figure>
                <figure class="-olearys"><img src="https://purspotdev.blob.core.windows.net/files/0ba6b956-be47-44cd-8755-de908b40439a"></figure>
                <figure><img src="https://purspotdev.blob.core.windows.net/files/8aa61213-6f5c-4e5a-8e1b-3066d884736a"></figure>
              </div>
            </div>
   
            <div class="doc-col -usp">
                <div class="ps-usp">
                   <div class="ups-body">
                      <ul>
                    

                         <li>
                            <div class="text -text-red">
                              <br>NEJ
                            </div>
                         </li>
                         <li class="-text-red">
                            <figure>
                               <svg-icon name="cross" class="-fill-red" />
                            </figure>
                            <div class="text">
                              Ingen extra text eller info <span>T.ex. adress eller plats.</span>
                            </div>
                         </li>
                         <li class="-text-red">
                            <figure>
                               <svg-icon name="cross" class="-fill-red" />
                            </figure>
                            <div class="text ">
                              Ingen bild eller extra grafik <span>T.ex. foto på produkt eller mat</span>
                            </div>
                         </li>
                         
                      </ul>
                   </div>
                </div>
            </div>
  
          </div>
         
       </div>
    </div>






<!-- MODE -->

 
     <div class="ps-hero ps-docs">
       <div class="hero-body">
          <h1 class="hero-header doc-header -small">Modes <span>(default, dark eller light)</span></h1>


          <!-- Default -->
          <div class="doc-row">

            <div class=" -mode">
              Modes sätetr basen i skinnet, text färg och detaljer i header,  ljust eller mörk.
               <b>OBS!</b> -> All text i vita boxar t.ex. produkter, varukorg och kvitto mm kan ej styras via skins de får alltid alltid vit bakgrund med svart text.<br><br>
              <h2>default</h2> En ljus Purspot variant där detaljerna är purspot gröna, texten svart och bakgrunden vit, denna får alla handlare utan "Skin". <br><br>
             
                <br><br>
              <div class="doc-body -bg-skin-start">

                <div class="ps-header ">
                   <div class="ps-body">
                      <figure class="ps-logo">
                         <a href="#">
                            <svg-icon name="logo" />
                        </a>
                      </figure>
                      <div class="ps-header-steps">
                         <div class="ps-transition">
                            <div class="box-steps ">
                               <div class="step -active">
                                  <figure><span>Plats </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Varor </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Betala </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Kvitto </span></figure>
                                  <div></div>
                               </div>
                            </div>
                            <div class="ps-text-header">
                               <h2 class="header">Din varukorg</h2>
                            </div>
                         </div>
                      </div>
                      <div class="ps-menu-toggle">
                         <div class="burger"><span></span> <span></span> <span></span></div>
                      </div>
 
                   </div>
                </div>

                <div class="ps-box -info -receipte">
                  <div class="ps-the-box ps-the-box-text">
                      Detta är lite text och en <a href="#">länk</a><br><br>
                      <a href="" class="ps-btn">Knapp</a>
                  </div>
                </div>



      
              </div>

            </div>
  
          </div>

          <!-- Dark -->
          <div class="doc-row">

            <div class=" -mode ">
              <br><br><h2>dark</h2> Vita detaljer, vit text, svart bakgrund. Skall användas på mörka profiler. <br>
           
                <br>
              <div class="doc-body -mode-dark">

                <div class="ps-header ">
                   <div class="ps-body">
                      <figure class="ps-logo">
                         <a href="#">
                            <svg-icon name="logo-black" />
                        </a>
                      </figure>
                      <div class="ps-header-steps">
                         <div class="ps-transition">
                            <div class="box-steps ">
                               <div class="step -active">
                                  <figure><span>Plats </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Varor </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Betala </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Kvitto </span></figure>
                                  <div></div>
                               </div>
                            </div>
                            <div class="ps-text-header">
                               <h2 class="header">Din varukorg</h2>
                            </div>
                         </div>
                      </div>
                      <div class="ps-menu-toggle">
                         <div class="burger"><span></span> <span></span> <span></span></div>
                      </div>
 
                   </div>
                </div>

                <div class="ps-box -info -receipte">
                  <div class="ps-the-box ps-the-box-text">
                      Detta är lite text och en <a href="#">länk</a><br><br>
                      <a href="" class="ps-btn">Knapp</a>
                  </div>
                </div>



      
              </div>

            </div>
  
          </div>

          <!-- Light -->
          <div class="doc-row">

            <div class=" -mode ">
              <br><br><h2>light</h2> Svarta detaljer, svart text och vit bakgrund. (Skall användas på på ljusa profiler).<br><br>
                <br>
              <div class="doc-body -mode-light">

                <div class="ps-header ">
                   <div class="ps-body">
                      <figure class="ps-logo">
                         <a href="#">
                            <svg-icon name="logo-black" />
                        </a>
                      </figure>
                      <div class="ps-header-steps">
                         <div class="ps-transition">
                            <div class="box-steps ">
                               <div class="step -active">
                                  <figure><span>Plats </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Varor </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Betala </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Kvitto </span></figure>
                                  <div></div>
                               </div>
                            </div>
                            <div class="ps-text-header">
                               <h2 class="header">Din varukorg</h2>
                            </div>
                         </div>
                      </div>
                      <div class="ps-menu-toggle">
                         <div class="burger"><span></span> <span></span> <span></span></div>
                      </div>
 
                   </div>
                </div>

                <div class="ps-box -info -receipte">
                  <div class="ps-the-box ps-the-box-text">
                      Detta är lite text och en <a href="#">länk</a><br><br>
                      <a href="" class="ps-btn">Knapp</a>
                  </div>
                </div>



      
              </div>

            </div>
  
          </div>
         
       </div>
    </div>

 

<!-- COLOR -->

 
     <div class="ps-hero ps-docs">
       <div class="hero-body">
          <h1 class="hero-header doc-header -small">Profil färger</h1>


          <!-- Default -->
          <div class="doc-row">

            <div class=" -mode">
              Färger sätts med omsorg. Det fina är att du bara behöver välja en för backgrund och en för länkar/knappar. <br>
              <b>"skin"</b> är backgrunds färgen <br>
               <b>"link"</b> är länk färg <br>
               <b>"btnText"</b> är färgen i själva knappen, knappen får redan text färg från mode (så denna profilering kommer ej användads ofta) <br><br>
               <b>OBS!</b> -> Länk färgen måste funka både på bakgrundsfärgen och i de vita boxarna, länk färgen får alltså inte vara för ljus, då kommer den inte synas i de vita boxarna.   <br><br>
             

            </div>
  
          </div>

          <!-- Dark -->
          <div class="doc-row">

            <div class=" -mode ">
              <br><br><h2>Turbo</h2> Mörk profil vilket resulterar i mode dark.
              Vita detaljer, vit text, med nya profil färger (colors). <br>

              <div class="-code">
              <pre>
"skin":{
   "mode":"dark",
   "vars":{
      "colors":{
         "skin":"#dd3832",
         "link":"#dd3832",
         "btnText":"#ffffff"
      }
   }
}
              </pre>           
              </div>

           
                <br>
              <div class="doc-body -mode-dark  -skin-turbo">

                <div class="ps-header ">
                   <div class="ps-body">
                      <figure class="ps-logo">
                         <a href="#">
                            <svg-icon name="logo-black" />
                        </a>
                      </figure>
                      <div class="ps-header-steps">
                         <div class="ps-transition">
                            <div class="box-steps ">
                               <div class="step -active">
                                  <figure><span>Plats </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Varor </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Betala </span></figure>
                                  <div></div>
                               </div>
                               <div class="step">
                                  <figure><span>Kvitto </span></figure>
                                  <div></div>
                               </div>
                            </div>
                            <div class="ps-text-header">
                               <h2 class="header">Din varukorg</h2>
                            </div>
                         </div>
                      </div>
                      <div class="ps-menu-toggle">
                         <div class="burger"><span></span> <span></span> <span></span></div>
                      </div>
 
                   </div>
                </div>

                <div class="ps-box -info -receipte">
                  <div class="ps-the-box ps-the-box-text">
                      Detta är lite text och en <a href="#">länk</a><br><br>
                      <a href="" class="ps-btn">Knapp</a>
                  </div>
                </div>



      
              </div>

            </div>
  
          </div>


       </div>
    </div>



<!-- BAKGRUND -->

 
     <div class="ps-hero ps-docs">
       <div class="hero-body">
          <h1 class="hero-header doc-header -small">Bakgrundsbild</h1>


          <!-- Default -->
          <div class="doc-row">

            <div class=" -mode">
              Bilden som väljs kommer att ha sin focus punt som är mitten, vilket betyder att om bilden skalas utefter skärmstorken så är det alltid mitten på bilden som kommer vara i focus. Detta kan inte ändras i Skins 1.0. <br><br>
              <b>"bgImageOverlay"</b> sättes true/false, sättter en platta över bilden enligt mode eller enligt skin färg som gör texten läsbar om det blir problem emd text på bild.  <br>
  
               <b>"bgImageUrl"</b> url till bild, vi kan tyvärr inte ladda upp bild här <br><br>

               <b>TIPS!</b> -> Fina gratis bilder utan royalty finns <a href="https://unsplash.com/" target="_blank">här</a>   <br><br>
             

            </div>
  
          </div>

          <!-- Dark -->
          <div class="doc-row">

              <div class="-code">
              <pre>
// Deafult

"bgImageOverlay":null,
"bgImageUrl": null,


// Ex. bild med overlay

"bgImageOverlay":true,
"bgImageUrl":"https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4608&q=60",
              </pre> 

              </div>

           
                <br>
              

            </div>


            <div class="doc-row">
              <div class="doc-body -mode-light -bg" style="background-image: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4608&q=80')">
                <h1>Bild, light mode,</h1>
              </div>
            </div> <br>

            <div class="doc-row">
              <div class="doc-body -mode-light -bg -overlay" style="background-image: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4608&q=80')">
                <h1>Bild, light mode, overlay</h1>
              </div>
            </div> <br>

            <div class="doc-row">
              <div class="doc-body -mode-dark -bg" style="background-image: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4608&q=80')">
                <h1>Bild, dark mode</h1>
              </div>
            </div> <br>

            <div class="doc-row">
              <div class="doc-body -mode-dark -bg -overlay" style="background-image: url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4608&q=80')">
                <h1>Bild, dark mode, overlay</h1>
              </div>
            </div> 
  
          </div>


       </div>
    </div>



  </div>


</template>

<script>
export default {
  transition: 'custom',
  layout: 'docs',
  head() {
    return {
      title: 'Purspot skins',

      style: [
        { cssText:
          `:root {
            --ps-skin: #ffffff;
            --ps-skin-bg: #ffffff;
            --ps-skin-start-bg: linear-gradient(#fff, #fff 34%, #efefef 90%);
            --ps-link: #99bd48;
            --ps-btn-txt: #ffffff;
          }
          .-mode-dark {
            --ps-skin: #1a1a1a;
            --ps-skin-bg: --ps-skin;
            --ps-link: #99bd48;
            --ps-btn-txt: #ffffff;
          }
          .-skin-olearys {
            --ps-skin: #2b9c86;
            --ps-skin-bg: --ps-skin;
            --ps-link: #fbdb50;
            --ps-btn-txt: #4b4118;
          }
          .-skin-turbo {
            --ps-skin: #17407d;
            --ps-skin-bg: --ps-skin;
            --ps-link: #dd3832;
            --ps-btn-txt: #fff;
          }` ,
          type: 'text/css'}
      ]

    }
  },
  data() {
    return {

    };
  },

      
}
</script>



