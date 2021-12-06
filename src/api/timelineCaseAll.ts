import axios from "axios";

export default async function TimeLineCaseAll() {
  const yearDataAll: any = [];
  const month: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const res = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all"
  );
  month.forEach((monthNo, index) => {
    const newData = res.data.filter((item: any) => {
      return parseInt(item.txn_date.slice(5, 7)) === index + 1;
    });

    let obj = { month: monthNo, data: [...newData] };
    yearDataAll.push(obj);
  });

  return yearDataAll;
}
