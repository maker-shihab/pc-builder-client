export default function fetchAllData(req, res) {
  const data = fetch("http://localhost:5000/api/v1/products").then((res) =>
    res.json()
  );
  // console.log(data);
  res.send(data);
}
