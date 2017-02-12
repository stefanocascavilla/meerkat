const sendMail =  () => {
  const nome = document.getElementById("nome").value;
  const mail = document.getElementById("mail").value;
  const testo = document.getElementById("testo").value;

  fetch("/send", {
  	method: "POST",
  	body: JSON.stringify({
  		nome: nome,
  		mail: mail,
  		testo: testo
  	}),
  	headers: new Headers({
  		"Content-type": "application/json"
  	})
  }).catch((err) => {
  	throw err;
  });
}