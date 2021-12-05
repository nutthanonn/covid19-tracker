import axios from "axios";

export default async function TimeLineCaseAll() {
  const res = await axios.get(
    "https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all"
  );
  return res.data;
}
