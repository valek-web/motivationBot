const needle = require('needle')
const cheerio = require('cheerio')

const URL = 'https://lafounder.com/article/motivaciya-citaty'
let store = []

needle.get(URL, function (err, res) {
  if (err) throw err
  const $ = cheerio.load(res.body)
  let instance = $('div.field--name-field-note-before').find('p')
  instance.each((i, elem) => {
    store.push(elem.children[0].data)
  })
  instance.find('strong').each((iAuth, elemAuth) => {
    console.log(store[iAuth - 1] + elemAuth.children[0].data)
    console.log(iAuth)
  })
})
