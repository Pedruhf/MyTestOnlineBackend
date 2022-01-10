const baseURL = "http://localhost:3333";

function emailConfirmationHTML(id: string, name: string): string {
  return `
<!DOCTYPE html>
<html style="margin: 0;
padding: 0;">

<head>
  <meta charset='utf-8' content="text/html">
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <title>MyTestOnline | Confirmação de Email</title>
  <meta name='viewport' content='width=device-width, initial-scale=1'>

  <style type="text/css">
    @import url("https://fonts.googleapis.com/css?family=Cabin");
    @import url("https://fonts.googleapis.com/css?family=Open+Sans");

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #EEE;
    }

    .main {
      max-width: 600px;
      margin: 0 auto;
      background: #FFF;
    }

    table {
      border-collapse: separate;
      width: 85%;

      font-weight: 400;
      font-family: 'Open-sans', sans-serif;
      line-height: 1.5rem;
      color: #2D0B3D;
      background: #FFF;
    }

    tr.header td {
      padding: 1rem 0 3rem;
    }

    tr.header td img {
      max-width: 80px;
    }

    tr.header td p {
      width: 170px;
      font-size: 1.1rem;
      line-height: 1.25rem;
      text-align: right;
    }

    .registration-text {
      padding: 0 0 1.5rem;
      margin-right: 20px;
    }

    .registration-text h1 {
      font-size: 1.5rem;
      font-family: 'Cabin', sans-serif;
    }

    .explanation-text {
      padding: 0 0 0.75rem;
      font-size: 1.15rem;
    }

    .redefinition-button {
      padding: 2.4rem 0;
    }

    .redefinition-button a {
      background: #7327D1;
      padding: 0.85rem 2.8rem;
      border-radius: 1.8rem;

      font-size: 1.2rem;
      font-weight: 600;
      letter-spacing: 1px;
      color: #FFF !important;
      text-decoration: none;
    }

    .problem-text span {
      font-size: 0.85rem;
    }
    
    .redefinition-link {
      padding: 0 0 2.4rem;
    }
    
    .redefinition-link a {
      font-size: 0.85rem;
      color: inherit !important;
    }

    .scylax-team {
      padding: 0 0 1rem;
    }

    .scylax-team span {
      font-size: 1.05rem;
      line-height: 1.75rem;
    }

    tr td hr {
      border-top: 2px solid #7327D1;
      opacity: 0.2;
    }

    .auto-message-text {
      padding: 1rem 0 3rem;
    }

    .auto-message-text span {
      font-size: 0.85rem;
      opacity: 0.6;
    }
    
  </style>
</head>

<body>
  <center class="main">
    <table align="center">
      <tbody>
        <tr class="header">
          <td align="left">
            <img src="https://cdn-icons-png.flaticon.com/512/5969/5969682.png" alt="logo scylax">
          </td>
          <td align="right">
            <p>Sua ferramenta de avaliações online.</p>
          </td>
        </tr>
        
        <tr>
          <td colspan="5" class="registration-text">
            <h1>Olá, ${name}</h1>
          </td>
        </tr>

        <tr>
          <td colspan="5" class="registration-text">
            <h1>Obrigado por se cadastrar no MyTestOnline</h1>
          </td>
        </tr>

        <tr>
          <td colspan="5" class="explanation-text">
            Para completar seu cadastro precisamos que confirme<br />
            seu e-mail clicando no botão abaixo:
          </td>
        </tr>


        <tr>
          <td colspan="5" class="redefinition-button" align="center">
            <a href="${baseURL}/users/confirm-email/${id}" target="_">CONFIRMAR E-MAIL</a>
          </td>
        </tr>

        <tr>
          <td colspan="5" class="problem-text" align="center">
            <span>Se tiver problemas, copie e cole o link abaixo em outra janela do seu navegador:</span>
          </td>
        </tr>

        <tr>
          <td colspan="5" class="redefinition-link" align="center">
            <a href="${baseURL}/users/confirm-email/${id}" target="_">
              ${baseURL}/users/confirm-email/${id}
            </a>
          </td>
        </tr>

        <tr>
          <td class="scylax-team">
            <span>Atenciosamente,<br />Equipe MyTestOnline.</span>
          </td>
        </tr>

        <tr>
          <td colspan="5">
            <hr >
          </td>
        </tr>

        <tr>
          <td colspan="5" class="auto-message-text">
            <span>Favor, não responder à este e-mail. Esta é uma mensagem automática.</span>
          </td>
        </tr>

      </tbody>
    </table>
  </center>
</body>
</html>
`;
}

export { emailConfirmationHTML };