import { observable, makeObservable, action } from "mobx";
import { TimeLineCaseStoreInterface } from "../interfaces/dataCaseAll";
import TimeLineCaseAll from "../api/timelineCaseAll";

export class TimeLineCaseAllStoreImpl {
  @observable dataCaseAll: TimeLineCaseStoreInterface[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  async data() {
    const res = await TimeLineCaseAll();
    this.data = res;
  }
}
