import axios from "axios";

export default async function ProvincesCovidApi() {
  const res = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"
  );
  return res.data;
}
