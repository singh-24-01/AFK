document.getElementById('planning-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('planning-section');
});

document.getElementById('presentation-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('presentation-section');
});

document.getElementById('mlsd-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('mlsd-section');
});

document.getElementById('amsd-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('amsd-section');
});

document.getElementById('plan-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('plan-section');
});

document.getElementById('terms-link').addEventListener('click', function(event) {
    event.preventDefault();
    showSection('terms-section');
});

// Fonction mise à jour pour inclure la nouvelle section
function showSection(sectionId) {
    const sections = ['planning-section', 'presentation-section', 'mlsd-section', 'amsd-section', 'terms-section', 'plan-section'];
    sections.forEach(function(id) {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
}



