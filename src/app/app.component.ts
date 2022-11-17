import {Component, OnInit} from '@angular/core';
import {Survey} from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];

  status = 'status';
  category = "category";

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ]

  ngOnInit() {

    this.filteredList = JSON.parse(JSON.stringify(this.surveyList))

  }

  onFilterSelected(filter: string, type: string) {


    if (type === 'status') {

      this.filteredList.splice(0)

      this.surveyList.forEach(element => {

        if (filter === element.status){
          this.filteredList.push(element)
        }
        if (filter === 'All'){
          this.filteredList = JSON.parse(JSON.stringify(this.surveyList))
        } 
      });

    }

    if (type === 'category') {

      this.filteredList.splice(0)

      this.surveyList.forEach(element => {

        if (filter === element.category){
          this.filteredList.push(element)
        }

      });

    }
  }
}
