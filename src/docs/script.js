const sampleCollection = [{
  title: 'texts',
  showCode: false,
  code: 
  `<span class="t-fc-primary">Primary</span>
  <span class="t-fc-secondary">secondary</span>
  <span class="t-fc-success">Success</span>
  <span class="t-fc-warning">Warning</span>
  <span class="t-fc-danger">Danger</span>
  <span class="t-fc-info">Info</span>
  <span class="t-fc-disabled">Disabled</span>`,
}, {
  title: 'buttons',
  showCode: false,
  code: `<button type="button" class="btn">基本 Normal</button>
<button type="button" class="btn btn--primary">主要 Primary</button>
<button type="button" class="btn btn--secondary">次要 Secondary</button>
<button type="button" class="btn btn--tertiary">次次要 Tertiary</button>
<button type="button" class="btn btn--quaternary">次次次要 Quaternary</button>
<button type="button" class="btn btn--success">成功 Success</button>
<button type="button" class="btn btn--warning">警報 Warning</button>
<button type="button" class="btn btn--danger">錯誤 Error</button>
<button type="button" class="btn btn--info">資訊 Info</button>
<button type="button" class="btn btn--warning">警報 Warning</button>
<button type="button" class="btn btn--dark">Dark Dark</button>
<button type="button" class="btn btn--grey">Hrey Grey</button>
<button type="button" class="btn btn--lightgrey">Lightgrey LightGrey</button>
<button type="button" class="btn btn--neutral">Neutral Neutral</button>
<button type="button" class="btn btn--light">Light light</button>
<button type="button" class="btn is-disabled" disabled>禁用 Disabled</button>

<label class="btn">
  <span>Select your file</span>
  <input type="file">
</label>`,
}, {
  title: 'Alerts',
  showCode: false,
  code: `<button id="successBtn" type="button" class="btn">基本 Normal</button>
<button type="button" class="btn btn--primary">主要 Primary</button>
<button type="button" class="btn btn--secondary">次要 Secondary</button>
<button type="button" class="btn btn--tertiary">次次要 Tertiary</button>
<button type="button" class="btn btn--quaternary">次次次要 Quaternary</button>
<button type="button" class="btn btn--success">成功 Success</button>
<button type="button" class="btn btn--warning">警報 Warning</button>
<button type="button" class="btn btn--danger">錯誤 Error</button>
<button type="button" class="btn btn--info">資訊 Info</button>
<button type="button" class="btn btn--warning">警報 Warning</button>
<button type="button" class="btn btn--dark">Dark Dark</button>
<button type="button" class="btn btn--grey">Hrey Grey</button>
<button type="button" class="btn btn--lightgrey">Lightgrey LightGrey</button>
<button type="button" class="btn btn--neutral">Neutral Neutral</button>
<button type="button" class="btn btn--light">Light light</button>
<button type="button" class="btn is-disabled" disabled>禁用 Disabled</button>`,
}, {
  title: 'radios',
  showCode: false,
  code: `<label>
          <input type="radio" class="nes-radio" name="answer" checked />
          <span>Yes</span>
        </label>

        <label>
          <input type="radio" class="nes-radio" name="answer" />
          <span>No</span>
        </label>

        <div style="background-color:#06152B; padding: 1rem 0;">
          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
            <span>Yes</span>
          </label>

          <label>
            <input type="radio" class="nes-radio is-dark" name="answer-dark" />
            <span>No</span>
          </label>
        </div>
`,
}, {
  title: 'checkboxes',
  showCode: false,
  code: `
        <div class="bb-form-check">
          <input type="checkbox" class="bb-form-check-input" checked id="chk_1" />
          <label class="bb-form-check-label" for="chk_1">
            <i aria-label="checkbox"></i>
            <span class="bb-form-check-label-txt">Checked</span>
          </label>
        </div>
        <div class="bb-form-check">
          <input type="checkbox" class="bb-form-check-input" id="chk_2" />
          <label class="bb-form-check-label" for="chk_2">
            <i aria-label="checkbox"></i>
            <span class="bb-form-check-label-txt">Enable</span>
          </label>
        </div>
        <div class="bb-form-check is-disabled">
          <input type="checkbox" class="bb-form-check-input" id="chk_3" disabled/>
          <label class="bb-form-check-label" for="chk_3">
            <i aria-label="checkbox"></i>
            <span class="bb-form-check-label-txt">Disabled</span>
          </label>
        </div>
        <div class="bb-form-check is-disabled">            
          <input type="checkbox" class="bb-form-check-input" id="chk_4" disabled checked/>
          <label class="bb-form-check-label" for="chk_4">
            <i aria-label="checkbox"></i>
            <span class="bb-form-check-label-txt">Checked Disabled</span>
          </label>
        </div>
        <br>
      <div class="bb-form-check" style="display: block; background-color:#06152B; padding: 1rem 0;">
        <input type="checkbox" class="bb-form-check-input is-dark" id="chk_5" checked/>
        <label class="bb-form-check-label" for="chk_5">
          <i aria-label="checkbox"></i>
          <span class="bb-form-check-label-txt">Dark</span>
        </label>
      </div>
`,
}, {
  title: 'inputs',
  showCode: false,
  code: `<div class="bb-field">
          <label for="name_field">Your name</label>
          <input type="text" id="name_field" class="bb-input">
        </div>

        <div class="bb-field is-inline">
          <label for="inline_field">.input.is-success</label>
          <input type="text" id="inline_field" class="bb-input is-success" placeholder="NES.css">
        </div>

        <div class="bb-field is-inline">
          <label for="warning_field">.input.is-warning</label>
          <input type="text" id="warning_field" class="bb-input is-warning" placeholder="8bb.css">
        </div>

        <div class="bb-field is-inline">
          <label for="error_field">.input.is-error</label>
          <input type="text" id="error_field" class="bb-input is-error" placeholder="awesome.css">
        </div>

        <div style="background-color:#06152B; padding: 1rem;" class="bb-field is-inline">
          <label for="dark_field" style="color:#fff;">.input.is-dark</label>
          <input type="text" id="dark_field" class="bb-input is-dark" placeholder="dark.css">
        </div>`,
}, {
  title: 'textarea',
  showCode: false,
  code: `<label for="textarea_field">Textarea</label>
<textarea id="textarea_field" class="nes-textarea"></textarea>`,
}, {
  title: 'selects',
  showCode: false,
  code: `<label for="default_select">Default select</label>
<div class="nes-select">
  <select required id="default_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<label for="success_select">nes-select.is-success</label>
<div class="nes-select is-success">
  <select required id="success_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<label for="warning_select">nes-select.is-warning</label>
<div class="nes-select is-warning">
  <select required id="warning_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<label for="error_select">nes-select.is-error</label>
<div class="nes-select is-error">
  <select required id="error_select">
    <option value="" disabled selected hidden>Select...</option>
    <option value="0">To be</option>
    <option value="1">Not to be</option>
  </select>
</div>

<div style="background-color:#06152B; padding: 1rem 1.2rem 1rem 1rem;width:calc(100% + 8px)">
  <label for="dark_select" style="color:#fff">nes-select.is-dark</label>
  <div class="nes-select is-dark">
    <select required id="dark_select">
      <option value="" disabled selected hidden>Select...</option>
      <option value="0">To be</option>
      <option value="1">Not to be</option>
    </select>
  </div>
</div>`,
}, {
  title: 'containers',
  showCode: false,
  code: `<div class="bb-container with-title is-centered">
  <p class="title">Container.is-centered</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="bb-container is-dark with-title">
  <p class="title">Container.is-dark</p>
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="bb-container is-rounded">
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>

<div class="bb-container is-rounded is-dark">
  <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div>`,
}, {
  title: 'dialogs',
  note: 'NES.css does not include any JavaScript. If you want to use dialog element other than Chrome, you need polyfill.',
  showCode: false,
  code: `<!-- Dialog -->
<section>
  <button type="button" class="btn is-primary" onclick="document.getElementById('dialog-default').showModal();">
    Open dialog
  </button>
  <dialog class="nes-dialog" id="dialog-default">
    <form method="dialog">
      <p class="title">Dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="btn">Cancel</button>
        <button class="btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Dark dialog -->
<section>
  <button type="button" class="btn is-primary" onclick="document.getElementById('dialog-dark').showModal();">
    Open dark dialog
  </button>
  <dialog class="nes-dialog is-dark" id="dialog-dark">
    <form method="dialog">
      <p class="title">Dark dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="btn">Cancel</button>
        <button class="btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Rounded dialog -->
<section>
  <button type="button" class="btn is-primary" onclick="document.getElementById('dialog-rounded').showModal();">
    Open rounded dialog
  </button>
  <dialog class="nes-dialog is-rounded" id="dialog-rounded">
    <form method="dialog">
      <p class="title">Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="btn">Cancel</button>
        <button class="btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>

<!-- Dark and Rounded dialog -->
<section>
  <button type="button" class="btn is-primary" onclick="document.getElementById('dialog-dark-rounded').showModal();">
    Open dark and rounded dialog
  </button>
  <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
    <form method="dialog">
      <p class="title">Dark and Rounded dialog</p>
      <p>Alert: this is a dialog.</p>
      <menu class="dialog-menu">
        <button class="btn">Cancel</button>
        <button class="btn is-primary">Confirm</button>
      </menu>
    </form>
  </dialog>
</section>`,
}, {
  title: 'lists',
  showCode: false,
  code: `<div class="lists">
  <ul class="nes-list is-disc">
    <li>Good morning.</li>
    <li>Thou hast had a good night's sleep, I hope.</li>
    <li>Thou hast had a good afternoon</li>
    <li>Good night.</li>
  </ul>
</div>

<div class="lists">
  <ul class="nes-list is-circle">
    <li>Good morning.</li>
    <li>Thou hast had a good night's sleep, I hope.</li>
    <li>Thou hast had a good afternoon</li>
    <li>Good night.</li>
  </ul>
</div>

<section class="bb-container is-dark">
  <div class="lists">
    <ul class="nes-list is-disc is-dark">
      <li>Good morning.</li>
      <li>Thou hast had a good night's sleep, I hope.</li>
      <li>Thou hast had a good afternoon</li>
      <li>Good night.</li>
    </ul>
  </div>

  <div class="lists">
    <ul class="nes-list is-circle is-dark">
      <li>Good morning.</li>
      <li>Thou hast had a good night's sleep, I hope.</li>
      <li>Thou hast had a good afternoon</li>
      <li>Good night.</li>
    </ul>
  </div>
</section>`,
}, {
  title: 'tables',
  showCode: false,
  code: `<div class="nes-table-responsive">
  <table class="nes-table is-bordered is-centered">
    <thead>
      <tr>
        <th>Table.is-bordered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
        <th>Table.is-centered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
        <td>Thou hast had a good evening</td>
        <td>Thou hast had a good night</td>
      </tr>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
        <td>Thou hast had a good evening</td>
        <td>Thou hast had a good night</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="nes-table-responsive">
  <table class="nes-table is-bordered is-dark">
    <thead>
      <tr>
        <th>Table.is-dark</th>
        <th>Table.is-bordered</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternon</td>
      </tr>
      <tr>
        <td>Thou hast had a good morning</td>
        <td>Thou hast had a good afternoon</td>
      </tr>
    </tbody>
  </table>
</div>`,
}, {
  title: 'progress',
  showCode: false,
  code: `<progress class="nes-progress" value="90" max="100"></progress>
<progress class="nes-progress is-primary" value="80" max="100"></progress>
<progress class="nes-progress is-success" value="50" max="100"></progress>
<progress class="nes-progress is-warning" value="30" max="100"></progress>
<progress class="nes-progress is-error" value="10" max="100"></progress>
<progress class="nes-progress is-pattern" value="50" max="100"></progress>`,
}, {
  title: 'avatars',
  description: 'It is recommended to use the class "is-pixelated".',
  showCode: false,
  code: `<img class="bit-avatar is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">

<img class="bit-avatar is-small is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">
<img class="bit-avatar is-medium is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">
<img class="bit-avatar is-large is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">


<img class="bit-avatar is-rounded is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">

<img class="bit-avatar is-rounded is-small is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">
<img class="bit-avatar is-rounded is-medium is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">
<img class="bit-avatar is-rounded is-large is-pixelated" alt="Gravatar image example" src="https://www.gravatar.com/avatar?s=15">`,
}, {
  title: 'balloons',
  showCode: false,
  code: `<section class="bb-container">
  <section class="message-list">
    <section class="message -left">
      <i class="nes-bcrikko"></i>
      <!-- Balloon -->
      <div class="nes-balloon from-left">
        <p>Hello NES.css</p>
      </div>
    </section>

    <section class="message -right">
      <!-- Balloon -->
      <div class="nes-balloon from-right">
        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
      </div>
      <i class="nes-bcrikko"></i>
    </section>
  </section>
</section>

<!-- Balloon 'is-dark'  -->
<section class="bb-container is-dark">
  <section class="message-list">
      <section class="message -left">
        <i class="nes-bcrikko"></i>
        <!-- Balloon -->
        <div class="nes-balloon from-left is-dark">
          <p>Hello NES.css</p>
        </div>
      </section>

      <section class="message -right">
        <!-- Balloon -->
        <div class="nes-balloon from-right is-dark">
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <i class="nes-bcrikko"></i>
      </section>
    </section>
  </section>
</section>`,
}, {
  title: 'cursor',
  showCode: false,
  code: `<p class="nes-balloon from-left nes-pointer">
  This is not a clickable element, but it's an area of the pointer.
</p>`,
}, {
  title: 'badges',
  showCode: false,
  code: `<a href="#" class="nes-badge">
  <span class="is-dark">NES.css</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-primary">is</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-success">a</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-warning">great</span>
</a>

<a href="#" class="nes-badge">
  <span class="is-error">framework!</span>
</a>

<a href="#" class="nes-badge is-split">
  <span class="is-dark">npm</span>
  <span class="is-primary">1.1.0</span>
</a>

<a href="#" class="nes-badge is-split">
  <span class="is-dark">test</span>
  <span class="is-success">100%</span>
</a>

<a href="#" class="nes-badge is-icon">
  <span class="is-warning"><i class="nes-icon star is-small"></i></span>
  <span class="is-primary">Icons</span>
</a>

<a href="#" class="nes-badge is-icon">
  <span class="is-dark">hi</span>
  <span class="is-warning">Text</span>
</a>`,
}, {
  title: 'reaction-icons',
  showCode: false,
  description: 'If you want to change icon size, please use "is-small", "is-medium" and "is-large".',
  code: `<section class="icon-list">
  <!-- heart -->
  <i class="nes-icon is-large heart"></i>
  <i class="nes-icon is-large is-half heart"></i>
  <i class="nes-icon is-large is-transparent heart"></i>
  <i class="nes-icon is-large heart is-empty"></i>

  <!-- star -->
  <i class="nes-icon is-large star"></i>
  <i class="nes-icon is-large star is-half"></i>
  <i class="nes-icon is-large star is-transparent"></i>
  <i class="nes-icon is-large star is-empty"></i>

  <!-- like -->
  <i class="nes-icon is-large like"></i>
  <i class="nes-icon is-large like is-empty"></i>
</section>`,
}, {
  title: 'sns-icons',
  showCode: false,
  description: 'If you want to change icon size, please use "is-small", "is-medium" and "is-large".',
  code: `<section class="icon-list">
  <!-- twitter -->
  <i class="nes-icon twitter is-large"></i>

  <!-- facebook -->
  <i class="nes-icon facebook is-large"></i>

  <!-- instagram -->
  <i class="nes-icon instagram is-large"></i>

  <!-- github -->
  <i class="nes-icon github is-large"></i>

  <!-- google -->
  <i class="nes-icon google is-large"></i>

  <!-- gmail -->
  <i class="nes-icon gmail is-large"></i>

  <!-- medium -->
  <i class="nes-icon medium is-large"></i>

  <!-- linkedin -->
  <i class="nes-icon linkedin is-large"></i>

  <!-- twitch -->
  <i class="nes-icon twitch is-large"></i>

  <!-- youtube -->
  <i class="nes-icon youtube is-large"></i>

  <!-- reddit -->
  <i class="nes-icon reddit is-large"></i>

  <!-- whatsapp -->
  <i class="nes-icon whatsapp is-large"></i>
</section>`,
}, {
  title: 'other-icons',
  showCode: false,
  description: 'If you want to change icon size, please use "is-small", "is-medium" and "is-large".',
  code: `<section class="icon-list">
  <!-- close -->
  <i class="nes-icon close is-large"></i>

  <!-- trophy -->
  <i class="nes-icon trophy is-large"></i>

  <!-- coin -->
  <i class="nes-icon coin is-large"></i>
</section>`,
}, {
  title: 'pixel-arts',
  showCode: false,
  code: `<section class="icon-list">
  <!-- controllers -->
  <i class="nes-logo"></i>
  <i class="nes-jp-logo"></i>
  <i class="snes-logo"></i>
  <i class="snes-jp-logo"></i>

  <!-- octocat -->
  <i class="nes-octocat animate"></i>

  <!-- phone -->
  <i class="nes-smartphone"></i>
  <i class="nes-phone"></i>
</section>`,
}, {
  title: 'Nintendo-characters',
  showCode: false,
  note: 'Nintendo owns the copyright of these characters. Please comply with the Nintendo guidelines and laws of the applicable jurisdiction.',
  code: `<section class="icon-list">
  <!-- Copyright Nintendo -->
  <i class="nes-mario"></i>
  <i class="nes-ash"></i>
  <i class="nes-pokeball"></i>
  <i class="nes-bulbasaur"></i>
  <i class="nes-charmander"></i>
  <i class="nes-squirtle"></i>
  <i class="nes-kirby"></i>
</section>`,
}, ];

