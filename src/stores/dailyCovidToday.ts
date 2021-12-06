import { observable, action, makeObservable } from "mobx";
import DialyNews from "../api/dailyApi";
import ProvincesCovidApi from "../api/provincsCovidApi";

import { DialyCovidValues } from "../interfaces/dailyCovid";
import { DialyCovidProvincesValues } from "../interfaces/dailyCovidProvinces";

export class DialyCovidImpl {
  @observable data: DialyCovidValues[] = [];
  @observable dataProvinces: DialyCovidProvincesValues[] = [];
  @observable setProvince: string = "ทั้งหมด";

  constructor() {
    makeObservable(this);
  }

  @action
  async dataCovid() {
    const res = await DialyNews();
    this.data = res;
  }

  @action
  async dataCovidProvincesToday() {
    const res = await ProvincesCovidApi();
    this.dataProvinces = res;
  }

  @action
  province() {
    const provinces = this.dataProvinces.map((item) => {
      return item.province;
    });
    return provinces;
  }

  @action
  setNewProvince(newProvinces: string) {
    this.setProvince = newProvinces;
  }

  @action
  changeProvinces() {
    if (this.setProvince === "ทั้งหมด") {
      const defaultValue = this.data;
      return defaultValue[0];
    }
    const provinces = this.dataProvinces.filter((item) => {
      return item.province === this.setProvince;
    });

    var newData = [{ ...provinces[0], new_recovered: 0, total_recovered: 0 }];
    const update = newData[0];
    return update;
  }
}

export const dialyStore = new DialyCovidImpl();
