# Go-Motors-BR

Projeto de um site para venda de veículos.

## 🚀 Tech Stack

-   **Frontend:** [React.js](https://reactjs.org/)
-   **Backend:** [Python](https://www.python.org/) com [Django](https://www.djangoproject.com/) e [Django REST Framework](https://www.django-rest-framework.org/)
-   **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)

## 📋 Pré-requisitos

-   [Node.js](https://nodejs.org/en/) (v16 ou superior)
-   [Python](https://www.python.org/downloads/) (v3.9 ou superior)
-   [PostgreSQL](https://www.postgresql.org/download/)

## 🏁 Como Começar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/Go-Motors-BR.git
    cd Go-Motors-BR
    ```

2.  **Configure e inicie o Backend:**
    ```bash
    cd backend
    python -m venv venv
    # Ative o ambiente virtual (Windows: .\venv\Scripts\activate | macOS/Linux: source venv/bin/activate)
    pip install -r requirements.txt # (Será necessário criar este arquivo)
    # Configure o arquivo .env ou settings.py com as credenciais do banco de dados
    python manage.py migrate
    python manage.py runserver
    ```

3.  **Configure e inicie o Frontend:**
    ```bash
    cd ../frontend
    npm install
    npm start
    ```