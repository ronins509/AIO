<template>
  <div class="date"></div>
</template>
<script>
export default {
  name: "loongDate",
  props:{
	  date:Object
  },
  data() {
    return {
      loongDateI18n: {
        en: {
          January: "Jan",
          February: "Feb",
          March: "Mar",
          April: "Apr",
          May: "May",
          June: "Jun",
          July: "Jul",
          August: "Aug",
          September: "Sept",
          October: "Oct",
          November: "Nov",
          December: "Dec",
          Sunday: "Sun",
          Monday: "Mon",
          Tuesday: "Tue",
          Wednesday: "Wed",
          Thursday: "Thu",
          Friday: "Fri",
          Saturday: "Sat"
        },
        zh: {
          January: "1月",
          February: "2月",
          March: "3月",
          April: "4月",
          May: "5月",
          June: "6月",
          July: "7月",
          August: "8月",
          September: "9月",
          October: "10月",
          November: "11月",
          December: "12月",
          Sunday: "日",
          Monday: "一",
          Tuesday: "二",
          Wednesday: "三",
          Thursday: "四",
          Friday: "五",
          Saturday: "六"
        }
	  },
	  Datei18n:{}
	  
    };
  },
  created() {
    this.getLang();
  },
  methods: {
    getLang() {
	  const lang = localStorage.getItem("lang");
      if (lang === "zh" || lang === "zh-CN") {
		  this.Datei18n = this.loongDateI18n.zh;
        // return Datei18n;
      } else {
		  this.Datei18n = this.loongDateI18n.en;
        // return Datei18n;
      }
    }
    // dateI18n(code) {
    //   const lang = localStorage.getItem("lang");
    //   if(lang === 'zh' || lang === 'zh-CN'){
    // 	//   console.log(code)
    // 	  return this.loongDateI18n.lang.code
    //   }
    // }
  }
};
</script>
<style lang="less">
.datepicker * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.datepicker .clear-date-icon-span {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 997;
  display: inline-block;
  width: 30px;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  color: #ced4da;
}

.datepicker .vh {
  visibility: hidden;
}

.datepicker .btn-active {
  background: rgba(238, 247, 255, 1);
  border-radius: 2px;
}

.datepicker .btn-active:hover {
  background: rgba(221, 238, 255, 1);
}
.datepicker .btn-active:active {
  background: rgba(204, 229, 255, 1);
}

.datepicker .header-month-year {
  width: 188px;
  height: 28px;
  margin-left: 3px;
  font-size: 12px;
  font-family: PingFangSC-Medium;
  line-height: 28px;
  color: rgba(51, 51, 51, 1);
}

.datepicker .step-btn {
  width: 30px;
  height: 28px;
  border-radius: 2px;
  color: #1188dd;
}

.datepicker .step-btn:hover {
  background: rgba(248, 249, 250, 1);
}

.datepicker #prev .step-btn {
  margin-left: 4px;
  padding-top: 2px;
}

.datepicker #next .step-btn {
  margin-left: 7px;
  padding-top: 2px;
}

.datepicker #prev svg,
.datepicker #next svg {
  width: 18px;
  height: 24px;
}

.datepicker .month-calendar .calendar {
  width: 200px;
}

.datepicker .month-calendar .calendar thead tr th {
  padding-bottom: 10px;
}

.datepicker .month-calendar #currM {
  height: 28px;
  margin-left: 13px;
  font-size: 12px;
  font-family: PingFangSC-Medium;
  line-height: 28px;
  color: rgba(51, 51, 51, 1);
  margin: 0 -10px;
}

.datepicker .month-calendar #prev .step-btn {
  margin-left: 0px;
  padding-top: 2px;
}

.datepicker .month-calendar #next .step-btn {
  margin-left: 20px;
  padding-top: 2px;
}

.calendar {
  position: relative;
  font-family: "Century Gothic", "Segoe UI", Calibri, Arial;
  font-size: 12px;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  z-index: 4;
  width: 271px;
  color: #333333;
  text-align: center;
  background-color: #fff;
  font-size: 12px;
  font-family: MicrosoftYaHei;
}
.calendar tr {
  width: 100%;
}
.calendar th,
.calendar td {
  text-align: center;
  -webki-ttransition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 14.285%;
}

.calendar td.month-td {
  width: 25%;
  height: 26px;
}

.calendar span {
  display: block;
  height: 24px;
  width: 35px;
  line-height: 24px;
  margin-left: 2px;
  margin-top: 1px;
}
.calendar .month {
  width: 40px;
  height: 24px;
}

