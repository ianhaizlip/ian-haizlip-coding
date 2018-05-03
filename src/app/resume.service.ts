import { Injectable } from '@angular/core';

@Injectable()
export class ResumeService {

  constructor() { }

  resumes: object = {
    sf: {
      location: 'San Francisco',
      html: 'https://docs.google.com/document/d/e/2PACX-1vQ5GLjo6zV2JIOXajzZPHmQ8zLsvuRKgefIxkat5e4EfgGQMYyqUXhEeyeWqJtRYod7lGSLZ0Jg2QtJ/pub?embedded=true'
    },
    den: {
      location: 'Denver',
      html: 'https://docs.google.com/document/d/e/2PACX-1vQ5GLjo6zV2JIOXajzZPHmQ8zLsvuRKgefIxkat5e4EfgGQMYyqUXhEeyeWqJtRYod7lGSLZ0Jg2QtJ/pub?embedded=true'
    },
  };


}
