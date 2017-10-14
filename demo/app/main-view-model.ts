import { Observable } from 'tns-core-modules/data/observable';
import { MaterialDatetimepicker } from 'nativescript-material-datetimepicker';

export class HelloWorldModel extends Observable {
  public date: string;
  public time: string;
  private materialDatetimepicker: MaterialDatetimepicker;

  constructor() {
    super();
    this.materialDatetimepicker = new MaterialDatetimepicker();
  }

  selectDate = function() {
    this.materialDatetimepicker.pickDate()
      .then((result) => {
        this.set("date", "Date is: " + result.day + "-" + result.month + "-" + result.year);
      })
      .catch((error) => {
        console.log("Error: " + error);
      })
  }

  selectTime = function() {
    this.materialDatetimepicker.pickTime()
      .then((result) => {
        this.set("time", "Time is: " + result.hour + ":" + result.minute);
      })
      .catch((error) => {
        console.log("Error: " + error);
      })
  }
}
