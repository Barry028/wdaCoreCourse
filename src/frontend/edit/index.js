var tuInlineEditRowContents = {};

class StringEscaper {
  static replaceTag(tag) {
    var tagsToReplace = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;'
    };
    return tagsToReplace[tag] || tag;
  }

  static safe_tags_replace(str) {
    return str.replace(/[&<>]/g, StringEscaper.replaceTag);
  }
}



function tuInlineEdit(rowName, options) {
  let tableRow = document.getElementById(rowName);

  let cellSet = {};
  tuInlineEditRowContents[rowName] = {};
  let cell = JsUtils.findAll(tableRow, '[data-tu-inlinetype');
  for (let i = 0; i < cell.length; i++) {

    let cell = JsUtils.findAll(tableRow, '[data-tu-inlinetype')[i];
    let cellArray = JsUtils.makeArray(JsUtils.findAll(tableRow, '[data-tu-inlinetype'))

    if (cell.getAttribute('data-tu-inlineEditId') !== null) {
      let elId = cell.getAttribute('data-tu-inlineEditId') || null;
      cellSet.id = elId;
    }

    if (cell.getAttribute('data-tu-inlineEditLabel') !== null) {
      let label = cell.getAttribute('data-tu-inlineEditLabel') || null;
      cellSet.label = label;
    }

    if (cell.getAttribute('data-tu-inlineEditPlaceholder') !== null) {
      let placeholder = cell.getAttribute('data-tu-inlineEditPlaceholder') || null;
      cellSet.placeholder = placeholder;
    }

    tuInlineDefaultUpdateCell[rowName] = cell.innerHTML;

    if (options.hasOwnProperty("updateCell"))
      options.updateCell(cell, i, rowName, options, cellSet);
    else
      tuInlineDefaultUpdateCell(cell, i, rowName, options, cellSet);
  }
}

function tuInlineDefaultUpdateCell(cell, i, rowName, options, cellSet) {
  let attributesFilter = ["tuInlineoptionsvalue", "tuInlineoptionstitle"];
  let cellContent = "";
  let key;
  if (i === 0) {
    cellContent += `<form id='${rowName}Form'>`;
  }
  console.log(cell)
  switch (cell.dataset.tuInlinetype) {
    case "plain":
      cellContent += tuInlineEditRowContents[rowName][i];
      break;
    case "doneButton":
      let saveIcon = '<i class="svg-icon"><svg><use href="#ic-save"></use></svg></i>'
      cellContent += `<button class="btn btn--primary" type='submit' value='Finish' form='${rowName}Form'>儲存 ${saveIcon}</button>`;
      break;
    case "button":
      cellContent += tuInlineEditRowContents[rowName][i];
      break;
    case "link":
      cellContent += `<input 
                      class="t-form-control"
                      type='text' value='${JsUtils.trim(cell.innerText)}' 
                      id="${cellSet.id}" 
                      placeholder="${cellSet.placeholder}" 
                      title="${cellSet.placeholder}" 
                      form='${rowName}Form'`;
      for (key in cell.dataset) {
        console.log(key)
        console.log(cell)
        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 12) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(8)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += "/>";
      break;
    case "text":
      cellContent += `<input 
                      type='text' value='${JsUtils.trim(cell.innerText)}' 
                      id="${cellSet.id}" 
                      placeholder="${cellSet.placeholder}" 
                      title="${cellSet.placeholder}" 
                      form='${rowName}Form'`;
      for (key in cell.dataset) {

        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 6) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(6)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += "/>";
      break;
    case "date":
      cellContent += `<input type='date' value='${tuInlineEditRowContents[rowName][i]}' form='${rowName}Form'`;
      for (key in cell.dataset) {
        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 6) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(6)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += "/>";
      break;
    case "tel":
      cellContent += `<input type='tel' value='${tuInlineEditRowContents[rowName][i]}' form='${rowName}Form'`;
      for (key in cell.dataset) {
        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 6) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(6)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += "/>";
      break;
    case "email":
      cellContent += `<input type='email' value='${tuInlineEditRowContents[rowName][i]}' form='${rowName}Form'`;
      for (key in cell.dataset) {
        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 6) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(6)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += "/>";
      break;
    case "select":
      cellContent += "<select";
      for (key in cell.dataset) {
        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 6) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(6)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += ">";
      var optionsTitle = JSON.parse(cell.dataset.tuInlineoptionstitle);
      var optionsValue = cell.dataset.hasOwnProperty("tuInlineoptionsvalue") ? JSON.parse(cell.dataset.tuInlineoptionsvalue) : [];
      for (var j = 0; j < optionsTitle.length; j++) {
        cellContent += "<option ";
        cellContent += ((optionsValue.length <= j) ? "" : `value='${optionsValue[j]}'`);
        cellContent += ((tuInlineEditRowContents[rowName][i] == optionsTitle[j]) ? " selected='selected'" : "");
        cellContent += ">";
        cellContent += optionsTitle[j];
        cellContent += "</option>";
      }
      cellContent += "</select>";
      break;
    case "textarea":
      cellContent += `<textarea form='${rowName}Form'`;
      for (key in cell.dataset) {
        if (cell.dataset.hasOwnProperty(key) && key.substr(0, 6) == "tuInline" && attributesFilter.indexOf(key) == -1) {
          cellContent += ` ${key.substr(6)}='${cell.dataset[key]}'`;
        }
      }
      cellContent += ">";
      cellContent += tuInlineEditRowContents[rowName][i];
      cellContent += "</textarea>";
      break;
    default:
      cellContent += tuInlineEditRowContents[rowName][i];
      break;
  }

  cellContent = JsUtils.trim(cellContent);
  JsUtils.hide(cell)
  cell.parentElement.innerHTML += cellContent;

  if (i === 0) {

    document.getElementById(rowName + "Form").onsubmit = function() {
      event.preventDefault();
      if (this.reportValidity()) {
        if (options.hasOwnProperty("finish"))
          options.finish(rowName, options);
        else
          tuInlineDefaultFinish(rowName, options);
      }
    };
  }
}

