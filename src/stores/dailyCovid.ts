import { observable, action } from "mobx";
import DialyNews from "../api/dailyApi";

export class DialyCovidImpl {
  @observable data = [];

  @action
  async dataCovid() {
    const res = await DialyNews();
    this.data = res;
  }
}

export const dialyStore = new DialyCovidImpl();
