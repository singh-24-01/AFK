document.getElementById('planning-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('planning-section').style.display = 'block';
    document.getElementById('presentation-section').style.display = 'none';
    document.getElementById('mlsd-section').style.display = 'none';
    document.getElementById('amsd-section').style.display = 'none';
});

document.getElementById('presentation-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('planning-section').style.display = 'none';
    document.getElementById('presentation-section').style.display = 'block';
    document.getElementById('mlsd-section').style.display = 'none';
    document.getElementById('amsd-section').style.display = 'none';
});

document.getElementById('mlsd-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('planning-section').style.display = 'none';
    document.getElementById('presentation-section').style.display = 'none';
    document.getElementById('mlsd-section').style.display = 'block';
    document.getElementById('amsd-section').style.display = 'none';
});

document.getElementById('amsd-link').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('planning-section').style.display = 'none';
    document.getElementById('presentation-section').style.display = 'none';
    document.getElementById('mlsd-section').style.display = 'none';
    document.getElementById('amsd-section').style.display = 'block';
});
