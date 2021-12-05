import { observable, makeObservable, action } from "mobx";
import { TimeLineCaseStoreInterface } from "../interfaces/dataCaseAll";

export class TimeLineCaseAllStoreImpl {
  @observable dataCaseAll: TimeLineCaseStoreInterface[] = [];

  constructor() {
    makeObservable(this);
  }
}
