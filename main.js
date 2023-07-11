function enviarTexto() {
  var texto = document.getElementById("inputText").value;

  // Configurar el URL del webhook
  var webhookURL = 'https://discord.com/api/webhooks/1128300614653321217/gP6Fy9PCsBZ06l2oi1UMtxSoKKDNlkPOVTab8ZWS8vnZXpCj6qWVgziJ4RbLHKFseu4I';

  // Crear el objeto JSON para enviar en el webhook
  var webhookData = JSON.stringify({
      content: '/rw ' + texto
  });

  // Realizar la solicitud HTTP POST al webhook
  fetch(webhookURL, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: webhookData
  })
  .then(response => {
      console.log('Mensaje enviado al webhook');
  })
  .catch(error => {
      console.error('Error al enviar el mensaje al webhook:', error);
  });
}

function enviarTexto2() {
    var texto = document.getElementById("inputText").value;
  
    // Configurar el URL del webhook
    var webhookURL = 'https://discord.com/api/webhooks/1128300614653321217/gP6Fy9PCsBZ06l2oi1UMtxSoKKDNlkPOVTab8ZWS8vnZXpCj6qWVgziJ4RbLHKFseu4I';
  
    // Crear el objeto JSON para enviar en el webhook
    var webhookData = JSON.stringify({
        content: '/comando ' + texto
    });
  
    // Realizar la solicitud HTTP POST al webhook
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: webhookData
    })
    .then(response => {
        console.log('Mensaje enviado al webhook');
    })
    .catch(error => {
        console.error('Error al enviar el mensaje al webhook:', error);
    });
  }