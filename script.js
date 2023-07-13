var courseList = document.getElementById('course-list');
var createCourseForm = document.getElementById('create-course-form');

// Array untuk menyimpan daftar kursus
var courses = [];

// Fungsi untuk membuat kursus baru
function createCourse(event) {
    event.preventDefault();

    var title = document.getElementById('course-title').value;
    var description = document.getElementById('course-description').value;
    var duration = document.getElementById('course-duration').value;

    var course = {
        title: title,
        description: description,
        duration: duration,
        materials: []
    };

    courses.push(course);
    renderCourseList();
    createCourseForm.reset();
}

// Fungsi untuk menampilkan daftar kursus
function renderCourseList() {
    courseList.innerHTML = '';

    for (var i = 0; i < courses.length; i++) {
        var course = courses[i];

        var listItem = document.createElement('li');
        listItem.innerHTML = course.title + '<button onclick="showCourseDetails(' + i + ')">Detail</button>';

        courseList.appendChild(listItem);
    }
}

// Fungsi untuk menampilkan detail kursus
function showCourseDetails(index) {
    var course = courses[index];

    var detailsContainer = document.createElement('div');
    detailsContainer.className = 'course-details';

    var title = document.createElement('h3');
    title.textContent = course.title;

    var description = document.createElement('p');
    description.textContent = 'Deskripsi: ' + course.description;

    var duration = document.createElement('p');
    duration.textContent = 'Durasi: ' + course.duration + ' jam';

    var materialsHeading = document.createElement('h4');
    materialsHeading.textContent = 'Daftar Materi';

    var materialsList = document.createElement('ul');
    for (var i = 0; i < course.materials.length; i++) {
        var material = course.materials[i];
        var materialItem = document.createElement('li');
        materialItem.innerHTML = material.title + ' - <a href="' + material.embedLink + '">Link Materi</a>';
        materialsList.appendChild(materialItem);
    }

    detailsContainer.appendChild(title);
    detailsContainer.appendChild(description);
    detailsContainer.appendChild(duration);
    detailsContainer.appendChild(materialsHeading);
    detailsContainer.appendChild(materialsList);

    courseList.appendChild(detailsContainer);
}

// Tambahkan event listener untuk form kursus baru
createCourseForm.addEventListener('submit', createCourse);

// Render daftar kursus saat halaman dimuat
renderCourseList();
