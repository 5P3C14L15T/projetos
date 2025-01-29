document.addEventListener("DOMContentLoaded", function () {
    const notificationContainer = document.getElementById("notification-container");

    if (!notificationContainer) {
        console.error("Elemento #notification-container não encontrado.");
        return;
    }

    // Lista de nomes e cidades de Mato Grosso
    const profiles = [
        { name: "João Silva", location: "Cuiabá/MT" },
        { name: "Maria Oliveira", location: "Várzea Grande/MT" },
        { name: "Carlos Eduardo", location: "Rondonópolis/MT" },
        { name: "Ana Paula", location: "Sinop/MT" },
        { name: "Pedro Souza", location: "Tangará da Serra/MT" },
        { name: "Fernanda Alves", location: "Lucas do Rio Verde/MT" },
        { name: "Lucas Pereira", location: "Sorriso/MT" },
        { name: "Juliana Mendes", location: "Barra do Garças/MT" },
        { name: "Rafael Ferreira", location: "Cáceres/MT" },
        { name: "Larissa Santos", location: "Primavera do Leste/MT" },
        { name: "Gustavo Lima", location: "Alta Floresta/MT" },
        { name: "Carla Silva", location: "Guarantã do Norte/MT" },
        { name: "Renato Martins", location: "Nova Mutum/MT" },
        { name: "Bianca Rocha", location: "Campo Novo do Parecis/MT" },
        { name: "Eduarda Carvalho", location: "Juína/MT" },
        { name: "Marcos Vinícius", location: "Pontes e Lacerda/MT" },
        { name: "Patrícia Gomes", location: "Mirassol d'Oeste/MT" },
        { name: "Thiago Araújo", location: "Colíder/MT" },
        { name: "Isabela Monteiro", location: "Peixoto de Azevedo/MT" },
        { name: "André Ramos", location: "Jaciara/MT" },
        { name: "Camila Ribeiro", location: "Chapada dos Guimarães/MT" },
        { name: "Felipe Castro", location: "Rosário Oeste/MT" },
        { name: "Vanessa Costa", location: "Paranatinga/MT" },
        { name: "Rodrigo Barros", location: "Nobres/MT" },
        { name: "Natália Figueiredo", location: "Aripuanã/MT" },
        { name: "Bruno Santana", location: "São José do Rio Claro/MT" },
        { name: "Tatiane Vieira", location: "Barra do Bugres/MT" },
        { name: "Leonardo Almeida", location: "Nova Canaã do Norte/MT" },
        { name: "Gabriela Antunes", location: "Campo Verde/MT" },
        { name: "Diego Correia", location: "Água Boa/MT" },
        { name: "Alice Nogueira", location: "Diamantino/MT" },
        { name: "Igor Teixeira", location: "Juara/MT" },
        { name: "Letícia Lopes", location: "Nortelândia/MT" },
        { name: "Vitor Fernandes", location: "Vila Bela da Santíssima Trindade/MT" },
        { name: "Lorena Silva", location: "Ribeirão Cascalheira/MT" },
        { name: "Miguel Matos", location: "Comodoro/MT" },
        { name: "Sofia Duarte", location: "Itiquira/MT" },
        { name: "Arthur Medeiros", location: "Querência/MT" },
        { name: "Isabelly Cardoso", location: "Poconé/MT" },
        { name: "Henrique Bastos", location: "Feliz Natal/MT" },
        { name: "Manuela Moura", location: "Canarana/MT" },
        { name: "Caio Nascimento", location: "Nova Olímpia/MT" },
        { name: "Melissa Freitas", location: "Porto Alegre do Norte/MT" },
        { name: "Joana Pires", location: "Brasnorte/MT" },
        { name: "Fábio Leite", location: "Tapurah/MT" },
        { name: "Emanuel Santos", location: "Nova Xavantina/MT" },
        { name: "Aline Souza", location: "Jauru/MT" },
        { name: "Danilo Brito", location: "Vera/MT" },
        { name: "Viviane Costa", location: "Lucas do Rio Verde/MT" },
        { name: "Rafaela Campos", location: "Sinop/MT" }
    ];

    // Função para mostrar a notificação
    function showNotification() {
        const randomProfile = profiles[Math.floor(Math.random() * profiles.length)];

        // Criar a notificação
        const notification = document.createElement("div");
        notification.className = "notification show";
        notification.innerHTML = `
            <span class="title">Mostrou interesse no curso TTI!</span>
            <span class="name">${randomProfile.name}</span>
            <span class="location">${randomProfile.location}</span>
        `;

        // Adicionar a notificação ao container
        notificationContainer.appendChild(notification);

        // Remover a notificação após 5 segundos
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // Mostrar uma notificação a cada 20 segundos
    setInterval(showNotification, 10000);

    // Exibir a primeira notificação imediatamente
    showNotification();
});
