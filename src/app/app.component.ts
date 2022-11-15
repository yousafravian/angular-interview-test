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

  }
  NewVal:string = ''

  onFilterSelected(filter: string, type: string) { 
    console.log(filter);
    if(filter === 'Active'){
      console.log('selected Active');
      
      this.surveyList.map((value) =>{
        console.log(value);
        if(value.status === 'Active'){
          console.log(value, 'Filter Active');
          this.surveyList = []
          this.surveyList.push(value)
        }
      })
      
    }
    if(filter === 'Completed'){
      console.log('selected completed');
      this.surveyList.map((value) =>{
        if(value.status === 'Completed'){
          console.log('selected completed1');
          this.surveyList = []
          this.surveyList.push(value)
          console.log('selected completed2');
        }
      })
      
    }
    if(filter === 'Development'){
      console.log('selected Development');
      this.surveyList.map((value) =>{
        if(value.category === 'Development'){
          this.surveyList = []
          this.surveyList.push(value)
        }
      })
      
    }
    if(filter === 'Workplace'){
      console.log('selected Workplace');
      this.surveyList.map((value) =>{
        if(value.category === 'Workplace'){
          this.surveyList = []
          this.surveyList.push(value)
        }
      })
      
    }
    if(filter === 'Hardware'){
      console.log('selected Hardware');
      this.surveyList.map((value) =>{
        if(value.category === 'Hardware'){
          this.surveyList = []
          this.surveyList.push(value)
        }
      })
      
    }
  }
}
