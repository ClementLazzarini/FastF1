function generateDynamicCalendar() {
    const events = [
        { num: '01', date: '2024-03-02', shortdate: '02/03', name: 'Bahreïn', sprint: 'no', flag: 'bahrein' },
        { num: '02', date: '2024-03-09', shortdate: '09/03', name: 'Arabie Saoudite', sprint: 'no', flag: 'arabiesaoudite' },
        { num: '03', date: '2024-03-24', shortdate: '24/03', name: 'Australie', sprint: 'no', flag: 'australie' },
        { num: '04', date: '2024-04-07', shortdate: '07/04', name: 'Japon', sprint: 'yes', flag: 'japon' },
        { num: '05', date: '2024-04-21', shortdate: '21/04', name: 'Chine', sprint: 'no', flag: 'chine' },
        { num: '06', date: '2024-05-05', shortdate: '05/05', name: 'Miami', sprint: 'no', flag: 'etatsunis' },
        { num: '07', date: '2024-05-19', shortdate: '19/05', name: 'Emilie-Romagne', sprint: 'no', flag: 'italie' },
        { num: '08', date: '2023-05-26', shortdate: '26/05', name: 'Monaco', sprint: 'no', flag: 'monaco' },
        { num: '09', date: '2024-06-09', shortdate: '09/06', name: 'Canada', sprint: 'no', flag: 'canada' },
        { num: '10', date: '2024-06-23', shortdate: '23/06', name: 'Espagne', sprint: 'no', flag: 'espagne' },
        { num: '11', date: '2024-06-30', shortdate: '30/06', name: 'Autriche', sprint: 'no', flag: 'autriche' },
        { num: '12', date: '2024-07-07', shortdate: '07/07', name: 'Grande-Bretagne', sprint: 'no', flag: 'angleterre' },
        { num: '13', date: '2024-07-21', shortdate: '21/07', name: 'Hongrie', sprint: 'no', flag: 'hongrie' },
        { num: '14', date: '2024-07-28', shortdate: '28/07', name: 'Belgique', sprint: 'no', flag: 'belgique' },
        { num: '15', date: '2024-08-25', shortdate: '25/08', name: 'Pays-Bas', sprint: 'no', flag: 'paysbas' },
        { num: '16', date: '2024-09-01', shortdate: '01/09', name: 'Italie', sprint: 'no', flag: 'italie' },
        { num: '17', date: '2024-09-15', shortdate: '15/09', name: 'Azerbaïdjan', sprint: 'no', flag: 'azerbaidjan' },
        { num: '18', date: '2024-09-22', shortdate: '22/09', name: 'Singapour', sprint: 'no', flag: 'singapour' },
        { num: '19', date: '2024-10-20', shortdate: '20/10', name: 'Etats-Unis', sprint: 'no', flag: 'etatsunis' },
        { num: '20', date: '2024-10-27', shortdate: '27/10', name: 'Mexique', sprint: 'no', flag: 'mexique' },
        { num: '21', date: '2024-11-03', shortdate: '03/11', name: 'Brésil', sprint: 'no', flag: 'bresil' },
        { num: '22', date: '2024-11-24', shortdate: '24/11', name: 'Las Vegas', sprint: 'no', flag: 'etatsunis' },
        { num: '23', date: '2024-12-01', shortdate: '01/12', name: 'Qatar', sprint: 'no', flag: 'qatar' },
        { num: '24', date: '2024-12-08', shortdate: '08/12', name: 'Abou Dhabi', sprint: 'no', flag: 'aboudhabi' }
    ];

    events.sort((a, b) => new Date(a.date) - new Date(b.date));

    const mainCalendrier = document.querySelector('.main-calendrier');

    mainCalendrier.innerHTML = '';


    const currentDate = new Date();
    let pastEventFound = false;

    for (const event of events) {
        const link = document.createElement('a');
        link.href = `2024/round/${event.num}-${event.name}.html`;

        const button = document.createElement('a');

        button.innerHTML = `
            <a href="${link.href}">
                <button class="btn-calendrier">
                    <div class="calendrier-date">
                        <p>${event.shortdate}</p>
                    </div>
                    <img src="../img/flag/${event.flag}-flag.png" alt="${event.name} drapeau" class="calendar-flag"></img>
                    <div class="calendrier-nom">
                        <p>GP ${event.name}</p>
                    </div>
                </button>
            </a>
        `;

        if (new Date(event.date) < currentDate) {
            button.classList.add('previous');
            pastEventFound = true;
        }

        if (event.sprint === 'yes') {
            button.classList.add('sprint');
        }

        // Ajoutez une balise <p> entre les événements passés et à venir
        if (pastEventFound && new Date(event.date) > currentDate) {
            const separator = document.createElement('h2');
            separator.textContent = 'Prochainement';
            separator.classList.add('mainsubtitle')
            mainCalendrier.appendChild(separator);
            pastEventFound = false; // Pour ne l'ajouter qu'une fois
        }

        mainCalendrier.appendChild(button);
    }

}
