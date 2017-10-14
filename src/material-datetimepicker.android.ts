import * as app from "tns-core-modules/application";

declare var com: any;
const Calendar = java.util.Calendar;

export class MaterialDatetimepicker {
    constructor() {}

    public show() {
        return new Promise((resolve, reject) => {
          let now = Calendar.getInstance();
          try {
            let dpd = new android.app.DatePickerDialog(app.android.foregroundActivity,
              new android.app.DatePickerDialog.OnDateSetListener({
                  onDateSet: function(view, year, monthOfYear, dayOfMonth) {
                      const date = dayOfMonth+"/"+(++monthOfYear)+"/"+year;
                      resolve(date);
                  }
              }), now.get(Calendar.YEAR),
                  now.get(Calendar.MONTH),
                  now.get(Calendar.DAY_OF_MONTH));
            dpd.show();

            // resolve(now.get(Calendar.DAY_OF_MONTH) + ' ' + (now.get(Calendar.MONTH) + 1) + ' ' + now.get(Calendar.YEAR));
          } catch (err) {
            reject(err);
          }
        });
      }

}