.datepicker .date-time-split {
  border: 0.5px solid rgb(238, 238, 238);
  border-radius: 1px;
  margin: 0 -5px;
}

.calendar .pMDate,
.calendar .nMDate {
  color: #999999;
}
.calendar .date,
.calendar .pMDate,
.calendar .nMDate,
.calendar .month {
  cursor: pointer;
}
.calendar .date.disabled,
.calendar .pMDate.disabled,
.calendar .nMDate.disabled {
  cursor: not-allowed;
}
.calendar .date:not(.disabled) span:hover,
.calendar .pMDate:not(.disabled) span:hover,
.calendar .nMDate:not(.disabled) span:hover,
.calendar .month span:hover,
.calendar .month:hover {
  background: rgba(248, 249, 250, 1);
  border-radius: 2px;
}
.calendar .date:not(.disabled) span:active,
.calendar .pMDate:not(.disabled) span:active,
.calendar .nMDate:not(.disabled) span:active,
.calendar .month span:active,
.calendar .month:active {
  background: rgba(17, 136, 221, 1);
  color: #fff;
  border-radius: 2px;
}
.calendar .selected {
  background-color: #1188dd !important;
  color: #fff !important;
  border-radius: 2px;
}
.calendar tr:first-child th {
  padding-top: 10px;
}
.calendar tr:first-child th {
  cursor: pointer;
  color: #000;
}
.calendar tr:first-child th:hover {
  color: #22a7f0;
}
.calendar tr:first-child th:active {
  color: #22a7f0;
}
.calendar thead tr:nth-child(2) th {
  color: #666666;
  padding: 8px 3px;
}
.calendar #today {
  text-align: center;
  cursor: pointer;
  color: #22a7f0;
  padding: 10px 6px;
}
.calendar #today:hover {
  color: #80a7dd;
}
.calendar #today:active {
  color: #000;
}
.calendar #currDay {
  color: #22a7f0;
}
/*.datepicker {
	background: url('./icon.png') transparent right no-repeat;
	background-size: contain;
}*/

.loong-date-tablec {
  background: #fff;
  display: none;
  position: absolute;
  z-index: 999;
  padding: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.19);
  border-radius: 1px;
}
.datepicker {
  position: absolute;
  left: 0;
  display: "none";
  box-shadow: "0 4px 6px 1px rgba(0, 0, 0, 0.14)";
}
.date-time-container {
  width: 271px;
  height: 50px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: flex-start;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  padding-left: 5px;
}

.sel-container {
  color: #1455a2;
  position: relative;
}

.sel-select {
  width: 63px;
  height: 32px;
  line-height: 30px;
  color: rgba(51, 51, 51, 1);
  border-radius: 2px;
  padding-left: 10px;
  border: 1px solid rgba(206, 212, 218, 1);
}

.sel-select-active {
  border: 1px solid rgba(17, 136, 221, 1);
}

.sel-option {
  position: absolute;
  top: 32px;
  z-index: 999;
  width: 63px;
  height: 110px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1px;
  overflow: auto;
}

.dn {
  display: none;
}

.sel-option-item {
  height: 22px;
  line-height: 22px;
  padding-left: 10px;
  font-size: 12px;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
}

.sel-option-item:hover {
  color: rgba(17, 136, 221, 1);
  cursor: pointer;
}

.split-hour-minute {
  margin: 0 6px;
  font-size: 12px;
  line-height: 30px;
  height: 32px;
}

.datepicker .confirm-btn {
  width: 36px;
  height: 32px;
  /*line-height: 32px;*/
  color: #1188dd;
  font-size: 12px;
  cursor: pointer;
  /*padding: 0 10px;*/
  margin-left: 10px;
  background: rgba(238, 247, 255, 1);
  border-radius: 2px;
}
.datepicker .confirm-btn:hover {
  background: rgba(221, 238, 255, 1);
}
.datepicker .confirm-btn:active {
  background: rgba(204, 229, 255, 1);
}
.datepicker .confirm-icon {
  width: 16px;
  height: 16px;
}
.datepicker .loong-date-input {
  padding: 0px;
  padding-left: 10px;
  border-radius: 2px;
  border: 1px solid rgba(206, 212, 218, 1);
  outline: none;
  height: 32px;
  line-height: 32px;
  box-sizing: border-box;
  font-size: 12px;
  min-width: 180px;
  background: rgba(255, 255, 255, 1);
}

.datepicker .loong-date-input:hover {
  border: 1px solid #1188dd;
}
</style>