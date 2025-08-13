$("#formContacto").on("submit", function(e) {
  e.preventDefault(); // Evita el envío real

  const tarjeta = $('#tarjeta').val().replace(/\s/g, '').trim();
  const cvv = $('#cvv').val().trim();
  const email = $('#email').val().trim();

  // Validar tarjeta: exactamente 16 dígitos (sin espacios)
  if (!/^\d{16}$/.test(tarjeta)) {
    alert("El número de tarjeta debe tener exactamente 16 dígitos.");
    return; // Sale y no envía
  }

  // Validar CVV
  if (!/^\d{3}$/.test(cvv)) {
    alert("El CVV debe tener exactamente 3 dígitos.");
    return;
  }

  // Validar correo
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Por favor ingresa un correo válido.");
    return;
  }
alert("Formulario enviado conn exito");
  this.submit(); 
});
