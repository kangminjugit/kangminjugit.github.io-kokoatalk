var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
const noWifiIcon = document.querySelector('.js-no-wifi'),
wifi30Icon = document.querySelector('.js-wifi-30'),
wifi60Icon = document.querySelector('.js-wifi-60'),
wifiFullIcon = document.querySelector('.js-wifi-full');

const SHOW_WIFI_STATE = 'js-show-wifi-state';

function updateConnectionStatus() {
    if(connection.bandwidth === undefined){
        noWifiIcon.remove(SHOW_WIFI_STATE);
        wifi30Icon.remove(SHOW_WIFI_STATE);
        wifi60Icon.remove(SHOW_WIFI_STATE);
        wifiFullIcon.remove(SHOW_WIFI_STATE);

        console.log("can't load connection bandwidth");
    }else{
        wifiIcon.classList.add(SHOW_WIFI_STATE);
        if(connection.bandwidth >= 70){
            wifiFullIcon.classList.add(SHOW_WIFI_STATE);
        }else if(connection.bandwidth >= 50){
            wifi60Icon.classList.add(SHOW_WIFI_STATE);
        }else if(connection.bandwidth >= 30){
            wifi30Icon.classList.add(SHOW_WIFI_STATE);
        }else{
            noWifiIcon.add(SHOW_WIFI_STATE);
        }
        console.log("Connection bandwidth: " + connection.bandwidth + " MB/s");
    }
}

connection.addEventListener("change", updateConnectionStatus);
updateConnectionStatus();