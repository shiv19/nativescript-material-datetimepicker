import { Observable } from 'tns-core-modules/data/observable';
import { MaterialDatetimepicker } from 'nativescript-material-datetimepicker';

export class HelloWorldModel extends Observable {
  public message: string;
  private materialDatetimepicker: MaterialDatetimepicker;

  constructor() {
    super();
    this.materialDatetimepicker = new MaterialDatetimepicker();
  }

  selectDate = function() {
    this.materialDatetimepicker.show()
      .then((result) => {
        this.set("message", "Date is: " + result);
      })
      .catch((error) => {
        console.log("Error: " + error);
      })
  }
}
