export function row(content, styles = '', classes = '') {
  return `<div class="row ${classes}" style="${styles}">${content}</div>`
}

export function col(content, classes = '') {
  return `<div class="col-sm ${classes}">${content}</div>`
}

export function css(styles = {}) {
  if(typeof styles === 'string') return styles
  const toString = key => `${key}: ${styles[key]}`
  return Object.keys(styles).map(toString).join(';')
}

export function block(type) {
  return `
    <form name="${type}" class="mb-2">
      <h5>${type}</h5>
      <div class="form-group my-2">
        <input type="text" class="form-control form-control-sm p-1" name="value" placeholder="value">
      </div>
      <div class="form-group mb-2">
        <input type="text" class="form-control form-control-sm p-1" name="styles" placeholder="styles">
      </div>
      <div class="form-group mb-2">
        <input type="text" class="form-control form-control-sm p-1" name="classes" placeholder="classes">
      </div>
      <button type="submit" class="btn btn-primary btn-sm px-2 py-1">Добавить</button>
    </form>
    <hr>
  ` 
}