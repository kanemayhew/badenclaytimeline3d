
document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector('.timeline');

    // Timeline data
    const timelineData = [
        { date: "April 20, 2012", event: "Allison Baden-Clay reported missing by her husband, Gerard Baden-Clay." },
        { date: "April 23, 2012", event: "Police treat Allison's disappearance as a missing person case, not a criminal investigation." },
        { date: "April 24, 2012", event: "Gerard Baden-Clay speaks to the media, expressing concern for his wife." },
        { date: "April 27, 2012", event: "Police set up a mannequin in clothing similar to Allison's outside the family home." },
        { date: "April 30, 2012", event: "A body is found by a canoeist, leading to a homicide investigation." },
        { date: "May 1, 2012", event: "The body is confirmed to be Allison Baden-Clay; the case is now officially a murder investigation." },
        { date: "May 10, 2012", event: "Police conduct a roadblock near the Baden-Clay home to gather more information." },
        { date: "May 11, 2012", event: "Allison's funeral takes place, attended by family and the community." },
        { date: "June 13, 2012", event: "Gerard Baden-Clay is interviewed by police and subsequently charged with murder." },
        { date: "June 14, 2012", event: "Baden-Clay appears in court charged with murder and interfering with a corpse." },
        { date: "June 22, 2012", event: "Baden-Clay's bail application is refused, citing him as a significant flight risk." },
        { date: "March 11, 2013", event: "The committal hearing begins, with the Crown alleging financial motives for murder." },
        { date: "June 9, 2014", event: "A jury is selected for the murder trial." },
        { date: "June 10, 2014", event: "Gerard Baden-Clay officially pleads not guilty in the Supreme Court to the charge of murder." },
        { date: "July 15, 2014", event: "Baden-Clay is found guilty of murder and sentenced to life imprisonment." },
        { date: "December 8, 2015", event: "The Court of Appeal downgrades the conviction to manslaughter." },
        { date: "July 26, 2016", event: "The High Court hears an appeal against the downgrading of the murder conviction." }
    ];

    // Create timeline cards
    timelineData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.innerHTML = `
            <div class="date">${item.date}</div>
            <div class="event">${item.event}</div>
        `;
        timeline.appendChild(card);
    });

    // Navigation variables
    let currentIndex = 0;
    const cards = document.querySelectorAll('.timeline-card');

    // Highlight active card
    const updateActiveCard = () => {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            if (index === currentIndex) {
                card.classList.add('active');
            }
        });
    };

    // Initial update
    updateActiveCard();

    // Keyboard controls
    window.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowRight': // Move right
                currentIndex = Math.min(currentIndex + 1, cards.length - 1);
                break;
            case 'ArrowLeft': // Move left
                currentIndex = Math.max(currentIndex - 1, 0);
                break;
            case 'ArrowUp': // Zoom in
                cards[currentIndex].style.transform = 'scale(1.2) translateZ(100px)'; /* Enhance zoom effect */
                break;
            case 'ArrowDown': // Zoom out
                cards[currentIndex].style.transform = 'scale(1) translateZ(0px)'; /* Reset zoom */
                break;
        }
        updateActiveCard();
    });
});
