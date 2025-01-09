from flask import Flask, request, render_template_string
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

# Configurações do servidor de e-mail
SMTP_SERVER = 'smtp.seuservidordemail.com'
SMTP_PORT = 587
SMTP_USERNAME = 'id.marcia.moreira@gmail.com'
SMTP_PASSWORD = 'suasenha'

# Função para enviar e-mail
def send_email(subject, sender, recipients, body):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = ', '.join(recipients)

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.sendmail(sender, recipients, msg.as_string())

@app.route('/send_email', methods=['POST'])
def send_email_route():
    nome = request.form['nome']
    email = request.form['email']
    celular = request.form['celular']
    mensagem = request.form['mensagem']

    subject = "Novo Contato do Formulário"
    sender = SMTP_USERNAME
    recipients = [SMTP_USERNAME]  # Enviar para si mesmo

    body = f"""
    Nome: {nome}
    E-mail: {email}
    Celular: {celular}
    Mensagem: {mensagem}
    """

    send_email(subject, sender, recipients, body)
    return "E-mail enviado com sucesso!"

if __name__ == '__main__':
    app.run(debug=True)

# python app.py
# 