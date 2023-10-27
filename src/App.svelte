<script lang="ts">
import NeedleEngine from "./NeedleEngine.svelte";
import Menu from "./Menu.svelte";
import { CameraSpot } from "./scripts/CameraSpot";


let cameraSpots: Array<CameraSpot> = [];
let selectedSpot: CameraSpot | null = null;

//const ws = new WebSocket('ws://localhost:8080');
const ws = new WebSocket('wss://game.vsldemos.com/api/v1/gamesocket/123869220779813167');

ws.addEventListener('open', ()=> {
    console.log('OPENED WEB SOCKET CONNECTION');
    //ws.send("This is a message from WebsocketManager");
  });


  ws.addEventListener('message', (event)=> {
    console.log('Message from server', event.data);

  });


</script>

<NeedleEngine bind:cameraSpots={cameraSpots} bind:selectedSpot={selectedSpot}></NeedleEngine>
<Menu bind:cameraSpots={cameraSpots} bind:selectedSpot={selectedSpot}></Menu>
