
window.onload = function () {
    let sessions = JSON.parse(localStorage.getItem('sessions') )|| [];
    localStorage.setItem('sessions',JSON.stringify([...sessions,new Date()]));
}
