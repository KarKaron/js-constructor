import {row, col, css} from '../utils'

class Block {
  constructor(value, options) {
    this.value = value
    this.options = options
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован!')
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'h1', styles, classes} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles), classes)
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {tag = 'p', styles, classes} = this.options
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles), classes)
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {styles, classes} = this.options
    const html = this.value.map(item => col(item, classes)).join('')
    return row(html, css(styles))
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options)
  }
  toHTML() {
    const {styles, classes, styleImg: is, alt = "Картинка"} = this.options
    return row(`<img style="${css(is)}" src="${this.value}" alt="${alt}">`, css(styles), classes)
  }
}