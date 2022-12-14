// var args = {
//     format: true,
//     // minTime: '08:00 am',
//     // maxTime: '18:00 pm',
//     // meridiem: true
// }

// function timepicker(element, args) {

//     this.initialized = false
//     this.element = null
//     this.elements = {}
//     this.timepicker = null
//     this.time = new Date()
//     this.settings = {
//         format: true,
//         meridiem: true,
//         minTime: new Date(new Date().toDateString() + ' 00:00'),
//         maxTime: new Date(new Date().toDateString() + ' 24:00'),
//         onChange: false
//     }
//     this.active = false

//     this.updateSettings = function(args) {

//         args = args || {}

//         for (a = 0; a < Object.keys(args).length; a++) {

//             var key = Object.keys(args)[a]
//             var val = args[Object.keys(args)[a]]

//             this.settings[key] = args[Object.keys(args)[a]]

//         }

//         if (!this.settings.format && typeof args.meridiem == 'undefined') {

//             this.settings.meridiem = false

//         }

//         this.settings.meridiem = this.settings.format ? true : this.settings.meridiem
//         this.settings.minTime = !(this.settings.minTime.getDate !== undefined || this.settings.minTime.getDate !== null) ? new Date(new Date().toDateString() + ' ' + this.settings.minTime) : new Date(new Date().toDateString() + ' 00:00')
//         this.settings.maxTime = !(this.settings.maxTime.getDate !== undefined || this.settings.maxTime.getDate !== null) ? new Date(new Date().toDateString() + ' ' + this.settings.maxTime) : this.settings.maxTime

//         if (this.settings.maxTime.toString() == this.settings.minTime.toString()) {

//             var maxTime = new Date(this.settings.minTime)

//             maxTime.setHours(maxTime.getHours() + 24)

//             this.settings.maxTime = maxTime

//         }

//         if (this.element.value) {

//             var newTime = new Date(new Date().toDateString() + ' ' + this.element.value)

//             this.time = !isNaN(newTime.getTime()) ? newTime : this.time

//         }

//         this.time.setMilliseconds(0)

//         if (Object.keys(this.elements).length) {

//             this.updateTime('minute', true, 0)

//             this.render()

//         }

//         if (!this.validateTime()) {

//             this.time = this.settings.minTime ? this.settings.minTime : this.settings.maxTime

//         }

//     }

//     this.buildTimepicker = function() {

//         var wrapper = document.createElement('div')
//         var elements = ['hour', 'minute', 'meridiem']

//         wrapper.className = 'timepicker__wrapper'
//         wrapper.setAttribute('id', 'tp_' + (Math.floor(Math.random() * 100) + 1))

//         if (!Object.keys(this.elements).length) {

//             for (e = 0; e < elements.length; e++) {

//                 this.elements[elements[e]] = document.createElement('div')
//                 this.elements[elements[e]].className = 'timepicker__' + elements[e]

//                 var up = document.createElement('div')
//                 up.appendChild(document.createElement('div'))
//                 var display = document.createElement('p')
//                 var down = document.createElement('div')
//                 down.appendChild(document.createElement('div'))

//                 up.className = 'timepicker__button timepicker__button__up'
//                 display.className = 'display'
//                 down.className = 'timepicker__button timepicker__button__down'

//                 if (this.settings.arrowColor) {

//                     up.childNodes[0].style['border-bottom-color'] = this.settings.arrowColor
//                     down.childNodes[0].style['border-top-color'] = this.settings.arrowColor

//                 }

//                 this.elements[elements[e]].appendChild(up)
//                 this.elements[elements[e]].appendChild(display)
//                 this.elements[elements[e]].appendChild(down)

//             }

//         }

//         this.timepicker = wrapper

//         this.element.parentNode.insertBefore(wrapper, this.element.nextSibling)

//         this.addListeners()

//         this.render()

//     }

//     this.render = function() {

//         var wrapper = this.cleanWrapper(this.timepicker)

//         if (this.settings.meridiem) {

//             wrapper.className = wrapper.className.indexOf(' timepicker__wrapper-full') >= 0 ? wrapper.className : wrapper.className + ' timepicker__wrapper-full'

//         }

//         for (e = 0; e < Object.keys(this.elements).length; e++) {

//             var key = Object.keys(this.elements)[e]
//             var element = this.elements[key]
//             var func = 'get' + key.charAt(0).toUpperCase() + key.slice(1)

