// We already have cookies. Why additional objects?
        // Unlike cookies, web storage objects are not sent to server with each request. Because of that, we can store much more. Most browsers allow at least 2 megabytes of data (or more) and have settings to configure that.
        // Also unlike cookies, the server can’t manipulate storage objects via HTTP headers. Everything’s done in JavaScript.
        // The storage is bound to the origin (domain/protocol/port triplet). That is, different protocols or subdomains infer different storage objects, they can’t access data from each other.
    
    // localstorage
    // The main features of localStorage are:
    //     Shared between all tabs and windows from the same origin.
    //     The data does not expire. It remains after the browser restart and even OS reboot.
    //     The localStorage is shared between all windows with the same origin, so if we set the data in one window, the change becomes visible in another one
    
    localStorage.user = 5;
    console.log(localStorage.user)


    // session storage
        // The sessionStorage exists only within the current browser tab.
        // Another tab with the same page will have a different storage.
        // But it is shared between iframes in the same tab (assuming they come from the same origin).
        // The data survives page refresh, but not closing/opening the tab.
    sessionStorage.name = "trung";

    function clickfunction(){
        let value = sessionStorage.getItem("alo") || 0;
        sessionStorage.setItem("alo",1 + Number(value));
    }