const Discord = require('discord.js');
const docs = require('../docs.json')

function findDoc(name){
      var ref = false;
      docs.headings.forEach((x) => {
            x.subheadings.forEach((y) => {
                  y.symbols.forEach((z) => {
                        if (z.symbolName == name) {
                              ref = z;
                        }
                  });
            });
      });
      return ref;
}
