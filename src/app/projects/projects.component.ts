import { Component, OnInit } from '@angular/core';
import { PracticeService} from '../practice.service';

@Component({
  selector: 'irh-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private paracticeService: PracticeService) {}

  practiceApps: any = [];

  ngOnInit() {
    this.practiceApps = this.paracticeService.practiceApps;
  }

}
