const data = [
    {title: "Accordion Item 1", desc: "Description of Accordion Item 1"},
    {title: "Accordion Item 2", desc: "Description of Accordion Item 2"},
    {title: "Accordion Item 3", desc: "Description of Accordion Item 3"},
    {title: "Accordion Item 4", desc: "Description of Accordion Item 4"},
    {title: "Accordion Item 5", desc: "Description of Accordion Item 5"}
];
const accordionContainer = document.getElementById("accordion");
accordionContainer.innerHTML = 
    data.map(item => 
        `<div class="accordion-item">
            <div class="accordion-title">${item.title}</div>
            <div class="accordion-desc">${item.desc}</div>
        </div>`
    ).join("")

accordionContainer.addEventListener("click", handleAccordionClick);
function handleAccordionClick(e) {
    if (!e.target.classList.contains("accordion-title")) return;
    
    const desc = e.target.nextElementSibling;

    document.querySelectorAll(".accordion-desc.active")
    .forEach(open => {
        if (open!== desc) {
            open.classList.remove('active')
        }
    })
    desc.classList.toggle('active')
}
