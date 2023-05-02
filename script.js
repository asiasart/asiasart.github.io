let angle_down = document.getElementById("angle-down")
let angle_up = document.getElementById("angle-up")
let main_list = document.getElementById("main_list")
main_list.style.display = "none"
angle_up.style.display = "none"
function showMenu()
{
    angle_down.style.display = 'none'
    main_list.style.display = ""
    angle_up.style.display = ""
}
function hideMenu()
{
    angle_down.style.display = ''
    main_list.style.display = "none"
    angle_up.style.display = "none"
}