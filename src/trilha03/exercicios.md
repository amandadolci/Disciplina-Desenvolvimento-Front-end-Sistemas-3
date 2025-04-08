### Exercícios

1.  Criando um sistema de navegação
    Objetivo: Criar um sistema de navegação com React Router e TypeScript.

    Requisitos:

    1. Configure o React Router no App.tsx.
    2. Crie três páginas: Home.tsx, About.tsx e Contact.tsx.
    3. Crie um menu de navegação com Link para acessar cada página.

2.  Passagem de parâmetros via URL
    Objetivo: Criar uma rota dinâmica que receba um name como parâmetro e exiba o nome de um animal.

    Requisitos:

    1.  Criar uma página Animal.tsx que receba um parâmetro name pela URL.
    2.  Utilizar useParams para capturar o parâmetro e exibi-lo na tela.
    3.  Criar uma rota dinâmica /animal/:name.

3.  Redirecionamento com useNavigate
    Objetivo: Criar um botão que, ao ser clicado, redirecione o usuário para outra página.

    Requisitos:

    1.  Criar um botão na página Home.tsx que, ao ser clicado, leve o usuário para /about.
    2.  Utilizar useNavigate para fazer o redirecionamento.

4.  Sistema de Reservas de Hotel com React Router e TypeScript
    1. Criar três páginas principais:
       - Home.tsx (Página inicial)
       - Rooms.tsx (Lista de quartos disponíveis)
       - RoomDetails.tsx (Detalhes de um quarto específico)
    2. Utilizar useParams para capturar o ID do quarto na URL.
    3. Criar um botão na página de detalhes do quarto para simular uma reserva, redirecionando o usuário para uma página de sucesso (BookingSuccess.tsx).
    4. Criar um menu de navegação com Link.
