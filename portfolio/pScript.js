let angle_down = document.getElementById("angle-down")
let angle_up = document.getElementById("angle-up")
let main_list = document.getElementById("main_list")
let photos1 = document.getElementById("photos1")
let photos2 = document.getElementById("photos2")
let photos3 = document.getElementById("photos3")
let photos4 = document.getElementById("photos4")
let photos5 = document.getElementById("photos5")
let photos6 = document.getElementById("photos6")
let photos7 = document.getElementById("photos7")

main_list.style.display = "none"
angle_up.style.display = "none"
function showMenu()
{
    angle_down.style.display = 'none'
    main_list.style.display = ""
    angle_up.style.display = ""
    photos1.style.flexDirection = "column"
    photos2.style.flexDirection = "column"
    photos3.style.flexDirection = "column"
    photos4.style.flexDirection = "column"
    photos5.style.flexDirection = "column"
    photos6.style.flexDirection = "column"
    photos7.style.flexDirection = "column"
}
function hideMenu()
{
    angle_down.style.display = ''
    main_list.style.display = "none"
    angle_up.style.display = "none"
    photos1.style.flexDirection = "row"
    photos2.style.flexDirection = "row"
    photos3.style.flexDirection = "row"
    photos4.style.flexDirection = "row"
    photos5.style.flexDirection = "row"
    photos6.style.flexDirection = "row"
    photos7.style.flexDirection = "row"
}