let angle_down = document.getElementById("angle-down")
let angle_up = document.getElementById("angle-up")
let main_list = document.getElementById("main_list")
let photos1 = document.getElementById("photos1")
let photos2 = document.getElementById("photos2")

main_list.style.display = "none"
angle_up.style.display = "none"
function showMenu()
{
    angle_down.style.display = 'none'
    main_list.style.display = ""
    angle_up.style.display = ""
    photos1.style.flexDirection = "column"
    photos2.style.flexDirection = "column"
}
function hideMenu()
{
    angle_down.style.display = ''
    main_list.style.display = "none"
    angle_up.style.display = "none"
    photos1.style.flexDirection = "row"
    photos2.style.flexDirection = "row"
}