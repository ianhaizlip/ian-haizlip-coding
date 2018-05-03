import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';


@Component({
  selector: 'irh-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) {

    // this.urlSF = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/document/d/e/2PACX-1vS5fuMuwpv3PcWR
    // KexnTj5-0xUR2m2azluYFk4owYh3Rk0ybNHTVQMgHKDXH4d8deKqPMPPVu4oCTFV/pub?embedded=true`);
    // this.urlDEN = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/document/d/e/2PACX-1vQ5GLjo6zV2JIO
    // XajzZPHmQ8zLsvuRKgefIxkat5e4EfgGQMYyqUXhEeyeWqJtRYod7lGSLZ0Jg2QtJ/pub?embedded=true`);
    // console.log(this.resumeUrl);
  }

  urlSF: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/document/d/e/2PACX-1vS5fuMuwpv3PcWRKexnTj5-0xUR2m2azluYFk4owYh3Rk0ybNHTVQMgHKDXH4d8deKqPMPPVu4oCTFV/pub?embedded=true`);
  urlDEN: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://docs.google.com/document/d/e/2PACX-1vQ5GLjo6zV2JIOXajzZPHmQ8zLsvuRKgefIxkat5e4EfgGQMYyqUXhEeyeWqJtRYod7lGSLZ0Jg2QtJ/pub?embedded=true`);

  resumeSF: any = {
    location: 'San Francisco',
    html: this.urlSF
  };

  resumeDEN: any = {
    location: 'Denver',
    html: this.urlDEN
  };

  resumeUrl: SafeResourceUrl;
  resumeLocation: string;

  changeResume(currentResume: any): void {
    this.resumeLocation = currentResume.location;
    this.resumeUrl = currentResume.html;
  }


  ngOnInit() {
    this.resumeLocation = this.resumeDEN.location;
    this.resumeUrl = this.resumeDEN.html;
    console.log(this.resumeUrl);
  }

}
