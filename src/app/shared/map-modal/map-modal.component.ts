import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
declare var google;

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit {
  map;
  
  lat = -6.257566;
  lng = 106.618279;
  mapElementRef: any;
  renderer: any;

  // @ViewChild('mapElement') mapElement;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
    // this.ngAfterViewInit();
  }
  
  onChooseLocation(event: any){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

  // ngAfterViewInit() {
  //       this.getGoogleMaps().then((googleMaps) => {
  //           const mapElement = this.mapElementRef.nativeElement;
  //           const map = new googleMaps.Map(mapElement, {
  //             center: { lat: -6.257566, lng: 106.618279 },
  //             zoom: 16,
  //           });
  //           googleMaps.event.addListenerOnce(map, 'idle', () => {
  //             this.renderer.addClass(mapElement, 'visible');
  //           });
  //           const marker = new googleMaps.Marker({ position: { lat: this.lat, lng: this.lng }, map });
  //           console.log(marker);
  //           map.addListener('click', event => {
  //             const selectedCoords = {
  //               lat: event.latLng.lat(),
  //               lng: event.latLng.lng(),
  //             };
  //             this.modalCtrl.dismiss(selectedCoords);
  //           });
  //         }).catch(err => {
  //           console.log(err);
  //         });      
  //     }    

  // ngAfterContentInit(): void {
  //   this.map = new google.maps.Map(
  //     this.mapElement.nativeElement,{
  //       center: {lat: -6.257566, lng: 106.618279},
  //       zoom: 8
  //     });
  // }

  // private getGoogleMaps(): Promise<any> {
  //       const win = window as any;
  //       const googleModule = win.google;
  //       if (googleModule && googleModule.maps) {
  //         return Promise.resolve(googleModule.maps);
  //       }
  //       return new Promise((resolve, reject) => {
  //         const script = document.createElement('script');
  //         script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.mapsAPIKey}&callback=initMap`;
  //         script.async = true;
  //         script.defer = true;
  //         document.body.appendChild(script);
  //         script.onload = () => {
  //           const loadedGoogleModule = win.google;
  //           if (loadedGoogleModule && loadedGoogleModule.maps) {
  //             resolve(loadedGoogleModule.maps);
  //           } else {
  //             reject('Google maps SDK is not available');
  //           }
  //         };
  //       });
  //     }
    

}