const coreteam = [{
  name: 'BarrY',
  feat: 'Creator of Bbit.css',
  github: 'Barry028',
  twitter: '',
}];

const emeriti = [{
  name: 'BarrY',
  feat: 'Creator of Bbit.css',
  github: 'Barry028',
  twitter: '',
}];

// curl -s 'https://api.github.com/repos/nostalgic-css/NES.css/contributors?per_page=100' | jq '.[].login'
const contributors = [
  '4k1k0',
  'sombreroEnPuntas',
  'Divoolej',
  'soph-iest',
  'montezume',
  'sazzadsazib',
  'HiKaylum',
  'jdvivar',
  'ohlookitsderpy',
  'IngwiePhoenix',
  'kyu-suke',
  'jjspace',
  'Baldomo',
  'DanSnow',
  'ernestomancebo',
  'Ilyeo',
  'Kartones',
  'rrj-dev',
  'vicainelli',
  'stewartrule',
  'kenshinji',
  'youngkaneda',
  'Takumi0901',
  'loo41',
  'alexd99',
  'alexgleason',
  'agarzola',
  'AlphaWong',
  'brendansparrow',
  'Ermakoy',
  'fleeting',
  'JamesIves',
  'jsoref',
  'KOREAN139',
  'KalobTaulien',
  'LukBukkit',
  'otaviopace',
  'Pedro-Souza',
  'iamrameffort',
  'scottaohara',
  'd0p1s4m4',
  'lucasjs',
  'musavvirahmed',
  'sinofp',
  'thisisabhinay',
  'tnantoka',
];

