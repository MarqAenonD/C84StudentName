name_of_the_student_array = [];

function submit()
{
    var name_1 = document.getElementById("name_of_the_student1").value;
    var name_2 = document.getElementById("name_of_the_student2").value;
    document.getElementById("scores").value = val; document.getElementById("student_name").value = "";
    var name_4 = document.getElementById("name_of_the_student4").value;

    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array;
}
