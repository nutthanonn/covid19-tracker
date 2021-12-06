interface dataItem {
  txn_date: string;
  province: string;
  new_case: number;
  total_case: number;
  new_case_excludeabroad: number;
  total_case_excludeabroad: number;
  new_death: number;
  total_death: number;
  update_date: string;
}

export interface TimeLineCaseStoreInterface {
  month: string;
  data: dataItem[];
}
