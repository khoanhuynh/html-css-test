function openTicketBox() {
    document.getElementById("ticketModal").style.display = "block";

}
function closeTicketBox() {
    document.getElementById("ticketModal").style.display = "none";
}
function handleToggleMenu() {
    var x = document.getElementsByClassName("header-li-item");
    var item = document.getElementsByClassName("header-li-item")[0];
    var display = getComputedStyle(item).display;

     if (display == "none") {
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'block';
        }
        document.getElementById("content").style.marginTop = "240px";
         } else {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = 'none';
            }
            document.getElementById("content").style.marginTop = "46px";
         }


}