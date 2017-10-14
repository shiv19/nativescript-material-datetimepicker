import { Observable } from 'tns-core-modules/data/observable';
import { MaterialDatetimepicker } from 'nativescript-material-datetimepicker';

export class HelloWorldModel extends Observable {
  public message: string;
  private materialDatetimepicker: MaterialDatetimepicker;

  constructor() {
    super();

    this.materialDatetimepicker = new MaterialDatetimepicker();
    this.message = this.materialDatetimepicker.message;
  }
}
