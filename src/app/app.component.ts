import { Component, OnInit } from '@angular/core';
import { Survey } from "../types/Survey";

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
  activeFilters: { status: string; category: string; } = {
    status: null,
    category: null,
  };

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
  ];

  tempSurveyList: Survey[];

  ngOnInit() {
    this.filteredList = JSON.parse(JSON.stringify(this.surveyList));
  }

  onFilterSelected(filter: string, type: string) {

    if (type === 'status') {
      this.activeFilters.status = filter === 'All' ? null : filter;
    }
    else {
      this.activeFilters.category = filter;
    }
    this.updateSurveyList();
  }

  updateSurveyList(): void {
    this.filteredList = JSON.parse(JSON.stringify(this.surveyList));
    if (!!this.activeFilters.status)
      this.filteredList = this.surveyList.filter((survey) => survey.status === this.activeFilters.status);
    if (!!this.activeFilters.category)
      this.filteredList = this.filteredList.filter((survey) => survey.category === this.activeFilters.category);
  }
}