//             element.querySelector('.display').innerText = this[func]()

//             if (Object.keys(this.elements)[e] == 'meridiem' && !this.settings.meridiem) {

//                 continue

//             }

//             wrapper.appendChild(element)

//         }

//         this.timepicker = wrapper

//         this.updateInput()

//     }

//     this.cleanWrapper = function(wrapper) {

//         while (wrapper.hasChildNodes()) {

//             wrapper.removeChild(wrapper.lastChild)

//         }

//         return wrapper

//     }

//     this.handleClick = function(e) {

//         var element = e.currentTarget

//         var parent = element.parentNode.className.replace('timepicker__', '')
//         var add = element.className.indexOf('up') !== -1 ? true : false

//         this.updateTime(parent, add)

//     }

//     this.validateInput = function(e) {

//         var value = e.currentTarget.value
//         var date = value.length ? new Date(new Date().toDateString() + ' ' + value) : false

//         if (date && !isNaN(date.getTime())) {

//             this.time = date

//         }

//         if (!this.validateTime()) {

//             var after = date.getTime() > this.settings.maxTime.getTime()
//             date = after ? new Date(this.settings.maxTime) : new Date(this.settings.minTime)
//             after ? date.setMinutes(date.getMinutes() - 1) : date.setMinutes(date.getMinutes() + 1)

//             this.time = date

//         }

//         this.render()

//     }

//     this.updateTime = function(method, add, amount) {

//         var amount = amount || 1

//         switch (method) {

//             case 'meridiem':

//                 this.time.getHours() > 12 ? this.time.setHours(this.time.getHours() - 12) : this.time.setHours(this.time.getHours() + 12)

//                 break

//             default:

//                 if (add) {

//                     this.add(method, amount)

//                 } else {

//                     this.subtract(method, amount)

//                 }

//         }

//         if (!this.validateTime()) {

//             var date = add ? new Date(this.settings.minTime) : new Date(this.settings.maxTime)
//             add ? date.setMinutes(date.getMinutes() + 1) : date.setMinutes(date.getMinutes() - 1)

//             this.time = date

//         }

//         this.render()

//     }

//     this.add = function(method, amount) {

//         var amount = amount || 1

//         switch (method) {

//             case 'minute':

//                 this.time.setMinutes(this.time.getMinutes() + amount)

//                 break

//             case 'hour':

//                 this.time.setHours(this.time.getHours() + amount)

//                 break

//         }

//     }

//     this.subtract = function(method, amount) {

//         var amount = amount || 1

//         switch (method) {

//             case 'minute':

//                 this.time.setMinutes(this.time.getMinutes() - amount)

//                 break

//             case 'hour':

//                 this.time.setHours(this.time.getHours() - amount)

//                 break

//         }

//     }

//     this.validateTime = function() {

//         if (this.settings.minTime) {

//             this.settings.maxTime = this.settings.maxTime

//             this.time.setDate(new Date().getDate())

//             return this.time.getTime() < this.settings.maxTime.getTime() && this.time.getTime() > this.settings.minTime.getTime()

//         }

//         return true

//     }

//     this.updateInput = function(parent) {

//         if (this.initialized) {

//             this.element.value = this.buildString()

//         }

//     }

//     this.buildString = function() {

//         return (this.getHour() + ":" + this.getMinute() + ' ' + this.getMeridiem()).trim()

//     }

//     this.toggleActive = function(e) {

//         if (e.target == this.element) {

//             if (!this.initialized) {

//                 this.initialized = true

//                 this.updateInput()

//             }

//             this.updateBounds(this.timepicker, e.target)

//             this.active = true

//         } else if (e.target.className.indexOf('timepicker__') == -1 && e.target.parentElement.className.indexOf('timepicker__') == -1) {

//             this.active = false

//         }

//         this.timepicker.className = this.active ? this.timepicker.className.indexOf(' timepicker__wrapper-active') >= 0 ? this.timepicker.className : this.timepicker.className + ' timepicker__wrapper-active' : this.timepicker.className.replace(' timepicker__wrapper-active', '')

//     }

//     this.updateBounds = function() {

//         var bounds = this.element.getBoundingClientRect()

//         this.timepicker.style.top = this.element.offsetTop + this.element.innerHeight + 'px'
//         this.timepicker.style.width = bounds.width + 'px'

//     }

//     this.addListeners = function() {

//         var elements = Object.keys(this.elements)

