window.addEventListener('load', () => {
  const html = document.getElementById('html');
  const css = document.getElementById('css');
  const js = document.getElementById('javascript');
  
  const updateResult = () => {
    const result = document.getElementById('result');
    result.srcdoc = `${html.value}<style>${css.value}</style><script>${javascript.value}<\/script>`
  }

  const onInputChange =  currentInput => {
    currentInput.save()
    updateResult()
  }

  const configureInputs = inputs => {
    console.log(inputs)
    inputs.forEach(input => {
      CodeMirror.fromTextArea(input, {
        addModeClass: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: input.id,
        placeholder: `enter some ${input.id}`
      }).on('change', onInputChange)
    })
  }

  const loadSampleInputValues = ({html, css, js}) => {
    html.value = `        <p><a href="https://webcalisma.glitch.me/" target="_blank">
                <img class="img-responsive" src="https://s-ssl.wordpress.com/mshots/v1/https%3A%2F%2Fwebcalisma.glitch.me?w=360" alt="Download Speed Calculator">
              </a></p>
        
        <p><a href="https://harunpehlivacryptologycenter.harunpehlivanitdew.repl.co/" target="_blank">
                <img class="img-responsive" src="https://s0.wp.com/mshots/v1/https%3A%2F%2Fharunpehlivacryptologycenter.harunpehlivanitdew.repl.co?w=360" alt="HARUN PEHLIVAN CRYPTOLOGY CENTER">
              </a></p>
      
        
      <p><a href="https://machinelearning.glitch.me/" target="_blank">
                <img class="img-responsive" src="https://s-ssl.wordpress.com/mshots/v1/https%3A%2F%2Fmachinelearning.glitch.me?w=360" alt="(ML) MACHINE LEARNING (DL) DEEP LEARNING
(AI) ARTIFICIAL INTELLIGENCE">
              </a> </p>
             `
    
    css.value = `body {display: flex;align-items: center;align-content: center;justify-content: center;padding: 12px;background: #84c7a7;background: linear-gradient(135deg, #2d2c38 0%, #e81a76 50%, #b4ed50 100%);} button {background: #0000ff; border-radius: 10px; color: #fff; font: bold 12px Verdana, serif; ;padding: 20px;}`
    
    js.value = `const app = document.getElementById('app');
const button = document.createElement('button');
const buttonValue = 'click me';

button.innerHTML = buttonValue;
button.onclick = e => {
  const value = e.target.innerHTML
  e.target.innerHTML = value === buttonValue ? 'button clicked!' : buttonValue; 
};

app.appendChild(button);`
  }

  loadSampleInputValues({ html, css, js })
  configureInputs([html, css, js])
  updateResult()
})