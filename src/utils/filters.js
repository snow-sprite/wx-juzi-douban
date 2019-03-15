const vueFilters = {
  resetTitle (title) {
    let regTitle = /金色/g
    if (regTitle.test(title)) {
      return title.replace(regTitle, '今日')
    }
    return title
  }
}

export default vueFilters