//         for (e = 0; e < elements.length; e++) {

//             var element = this.elements[elements[e]]
//             var buttons = [].slice.call(element.childNodes).filter(function(node) {

//                 return node.className.indexOf('button') !== -1

//             })

//             for (c = 0; c < buttons.length; c++) {

//                 var button = buttons[c]

//                 button.addEventListener('click', this.handleClick.bind(this))

//             }

//         }

//         this.element.addEventListener('change', this.validateInput.bind(this))
//         document.body.addEventListener('click', this.toggleActive.bind(this))
//         window.addEventListener('resize', this.updateBounds.bind(this))

//     }

//     this.getTime = function() {
//         return this.time
//     }

//     this.getHour = function() {

//         if (!this.settings.format) {

//             return this.time.getHours() < 10 ? '0' + this.time.getHours() : this.time.getHours()

//         } else {

//             return this.time.getHours() > 12 ? this.time.getHours() % 12 : this.time.getHours() == 0 ? 12 : this.time.getHours()

//         }

//     }

//     this.getMinute = function() {

//         var minutes = this.time.getMinutes()

//         return minutes < 10 ? '0' + minutes : minutes

//     }

//     this.getMeridiem = function() {

//         if (!this.settings.meridiem) {

//             return ''

//         } else {

//             return this.time.getHours() >= 12 ? 'pm' : 'am'

//         }

//     }

//     this.init = function() {

//         if (element.length) {

//             console.warn('Timepicker selector must be for a specific element, not a list of elements.')

//             return

//         }

//         this.element = element

//         this.updateSettings(args)
//         this.buildTimepicker()

//     }

//     this.init()

// }
function timePicker(id){
   var input = document.getElementById(id);
   var timePicker = document.createElement('div');
   timePicker.classList.add('time-picker');
   // input.value = '08:30';
  
   //open timepicker
   input.onclick= function(){
      timePicker.classList.toggle('open');
      
      this.setAttribute('disabled','disabled');
      timePicker.innerHTML +=`
      <div class="set-time">
         <div class="label">
            <a id="plusH"  class="btn btn--soft--info">+</a>
            <input class="set" type="text" id="hour" value="08" maxlength="2">
            <a id="minusH" class="btn btn--soft--info">-</a>
         </div>
         <div class="label">
            <a id="plusM"  class="btn btn--soft--info">+</a>
            <input class="set" type="text" id="minute" value="30" maxlength="2">
            <a id="minusM" class="btn btn--soft--info">-</a>
         </div>
      </div>
      <button type="button" class="btn btn--info" id="submitTime">Set time</button>`;
      this.after(timePicker);
      var plusH = document.getElementById('plusH');
      var minusH = document.getElementById('minusH');
      var plusM = document.getElementById('plusM');
      var minusM = document.getElementById('minusM');
      var h = parseInt(document.getElementById('hour').value);
      var m = parseInt(document.getElementById('minute').value);
     //increment hour
      plusH.onclick = function(){
         h = isNaN(h) ? 0 : h;
         if(h===23){
            h =-1;
         }
          h++; 
         document.getElementById('hour').value = (h<10?'0':0)+h;
      }
      //decrement hour
      minusH.onclick = function(){
         h = isNaN(h) ? 0 : h;
         if(h===0){
            h =24;
         }
         h--;
         document.getElementById('hour').value = (h<10?'0':0)+h;
      }
      //increment hour
      plusM.onclick = function(){
         m = isNaN(m) ? 0 : m;
         if(m===45){
            m =-15; 
         }
          m = m+15; 
         document.getElementById('minute').value = (m<10?'0':0)+m;
      }
      //decrement hour
      minusM.onclick = function(){
        m = isNaN(m) ? 0 : m;
         if(m===0){
            m =60;
         }
         m = m-15;
         document.getElementById('minute').value = (m<10?'0':0)+m;
      }
      
      //submit timepicker
      var submit = document.getElementById("submitTime");
      submit.onclick = function(){
        input.value = document.getElementById('hour').value+':'+document.getElementById('minute').value;
         input.removeAttribute('disabled');
         timePicker.classList.toggle('open');
         timePicker.innerHTML = '';
      }
   }
}



document.addEventListener("DOMContentLoaded", function() {



    var tpickerStart = new timePicker('btMeetingTimeStart');
    var tpickerEnd = new timePicker('btMeetingTimeEnd');


});