var expectedCourses = {CSC13001: "21_3",CSC13007: "20_3"}

var interval = 2

function register() {
    const courses = document.querySelectorAll("table:not(#tbDSDaDK) tbody tr")
    const submit = document.querySelectorAll("input[type='submit']")[1]

    function selectExpectedCourses() {
        let found = false
        courses.forEach((course) => {
            const id = course.querySelector("td:nth-of-type(1)").textContent.trim()
            const classId = course.querySelector("td:nth-of-type(3)")?.textContent.trim()
            const checkbox = course.querySelector("td:last-of-type").querySelector("input[type='checkbox']")
            if (id in expectedCourses && classId === expectedCourses[id] && checkbox) checkbox.checked = found = true
        })
        return found
    }

    if (selectExpectedCourses()) {
        var realConfirm = window.confirm;
        window.confirm = function () {
        window.confirm = realConfirm;
        return true;
        };
        submit.click();
    }
}

register()
setTimeout(() => window.location.reload(), interval * 1000)
