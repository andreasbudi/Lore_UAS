import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Place } from '../location/location.model';
import { Router } from '@angular/router';
import { DataService } from '../location/data.service';

declare var google:any;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterViewInit {
  @ViewChild('mapElement', {static: true}) mapNativeElement: ElementRef;
  @ViewChild('autoCompleteInput', {static: true}) inputNativeElement: any;
  directionForm: FormGroup;
  test = [];
  lala : Place[];

  ngAfterViewInit(): void {
    var pos = {
      lat: -6.257566, lng: 106.618279
    };

    const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
      center: pos,
      zoom: 17
    });

    /*location object*/
    // map.setCenter(pos);
    const icon = {
      url: 'assets/icon/u.png', // image url
      scaledSize: new google.maps.Size(50, 50), // scaled size
    };
    var marker = new google.maps.Marker({
      position: pos,
      map: map,
      title: 'Hello World!',
      icon: icon
    });
    
    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById('infowindow-content');
    infowindow.setContent(infowindowContent);

    const autocomplete = new google.maps.places.Autocomplete(this.inputNativeElement.nativeElement as HTMLInputElement);
    autocomplete.addListener('place_changed', () => {

      infowindow.close();
      marker.setVisible(false);

      const place = autocomplete.getPlace();
      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: ' + place.name );
        return;
      }

      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);  // Why 17? Because it looks good.
      }

      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      let address = '';

      if (place.address_components) {
        address = [
          (place.address_components[0] && place.address_components[0].short_name || ''),
          (place.address_components[1] && place.address_components[1].short_name || ''),
          (place.address_components[2] && place.address_components[2].short_name || '')
        ].join(' ');
      }

      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map, marker);

      const selectedloc = {
        id: place.place_id,
        name: place.name,
        address: place.formatted_address,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        types: place.types,
        rating: place.rating
      };
      console.log(place);
      // console.log(selectedloc);
      this.test.push(
        selectedloc
      );
      // this.router.navigate(['/','location-details',place.place_id]);
      // this.lala.push(
      //   place.place_id,
      //   place.name,
      //   place.formatted_address,
      //   place.geometry.location.lat(),
      //   place.geometry.location.lng(),
      //   place.types,
      //   place.rating
      // );
      // console.log(test.formatted_address);
      // console.log(test.url);
      // console.log(test.geometry.location.lat());
      // console.log(test.geometry.location.lng());
      // console.log(test.geometry);
      // console.log(test.formatted_phone_number);
      // console.log(test.name);
      // console.log(test.opening_hours);
      // console.log(test.place_id);
      // console.log(test.rating);
      // console.log(test.types);
      // console.log(test.website);
    });
    // map.addListener('click', function(e) {
    //   map.panTo(e.latLng);
    //   var geocoder = new google.maps.Geocoder;

    //   geocoder.geocode({'location': e.latlng}, function(results, status) {
    //       if (status === google.maps.GeocoderStatus.OK) {
    //         if (results[1]) {
    //           console.log(results[1].place_id);
    //         } else {
    //           window.alert('No results found');
    //         }
    //       } else {
    //         window.alert('Geocoder failed due to: ' + status);
    //       }
    //     });
    // });
  }

  constructor(private fb: FormBuilder, private storage: Storage, private dataService: DataService, private router: Router) {
    this.createDirectionForm();
  }

  ngOnInit() {
  }

  createDirectionForm() {
    this.directionForm = this.fb.group({
      placeId:  [''],
      name:  [''],
      address:  [''],
      lat:  [''],
      lng:  [''],
      types:  [''],
      rating: ['']
    });
  }

  onSave(){
    return this.test;
  }

  sendDetails(){
    this.dataService.setData(this.test[0], this.test);
    this.router.navigate(['/','location-details',this.test[0]['id']]);
    localStorage.setItem('Place', JSON.stringify(this.test));
    // console.log(JSON.parse(localStorage.get('id')));
    // localStorage.get("id").then((output) => {
    //   console.log(output);
  // })
  }
}
