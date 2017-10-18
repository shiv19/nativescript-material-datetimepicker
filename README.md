# nativescript-material-datetimepicker [![Build Status](https://travis-ci.org/shiv19/nativescript-material-datetimepicker.svg?branch=master)](https://travis-ci.org/shiv19/nativescript-material-datetimepicker) [![npm](https://img.shields.io/npm/dt/express.svg)](https://www.npmjs.com/package/nativescript-material-datetimepicker)

This plugin is a wrapper around `android.app.DatePickerDialog` for Android.
It is not compatible with iOS yet.

## Screenshots

### Date Picker
<img src="https://github.com/shiv19/nativescript-material-datetimepicker/blob/master/assets/datepicker.jpeg?raw=true" height="320" > 

### Time Picker
<img src="https://github.com/shiv19/nativescript-material-datetimepicker/blob/master/assets/timepicker.jpeg?raw=true" height="320" > 

## Installation

```javascript
tns plugin add nativescript-material-datetimepicker
```

## Usage 

NativeScript Core

```js

const MDTPicker = require("nativescript-material-datetimepicker").MaterialDatetimepicker;

const mDtpicker = new MDTPicker();

// Pick Date
exports.selectDate = function() {
    mDtpicker.pickDate()
        .then((result) => {
            console.log("Date is: " + result.day + "-" + result.month + "-" + result.year);
        })
        .catch((error) => {
            console.log("Error: " + error);
        });
};

// Pick Time
exports.selectTime = function() {
    mDtpicker.pickTime()
        .then((result) => {
            console.log("Time is: " + result.hour + ":" + result.minute);
        })
        .catch((error) => {
            console.log("Error: " + error);
        });
};

```

## API

`pickDate(): Promise<{}>;`

Returns a promise that resolves to date object
```js
date: {
    day: number,
    month: number,
    year: number
}
```

`pickTime(is24HourView?): Promise<{}>;`

Returns a promise that resolves to time object
```js
time: {
    hour: number,
    minute: number
}
```
Passing `true` to this API, shows a 24hr View timepicker.
    
## License

Apache License Version 2.0, January 2004
