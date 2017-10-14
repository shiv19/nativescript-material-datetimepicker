# nativescript-material-datetimepicker

This plugin is a wrapper around `android.app.DatePickerDialog` for Android.
It is not compatible with iOS yet.

## Installation

```javascript
tns plugin add nativescript-material-datetimepicker
```

## Usage 

NativeScript Core

```js

 const MDTPicker = require("nativescript-material-datetimepicker").MaterialDatetimepicker();

 const mDtpicker = new MDTPicker();

 // Pick Date
 exports.selectDate = function() {
    mDtpicker.pickDate()
      .then((result) => {
        this.set("date", "Date is: " + result.day + "-" + result.month + "-" + result.year);
      })
      .catch((error) => {
        console.log("Error: " + error);
      })
 }

 // Pick Time
 exports.selectTime = function() {
    this.materialDatetimepicker.pickTime()
      .then((result) => {
        this.set("time", "Time is: " + result.hour + ":" + result.minute);
      })
      .catch((error) => {
        console.log("Error: " + error);
      })
 }

```

## API

`pickDate(): Promise<{}>;`

Returns a promise that resolves to date object
date: {
    day: number,
    month: number,
    year: number
}

`pickTime(is24HourView?): Promise<{}>;`

Returns a promise that resolves to time object
time: {
    hour: number,
    minute: number
}

Passing `true` to this API, shows a 24hr View timepicker.
    
## License

Apache License Version 2.0, January 2004
