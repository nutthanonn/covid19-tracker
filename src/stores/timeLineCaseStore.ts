import { observable, makeObservable, action } from "mobx";
import { TimeLineCaseStoreInterface } from "../interfaces/dataCaseAll";
import TimeLineCaseAll from "../api/timelineCaseAll";

export class TimeLineCaseAllStoreImpl {
  @observable dataCaseAll: TimeLineCaseStoreInterface[] = [];
  @observable typeChart: string = "default";

  constructor() {
    makeObservable(this);
  }

  @action
  async data() {
    const res = await TimeLineCaseAll();
    this.dataCaseAll = res;
  }

  @action
  changeTypeChart(type: string) {
    this.typeChart = type;
  }

  @action
  yearData() {
    const CaseperMonth: number[] = [];
    this.dataCaseAll.forEach((item) => {
      let totalperMonth = item.data.reduce(
        (sum, itemIndata) => sum + itemIndata.new_case,
        0
      );
      if (item.data.length > 0) {
        CaseperMonth.push(totalperMonth);
      }
    });

    return CaseperMonth;
  }

  @action
  rangeMonthData() {
    const month: string[] = [];
    this.dataCaseAll.forEach((item) => {
      if (item.data.length !== 0) {
        month.push(item.month);
      }
    });
    return month;
  }

  @action
  monthData() {
    if (this.typeChart === "default") {
      return this.yearData();
    } else {
      const dataperday: number[] = [];
      this.dataCaseAll.forEach((item) => {
        if (item.month === this.typeChart) {
          item.data.forEach((e) => {
            dataperday.push(e.new_case);
          });
        }
      });
      return dataperday;
    }
  }

  @action
  rangeDayData() {
    const day: string[] = [];
    if (this.typeChart === "default") {
      return this.rangeMonthData();
    } else {
      this.dataCaseAll.forEach((item) => {
        if (item.month === this.typeChart) {
          item.data.forEach((index) => {
            day.push(index.txn_date.slice(8, 10));
          });
        }
      });
      return day;
    }
  }
}

export const timelineCaseStore = new TimeLineCaseAllStoreImpl();
