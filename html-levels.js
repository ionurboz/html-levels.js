function htmlLevels(node = document.body, depth = 0) {
  let log = "";
  log += " ".repeat(depth);
  let arr = [];

  log += "%c" + node.tagName.toLowerCase() + "%c";

  for (var i = 0, atts = node.attributes, n = atts.length; i < n; i++) {
    arr.push(atts[i].nodeName);

    let tag = atts[i].nodeName;

    if (tag == "class") {
      let classname = atts[i].nodeValue.split(" ").join(".");
      log += "." + classname;
    } else if (tag == "id") {
      log += "#" + atts[i].nodeValue;
    } else {
      log += "[" + tag + '="' + atts[i].nodeValue + '"]';
    }
  }

  console.log(log, "color:green;", "color:red;");

  let children = Array.from(node.children);

  depth++;

  children.forEach(el => {
    htmlLevels(el, depth);
  });
}
