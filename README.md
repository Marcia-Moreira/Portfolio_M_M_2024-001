# Portfolio_M_M_2024-001
Primeiro Site Portfolio - Marcia Moreira

# Ambiente Virtual:
python -m venv .venv
.venv\Scripts\Activate

# RESUMO DOS COMANDOS:
# Clone o repositório e vá para a pasta
git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
cd NOME_DO_REPOSITORIO

# Crie e ative o ambiente virtual
python -m venv .venv
.venv\Scripts\Activate  # Windows

# Adicione o .gitignore
echo .venv/ > .gitignore

# Copie os arquivos e suba para o GitHub
git status
git add .
git commit -m "Adicionando arquivos e configurando ambiente virtual"
git push origin main
