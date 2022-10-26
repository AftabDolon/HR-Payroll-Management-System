import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  name!: '';
  price!: '';
quantity!: '';

subtotal=0;

  values:any = [{
    name:this.name,
    price:this.price,
    
   
  }];
  ngOnInit() {

  }
//remove input field method
  removevalue(i: number){ this.values.splice(i,1);}
  
//add input filed method
  addvalue(){ this.values.push({});
  
 }

  // onSubmit() {
  //   console.log(this.values);

  //   for (let i = 0; i < this.values.length; i++) {
  //      this.subtotal += Number(this.values[i].price);
  //   }
  //   console.log(this.subtotal);
    
  //   }

    // addTest() {
    //   this.values.push(JSON.parse(JSON.stringify(this.fruit)));
    //   console.log(this.values);
      
    //   }

}
