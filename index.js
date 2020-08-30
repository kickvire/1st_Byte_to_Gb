const result = () => {
  let temp = document.getElementById("data").value;
  temp = parseInt(temp);
  if (isFinite(temp)) {
    temp = temp / (1024 * 1024 * 1024);
    let print = `The data in gb is ${temp}`;
    document.getElementById("result").innerHTML = print;
  }
};
result();
