<template>
  <div class="datepicker">
    <input
      class="loong-date-input"
      type="text"
      :width="width"
      ref="dateInput"
      v-model="currentValue"
    />
    <div class="loong-date-tablec">
      <div class="calendar">
        <div class="calendar-header flex">
          <div class="step-btn" @click="prev">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-rilizuo" />
            </svg>
          </div>
          <div @click="toggle">
            <div
              class="header-month-year btn-active"
              v-if="toggleFlag == false"
            >{{Month}}&nbsp;&nbsp;&nbsp;{{Year}}</div>
            <div class="header-year btn-active" v-else>{{Year}}</div>
          </div>
          <div class="step-btn" @click="next">
            <svg class="icon" aria-hidden="true">
              <use href="#icon-riliyou" />
            </svg>
          </div>
        </div>
        <div v-if="!toggleFlag" class="date-week">
          <span v-for="day in DayI18n" :key="day">{{day}}</span>
        </div>
        <!-- 日期 6*7 -->
        <div v-if="toggleFlag == false" class="date-body">
          <span
            v-for="(day,index) in dateArray"
            :key="index"
            :class="{'date-now':isNow(day),'month-now':isMonth(day),'checked':index == checked}"
            @click="checkDate(day,index)"
          >{{day[2]}}</span>
        </div>
        <!-- 月份 3*4 -->
        <div v-else class="date-body-month">
          <span v-for="(mon,index) in DateI18n" :key="index" @click="checkMonth(index)">{{mon}}</span>
        </div>
      </div>
	  <div class="date-time-container">
		  
	  </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "loongDate",
  props: {
    data: {
      type: Object
    }
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
          December: "Dec"
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
          December: "12月"
        }
      },
      loongDayI18n: {
        en: {
          Sunday: "Sun",
          Monday: "Mon",
          Tuesday: "Tue",
          Wednesday: "Wed",
          Thursday: "Thu",
          Friday: "Fri",
          Saturday: "Sat"
        },
        zh: {
          Sunday: "日",
          Monday: "一",
          Tuesday: "二",
          Wednesday: "三",
          Thursday: "四",
          Friday: "五",
          Saturday: "六"
        }
      },
      DateI18n: {},
      DayI18n: {},
      name: this.data.name || "",
      width: this.data.width || "",
      type: this.data.type || "default",
      currentValue:
        moment(this.data.date).format("YYYY-MM-DD HH:mm:ss") ||
        moment().format("YYYY-MM-DD hh:mm:ss"), //当前时间值 默认为系统时间
      currentTime: [], //当前时间
      currentDate: [], //当前日期
      dateArray: [], //当月日期列表
      firstDate: [], //当月1号
      toggleFlag: false, //对应toggle方法 默认日期
      Month: "",
      Year: "",
      checked: null
    };
  },
  created() {
    this.getLang();
  },
  mounted() {
    this.initData();
  },
  methods: {
    getLang() {
      const lang = localStorage.getItem("lang");
      if (lang === "zh" || lang === "zh-CN") {
        this.DateI18n = this.loongDateI18n.zh;
        this.DayI18n = this.loongDayI18n.zh;
      } else {
        this.DateI18n = this.loongDateI18n.en;
        this.DayI18n = this.loongDayI18n.en;
      }
    },
    initData() {
      //初始化数据
      this.currentTime = moment(this.data.date)
        .format("hh:mm:ss")
        .split(":");
      this.currentDate = moment(this.data.date)
        .format("YYYY-MM-DD")
        .split("-");
      this.firstDate = moment(this.currentDate.join("-"))
        .startOf("month")
        .format("YYYY-MM-DD")
        .split("-");
      this.getMonth(this.currentDate[1], this.currentDate[0]);
      this.getDateArray();
    },
    toggle() {
      //切换选择月份还是选择日期
      this.toggleFlag = !this.toggleFlag;
    },
    prev() {
      //上一个月或者上一年
    },
    next() {
      //下一个月或者下一年
    },
    getMonth(month, year) {
      this.Month = this.DateI18n[Object.keys(this.DateI18n)[month - 1]];
      this.Year = year;
    },
    getDateArray() {
      let day = moment(this.firstDate.join("-")).day();
      let list = [];
      for (let i = 0; i < 42; i++) {
        let date = null;
        if (day == 0) {
          date = moment(this.firstDate.join("-")).add(i - 7, "days");
        } else {
          date = moment(this.firstDate.join("-")).add(i - day, "days");
        }
        list.push(date.format("YYYY-MM-DD").split("-"));
      }
      this.dateArray = list;
    },
    isNow(day) {
      if (this.firstDate[1] != this.currentDate[1]) {
        return false;
      }
      for (let i = 0; i < 3; i++) {
        if (day[i] != this.currentDate[i]) {
          return false;
        }
      }
      return true;
    },
    isMonth(day) {
      if (day[0] != this.firstDate[0]) {
        return false;
      }
      if (day[1] != this.firstDate[1]) {
        return false;
      }
      return true;
    },
    checkDate(day, index) {
      this.checked = index;
	  let checkDay = day.join("-");
	  let checkTime = moment().format("HH:mm:ss");
      this.currentValue = checkDay +" "+checkTime;
    },
    checkMonth(index) {
      let firstDate = this.firstDate;
      let month = parseInt(this.loongDateI18n.zh[index]);
      month = month < 10 ? "0" + String(month) : String(month);
      this.Month = this.DateI18n[index];
      firstDate.splice(1, 1, month);
      this.toggle();
      this.getDateArray();
    }
  }
};
</script>
<style lang="less" scroped>
.loong-date-input {
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
  &:hover {
    border: 1px solid #1188dd;
  }
}
.loong-date-tablec {
  background: #fff;
  position: absolute;
  z-index: 999;
  padding: 0 5px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.19);
  border-radius: 1px;
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
  color: #333333;
  text-align: center;
  background-color: #fff;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  .header-month-year,
  .header-year {
    width: 180px;
    height: 28px;
    margin-left: 3px;
    font-size: 12px;
    font-family: PingFangSC-Medium;
    line-height: 28px;
    color: rgba(51, 51, 51, 1);
    cursor: pointer;
    font-weight: bold;
  }
  .header-year {
    width: 100px;
  }
  .btn-active {
    background: rgba(238, 247, 255, 1);
    border-radius: 2px;
  }
}
.step-btn {
  width: 30px;
  height: 28px;
  margin: 0 auto;
  line-height: 28px;
  border-radius: 2px;
  color: #1188dd;
  cursor: pointer;
}
.date-week,
.date-body,
.date-body-month {
  width: 271px;
  line-height: 28px;
  span {
    display: inline-block;
    width: 38px;
    cursor: pointer;
  }
}
.date-body-month {
  width: 152px;
}
.date-now {
  color: #1188dd;
}
.month-now {
  font-weight: bold;
}
.checked {
  background-color: #1188dd;
  color: #fff;
  border-radius: 2px;
}
</style>