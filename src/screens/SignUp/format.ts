export function formatCPF(text: string) {
  if (!text) return "";
  
  let num = text.replace(new RegExp("[^0-9]", "g"), "");
  let res = num.substr(0, 3);
  if (num.length > 3) res += "." + num.substr(3, 3);
  if (num.length > 6) res += "." + num.substr(6, 3);
  if (num.length > 9) res += "-" + num.substr(9, 2);
  return res;
}

export function formatPhone(text: string) {
  if (!text) return "";

  let num = text.replace(new RegExp("[^0-9]", "g"), "");
  let res = "(" + num.substr(0, 2);
  if (num.length > 2) res += ") " + num.substr(2, 4);
  if (num.length > 6) res += "-" + num.substr(6, 5);

  if (num.length > 10)
    res =
      "(" + num.substr(0, 2) + ") " + num.substr(2, 5) + "-" + num.substr(7, 4);

  return res;
}