new Vue({
  el: '#guideline',
  data() {
    return {
      collection: sampleCollection,
      coreteam,
      animateOctocat: false,
      copiedBalloon: {
        display: 'none',
        top: 0,
        left: 0,
      },
      scrollPos: 0,
    };
  },
  filters: {
    capitalize(val) {
      if (!val) return '';
      val = val.toString();
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  },
  mounted() {
    document.addEventListener('scroll', () => {
      this.scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
    });
    hljs.initHighlightingOnLoad();
    [].forEach.call(document.querySelectorAll('dialog'), (a) => {
      dialogPolyfill.registerDialog(a);
    });
    this.replaceImages();

  },
  methods: {

    copy(event, id) {
      this.showCopiedBalloon(event.pageY, event.pageX);

      const fake = document.createElement('textarea');
      fake.value = this.collection.find(a => a.title === id).code;
      fake.setAttribute('readonly', '');
      Object.assign(fake.style, {
        position: 'absolute',
        left: '-9999px',
      });
      this.$el.appendChild(fake);
      fake.select();
      document.execCommand('copy');
      this.$el.removeChild(fake);
    },
    startAnimate() {
      this.animateOctocat = true;
    },
    stopAnimate() {
      this.animateOctocat = false;
    },
    
    showCopiedBalloon(top, left) {
      this.copiedBalloon = {
        display: 'block',
        top: `${top - 100}px`,
        left: `${left - 180}px`,
      };
      setTimeout(() => {
        this.copiedBalloon.display = 'none';
      }, 1000);
    },
    replaceImages() {
      Array.from(document.querySelectorAll('img.lazy')).forEach((img) => {
        img.onload = () => img.classList.remove('lazy');
        img.src = img.dataset.src;
      });
    },
   
  },
});