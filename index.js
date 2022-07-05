const needle = require('needle')
const cheerio = require('cheerio')

const URL = 'https://lafounder.com/article/motivaciya-citaty'

needle.get(URL, function (err, res) {
  if (err) throw err
  const $ = cheerio.load(res.body)
  $('div.field--name-field-note-before')
    .find('p')
    .each((i, elem) => {
      console.log(elem.children[0].data)
    })
})