function tuInlineDefaultFinish(rowName, options) {
  var tableRow = document.getElementById(rowName);
  var rowData = {};
  // console.log(tableRow);
  let cell = JsUtils.findAll(tableRow, '[data-tu-inlinetype');
  // console.log(cell);
  for (let i = 0; i < cell.length; i++) {
    let cell = JsUtils.findAll(tableRow, '[data-tu-inlinetype')[i];
    // tableRow.children[i];
    console.log(cell)
    var getFromChildren = (i === 0) ? 1 : 0;
    switch (cell.dataset.tuInlinetype) {
      case "plain":
        break;
      case "doneButton":
        break;
      case "button":
        break;
      case "link":
        rowData[cell.dataset.tuInlinename] = JsUtils.find(cell.parentElement,'.t-form-control').value;
        console.dir(cell.dataset.tuInlinename)
        tuInlineEditRowContents[rowName][i] = `<a href='${cell.dataset.tuInlinelinkformat.replace("%link%", StringEscaper.safe_tags_replace(JsUtils.find(cell.parentElement,'.t-form-control').value))}'>${StringEscaper.safe_tags_replace(cell.parentElement.children[getFromChildren].value)}</a>`;
        break;
      case "text":
      case "date":
      case "tel":
      case "email":
        rowData[cell.dataset.tuInlinename] = cell.querySelector[getFromChildren].value;
        tuInlineEditRowContents[rowName][i] = StringEscaper.safe_tags_replace(cell.querySelector[getFromChildren].value);
        break;
      case "select":
        rowData[cell.dataset.tuInlinename] = cell.children[getFromChildren].selectedIndex;
        rowData["_" + cell.dataset.tuInlinename + "Title"] = JSON.parse(cell.dataset.tuInlineoptionstitle)[cell.children[getFromChildren].selectedIndex];
        rowData["_" + cell.dataset.tuInlinename + "Value"] = JSON.parse(cell.dataset.tuInlineoptionsvalue)[cell.children[getFromChildren].selectedIndex];
        tuInlineEditRowContents[rowName][i] = JSON.parse(cell.dataset.tuInlineoptionstitle)[cell.children[getFromChildren].selectedIndex];
        break;
      case "textarea":
        // TODO textarea value is \n not <br/>
        rowData[cell.dataset.tuInlinename] = cell.children[getFromChildren].value;
        tuInlineEditRowContents[rowName][i] = cell.children[getFromChildren].value;
        break;
      default:
        break;
    }
  }

  // do whatever ajax magic
  if (options.hasOwnProperty("finishCallback"))
    options.finishCallback(rowData, rowName);
    console.log(rowData)
  // let cell = JsUtils.findAll(tableRow, '[data-tu-inlinetype');
  for (let i = 0; i < cell.length; i++) {
    // var cell = tableRow.querySelectorAll[i];
    let cell = JsUtils.findAll(tableRow, '[data-tu-inlinetype')[i]

    if (options.hasOwnProperty("finishCell")) {
      // return true invokes the default finishCell function
      if (options.finishCell(cell, i, rowName, tuInlineEditRowContents[rowName][i]) === true) {
        tuInlineDefaultFinishCell(cell, i, rowName);
      }
    } else
      tuInlineDefaultFinishCell(cell, i, rowName);
  }
}

function tuInlineDefaultFinishCell(cell, i, rowName) {
  var cellContent = "";
  // console.log(tuInlineEditRowContents)
  cellContent += tuInlineEditRowContents[rowName][i];
  // JsUtils.wrap(cell, cellContent)
  JsUtils.show(cell, 'inherit')
  console.log(cellContent)
  // cell.parentElement.innerHTML += cellContent;
  cell.innerHTML = cellContent;
  console.log(cellContent)
};